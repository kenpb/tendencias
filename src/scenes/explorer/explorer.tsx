import { h, Component } from 'preact'

import { BaseHeader, Footer } from '../../components'
import { Sidebar } from './sidebar'
import { Search } from './search'
import { PostList } from './postList'
import { httpRequest } from '@decorators/httpRequest'
// import { memoize } from '@decorators/memoize'

import queryString from 'query-string'
import withRouter from '@decorators/withRouter';

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
  @httpRequest('http://cluster.cenat.ac.cr:8081/Media/getMedia')
  fetchMediaSources(response?: mediaResponse, error?: Object) {
    if (error) return alert(error)

    const _allMedias = response.data.pop() // just popout the 100 entry 'todos'
    this.setState({ medias: response.data })

    // this.setState({ medias: [allMedias, ...response.data] })
  }

  // @memoize()
  @httpRequest('http://cluster.cenat.ac.cr:8081/category/getCategory')
  fetchCategories(response?: categoryResponse, error?: Object) {
    if (error) return alert(error)
    this.setState({ categories: response.data })
  }

  // @memoize()
  @httpRequest('http://cluster.cenat.ac.cr:8082/getPostsPaginated')
  fetchPosts(_params?: any, response?: postResponse, error?: Object) {
    if (error) return alert(error)
    this.setState({
      posts: response.data,
      currentPage: response.links[0].currentPage,
      totalPages: response.links[0].totalPages
    })
  }

  componentWillMount() {
    document.title = 'Tendencias | Explorar datos'

    // handling the dates but must ask first
    // const endDate = Math.floor(new Date(2017, 0, 1).getTime()/1000.0)
    // const startDate = Math.floor(new Date(2017, 11, 31).getTime()/1000.0)

    this.setState({ query: { finicio: 1544025551, ffinal: 1544457551, limit: 20, pagenumber: 1 }})

    if (this.props.location.search) {
      const query = queryString.parse(this.props.location.search)
      if (query['pagenumber']) this.setState({ ...this.state, query: { ...this.state.query, pagenumber: Number.parseInt(query['pagenumber'] as string) } })
      if (query['text']) this.setState({ ...this.state, query: { ...this.state.query, text: query['text'] } })
      if (query['medio']) this.setState({ ...this.state, query: { ...this.state.query, medio: query['medio'] } })
    }

    this.fetchPosts(this.state.query)
    this.fetchMediaSources()
    this.fetchCategories()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.setState({ posts: undefined })
      const query = queryString.parse(this.props.location.search)
      if (query['pagenumber']) this.setState({ ...this.state, query: { ...this.state.query, pagenumber: Number.parseInt(query['pagenumber'] as string) } })
      this.fetchPosts(this.state.query)
    }
  }

  onSearch(txt: string) {
    if (!txt) delete this.state.query.text
    this.setState({ ...this.state, query: { ...this.state.query, pagenumber: 1, ...(txt && {text: txt}) } })
    this.props.history.push({ pathname: '/datos', search: queryString.stringify(this.state.query) })
  }

  // mediaId is an array
  onMediaSet(mediaId) {
    if (mediaId.length == 0) delete this.state.query.medio
    this.setState({ ...this.state, query: { ...this.state.query, pagenumber: 1, ...(mediaId.length !== 0 && {medio: mediaId[0]}) } })
    this.props.history.push({ pathname: '/datos', search: queryString.stringify(this.state.query) })
  }

  onDateSet(years) {
    let finicio = 1544025551
    let ffinal = 1544457551

    if (years.length != 0) {
      ffinal = Math.floor(new Date(Math.max(...years), 11, 31).getTime()/1000.0)
      finicio = Math.floor(new Date(Math.min(...years), 0, 1).getTime()/1000.0)
    }

    this.setState({ ...this.state, query: { ...this.state.query, pagenumber: 1, ffinal, finicio } })
    this.props.history.push({ pathname: '/datos', search: queryString.stringify(this.state.query) })
  }

  render = () => (
    <div>
      <BaseHeader />
      <h1 style={{ textAlign: 'center' }}>Explorador de datos</h1>
      <Search onSearch={this.onSearch.bind(this)} currentSearch={this.state.query.text} />
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <Sidebar submitYears={this.onDateSet.bind(this)} submitMedia={this.onMediaSet.bind(this)} medias={this.state.medias} categories={this.state.categories} />
        <PostList posts={this.state.posts} currentPage={this.state.currentPage} totalPages={this.state.totalPages} />
      </div>
      <Footer />
    </div>
  )
}
