import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

import { saveAs } from 'file-saver'

import { BaseHeader, Footer } from '../../components'
import { Sidebar } from './sidebar'
import { Search } from './search'
import { PostList } from './postList'
import { httpRequest, querify } from '@decorators/httpRequest'
// import { memoize } from '@decorators/memoize'

import queryString from 'query-string'
import withRouter from '@decorators/withRouter'
import config from '../../config'

import './search.scss'

import header from '../../assets/header.png'
import logo from '../../assets/logo.svg'

interface media {
  media_id: number,
  name: string
}

interface mediaResponse {
  data: Array<media>
}

interface subcategory {
  sub_category_id: number,
  sub_category_name: string
}

interface category {
  category_id: number,
  category_name: string,
  sub_categories: Array<subcategory>
}

interface categoryResponse {
  data: Array<category>
}

interface dataExplorerState {
  medias: any,
  categories: any,
  posts: any,
  totalPages: number,
  currentPage: number
}

interface postLinks {
  next: string,
  previous: string,
  currentPage: number,
  totalPages: number
}

interface post {
  name: string, // media name
  post_message: string // post title
}

interface postResponse {
  links: Array<postLinks>,
  data: Array<post>
}

@withRouter()
export class DataExplorer extends Component<any, any> {

  // @memoize()
  @httpRequest(`${config.catalogsURL}/Media/getMedia`)
  fetchMediaSources(response?: mediaResponse, error?: Object) {
    if (error) return alert(error)

    response.data.pop() // just popout the 100 entry 'todos'
    this.setState({ medias: response.data })

    // this.setState({ medias: [allMedias, ...response.data] })
  }

  // @memoize()
  @httpRequest(`${config.catalogsURL}/category/getCategory`)
  fetchCategories(response?: categoryResponse, error?: Object) {
    if (error) return alert(error)
    this.setState({ categories: response.data })
  }

  // @memoize()
  @httpRequest(`${config.dataURL}/getPostsPaginated`)
  fetchPosts(_params?: any, response?: postResponse, error?: Object) {
    if (error) return alert(error)
    this.setState({
      posts: response.data,
      currentPage: response.links[0].currentPage,
      totalPages: response.links[0].totalPages
    })
  }

  fetchCSVPosts() {
    if (!this.state.canDownload) return

    this.setState({ ...this.state, downloading: true }, async () => {
      const fileResponse = await fetch(`${config.dataURL}/getPosts${querify(this.state.query)}`)
      const blob = await fileResponse.blob()

      saveAs(blob, 'resultados.csv')
      this.setState({ ...this.state, downloading: false })
    })
  }

  stateHasDownloadFlags() {
    const { medio, tema } = this.state.query
    this.setState({ ...this.state, canDownload: medio || tema })
  }

  componentWillMount() {
    document.title = 'Tendencias | Explorar datos'

    window.scrollTo(0, 0) // we just arrived, scroll to top before rendering

    // handling the dates but must ask first
    const startDate = Math.floor(new Date(2018, 0, 1).getTime() / 1000.0)
    const endDate = Math.floor(new Date(2018, 6, 30).getTime() / 1000.0)

    this.setState({ query: { finicio: startDate, ffinal: endDate, limit: 20, pagenumber: 1 }, canDownload: false, downloading: false })

    if (this.props.location.search) {
      const query = queryString.parse(this.props.location.search)
      if (query['pagenumber']) this.setState({ ...this.state, query: { ...this.state.query, pagenumber: Number.parseInt(query['pagenumber'] as string) } })
      if (query['text']) this.setState({ ...this.state, query: { ...this.state.query, text: query['text'] } })
      if (query['medio']) this.setState({ ...this.state, query: { ...this.state.query, medio: query['medio'] } })
      if (query['category']) this.setState({ ...this.state, query: { ...this.state.query, category: query['category'] } })
    }

    this.fetchPosts(this.state.query)
    this.fetchMediaSources()
    this.fetchCategories()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      // scroll to top on page/filter change
      window.scrollTo(0, 0)
      // empty the page
      this.setState({ posts: undefined })
      // grab the parameters
      const query = queryString.parse(this.props.location.search)
      // set the parsed query to our state
      if (query['pagenumber']) this.setState({ ...this.state, query: { ...this.state.query, pagenumber: Number.parseInt(query['pagenumber'] as string) } })

      // recompute the can download
      this.stateHasDownloadFlags()

      // refetch the data
      this.fetchPosts(this.state.query)
    }
  }

  onSearch(txt: string) {
    if (!txt) delete this.state.query.text
    this.setState({ ...this.state, query: { ...this.state.query, pagenumber: 1, ...(txt && { text: txt }) } })
    this.props.history.push({ pathname: '/datos', search: queryString.stringify(this.state.query) })
  }

  // mediaId is an array
  onMediaSet(mediaId) {
    if (mediaId.length == 0) delete this.state.query.medio
    this.setState({ ...this.state, query: { ...this.state.query, pagenumber: 1, ...(mediaId.length !== 0 && { medio: mediaId.join(',') }) } })
    this.props.history.push({ pathname: '/datos', search: queryString.stringify(this.state.query) })
  }

  onCategorySet(categories) {
    if (categories.length == 0) delete this.state.query.tema
    this.setState({ ...this.state, query: { ...this.state.query, pagenumber: 1, ...(categories.length !== 0 && { tema: categories.join(',') }) } })
    this.props.history.push({ pathname: '/datos', search: queryString.stringify(this.state.query) })
  }

  onDateSet(years) {
    let finicio = 1544025551
    let ffinal = 1544457551

    if (years.length != 0) {
      ffinal = Math.floor(new Date(Math.max(...years), 11, 31).getTime() / 1000.0)
      finicio = Math.floor(new Date(Math.min(...years), 0, 1).getTime() / 1000.0)
    }

    this.setState({ ...this.state, query: { ...this.state.query, pagenumber: 1, ffinal, finicio } })
    this.props.history.push({ pathname: '/datos', search: queryString.stringify(this.state.query) })
  }

  render = () => {
    const downloadSection = <div style={{ display: 'flex', justifyContent: 'end', padding: '0 1.5rem', }}>
      <button style="background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;cursor: pointer;"
        disabled={this.state.downloading} onClick={this.fetchCSVPosts.bind(this)}>
        {this.state.downloading ? 'Descargando...' : 'Descargar busqueda'}
      </button>
    </div>

    return (<div>
      <div style="overflow: hidden;position: relative;height: 80px;">
        <img src={header} style={{ position: 'absolute', width: '3000px', overflow: 'hidden', left: '-50px' }} />
        <div className="navigation" style="align-items: center;">
          <Link to={"/"} style={{ zIndex: 1, display: 'flex', margin: '10px 0', }}>
            <img src={logo} style={{ width: '150px', height: '30px', }} alt="" />
          </Link>

          <Link to={"/"} style={{ zIndex: 1, textDecoration: 'none', margin: '10px 0', border: '.15em solid white', borderRadius: '25px', height: '30px', }}>
            <h2 style={{ color: 'white', margin: '0 .5em', fontSize: '1.2rem' }}>Iniciar Sesión</h2>
          </Link>
        </div>
      </div>
      <div style={{ background: '#fff', position: 'relative' }}>
        <Search onSearch={this.onSearch.bind(this)} currentSearch={this.state.query.text} />
        <div style={{ display: 'flex', marginTop: '1rem', minHeight: '80vh', width: '100%' }}>
          <Sidebar submitYears={this.onDateSet.bind(this)} submitCategory={this.onCategorySet.bind(this)} submitMedia={this.onMediaSet.bind(this)} medias={this.state.medias} categories={this.state.categories} />
          <div style={{ width: 'calc(100% - 2rem)', display: 'flex', flexDirection: 'column', }}>
            {this.state.posts && this.state.canDownload ? downloadSection : ''}
            <PostList posts={this.state.posts} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
          </div>
        </div>
      </div>
      <Footer />
    </div>)
  }
}
