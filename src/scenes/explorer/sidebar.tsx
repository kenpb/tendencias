import { h, Component } from 'preact'

import sidebarBackground from '../../assets/data-sidebar.png'

// interface sidebarState {
//   toggledMedias: boolean,
//   toggledCategories: boolean
// }

// TODO: dunno about this state handling
export class Sidebar extends Component<{ submitYears: Function, submitMedia: Function, medias: Array<Object>, categories: Array<Object> }, any> {

  constructor() {
    super()
    // set initial time:
    this.setState({ toggledMedias: false, toggledCategories: false, selectedMedias: [], selectedYears: [] })
    this.toggleMedias = this.toggleMedias.bind(this)
    this.toggleCategories = this.toggleCategories.bind(this)
    this.toggleYears = this.toggleYears.bind(this)
    this.setMedia = this.setMedia.bind(this)
  }

  // state = {
  //   toggledMedias: false
  // }

  toggleMedias() {
    this.setState({ toggledMedias: !this.state.toggledMedias })
  }

  toggleCategories() {
    this.setState({ toggledCategories: !this.state.toggledCategories })
  }

  toggleYears() {
    this.setState({ toggledYears: !this.state.toggledYears })
  }

  setYear({ target: { checked } }: any, media) {
    if (!checked)
      this.setState({ selectedYears: this.state.selectedYears.filter(mediaId => mediaId !== media) })
    else
      this.setState({ selectedYears: [...this.state.selectedYears, media] })
  }

  setMedia({ target: { checked } }: any, media) {
    if (!checked)
      this.setState({ selectedMedias: this.state.selectedMedias.filter(mediaId => mediaId !== media) })
    else
      this.setState({ selectedMedias: [...this.state.selectedMedias, media] })
  }

  render({ submitYears, submitMedia, medias, categories }) {
    if (!medias || !categories) return (<p>cargando...</p>)

    return (
      <div style={{ background: 'url(' + sidebarBackground + ')', backgroundRepeat: 'no-repeat', minHeight: '1486px', minWidth: '534px', backgroundPosition: 'right' }}>
        <h1 style={{ textAlign: 'center', background: 'white', marginTop: '75px', fontWeight: '700', color: '#fdba00' }}>Filtros</h1>
        <div>
          <label onClick={this.toggleYears}>Años</label>
        </div>
        <span style={{ display: this.state.toggledYears ? 'block' : 'none' }}>
          { [2014, 2015, 2016, 2017, 2018].map(year =>
            <div>
              <label>
                <input onChange={e => this.setYear(e, year)} type="checkbox" style={{ marginRight: '.5rem' }} />
                <small>{year}</small>
              </label>
            </div>
          ) }
          <div style={{ margin: '.5rem 0' }}>
            <button onClick={e => submitYears(this.state.selectedYears)}>Aplicar</button>
          </div>
        </span>
        <div>
          <label onClick={this.toggleMedias}>Medios</label>
        </div>
        <span style={{ display: this.state.toggledMedias ? 'block' : 'none' }}>
          { medias.map((media) => <div>
              <label style={{ width: '100%', display: 'flex' }}>
                <input onChange={e => this.setMedia(e, media['facebook_id'])} type="checkbox" style={{ marginRight: '.5rem' }} />
                <small>{media['name']}</small>
              </label>
            </div>) }
          <div style={{ margin: '.5rem 0' }}>
            <button onClick={e => submitMedia(this.state.selectedMedias)}>Aplicar</button>
          </div>
        </span>
        <div>
          <label onClick={this.toggleCategories}>Categorias</label>
        </div>
        <span style={{ display: this.state.toggledCategories ? 'block' : 'none' }}>
          { categories.map(category => {
              return (
                <div>
                  <label>
                    <input type="checkbox" style={{ marginRight: '.5rem' }} />
                    <small>{category['category_name']}</small>
                  </label>
                </div>
              )}
            )
          }
          <div style={{ margin: '.5rem 0' }}>
            <button>Aplicar</button>
          </div>
        </span>
      </div>)
  }
}
