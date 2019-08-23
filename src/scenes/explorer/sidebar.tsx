import { h, Component } from 'preact'

import sidebarBackground from '../../assets/data-sidebar.png'
import dataLabelIcon from '../../assets/data-label-icon.png'
import dataApplyFilter from '../../assets/data-apply-filter.png'

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
      <div style={{ background: 'url(' + sidebarBackground + ')', backgroundRepeat: 'no-repeat', minHeight: '1486px', minWidth: '534px', backgroundPosition: 'right top' }}>
        <h1 style={{ textAlign: 'center', background: 'white', marginTop: '75px', fontWeight: '700', color: '#fdba00' }}>Filtros</h1>

        {/* Years */}
        <div style={{ maxWidth: '434px', display: 'block', margin: '0 auto', }}>

          <div style={{ background: 'rgba(255,232,153,0.6)', minHeight: '120px', }}>
            <img src={dataLabelIcon} alt="" style={{ minWidth: '89px', paddingTop: '16px', position: 'absolute', left: 0, }} />
            <h2 style={{ display: 'block', verticalAlign: 'top', margin: 0, marginLeft: '60px', paddingTop: '.25em', fontWeight: 'bold', }}>Años</h2>
            <span style={{ padding: '1em', display: 'block',  }}>
              { [2014, 2015, 2016, 2017, 2018].map(year =>
                  <label style={{ display: 'inline-block' }}>
                    <input onChange={e => this.setYear(e, year)} type="checkbox" style={{ marginRight: '.5rem' }} />
                    <h3 style={{ display: 'inline-block', margin: 0, }}>{year}</h3>
                  </label>
              ) }
            </span>
          </div>

          <div style={{ height: '56px', margin: '1em 0', }}>
            <button onClick={e => submitYears(this.state.selectedYears)} style={{
              border: 'none',
              font: 'inherit',
              color: 'inherit',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              minWidth: '165px',
              minHeight: '54px',
              background: 'url(' + dataApplyFilter + ')',
              backgroundRepeat: 'no-repeat',
              float: 'right',
            }}></button>
          </div>
        </div>

        {/* Media */}
        <div style={{ maxWidth: '434px', display: 'block', margin: '0 auto', }}>

          <div style={{ background: 'rgba(255,232,153,0.6)', minHeight: '120px', }}>
            <img src={dataLabelIcon} alt="" style={{ minWidth: '89px', paddingTop: '16px', position: 'absolute', left: 0, }} />
            <h2 style={{ display: 'block', verticalAlign: 'top', margin: 0, marginLeft: '60px', paddingTop: '.25em', fontWeight: 'bold', }}>Medios</h2>
            <span style={{ padding: '1em', display: 'block', }}>
              { medias.map((media) =>
                  <label style={{ display: 'inline-block' }}>
                    <input onChange={e => this.setMedia(e, media['facebook_id'])} type="checkbox" style={{ marginRight: '.5rem' }} />
                    <h3 style={{ display: 'inline-block', margin: 0, }}>{media['name']}</h3>
                  </label>
              ) }
            </span>
          </div>

          <div style={{ height: '56px', margin: '1em 0', }}>
            <button onClick={e => submitMedia(this.state.selectedMedias)} style={{
              border: 'none',
              font: 'inherit',
              color: 'inherit',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              minWidth: '165px',
              minHeight: '54px',
              background: 'url(' + dataApplyFilter + ')',
              backgroundRepeat: 'no-repeat',
              float: 'right',
            }}></button>
          </div>
        </div>

        {/* Category */}
        <div style={{ maxWidth: '434px', display: 'block', margin: '0 auto', }}>

          <div style={{ background: 'rgba(255,232,153,0.6)', minHeight: '120px', }}>
            <img src={dataLabelIcon} alt="" style={{ minWidth: '89px', paddingTop: '16px', position: 'absolute', left: 0, }} />
            <h2 style={{ display: 'block', verticalAlign: 'top', margin: 0, marginLeft: '60px', paddingTop: '.25em', fontWeight: 'bold', }}>Categorías</h2>
            <span style={{ padding: '1em', display: 'block', }}>
              { categories.map(category => {
                  return (
                    <label style={{ display: 'inline-block' }}>
                      <input type="checkbox" style={{ marginRight: '.5rem' }} />
                      <h3 style={{ display: 'inline-block', margin: 0, }}>{category['category_name']}</h3>
                    </label>
                  )}
                )
              }
            </span>
          </div>

          <div style={{ height: '56px', margin: '1em 0', }}>
            <button style={{
              border: 'none',
              font: 'inherit',
              color: 'inherit',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              minWidth: '165px',
              minHeight: '54px',
              background: 'url(' + dataApplyFilter + ')',
              backgroundRepeat: 'no-repeat',
              float: 'right',
            }}></button>
          </div>
        </div>
      </div>)
  }
}
