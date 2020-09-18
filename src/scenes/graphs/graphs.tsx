import { h, Component } from 'preact'
import { Link } from 'react-router-dom'
import { BaseHeader, Footer } from '../../components'

import header from '../../assets/header.png'
import logo from '../../assets/logo.svg'

export class Graphs extends Component<any, {}> {

  // display one or another
  private showNube = true
  private showMapa = false
  private showSerieA = false
  private showSerieB = false

  // we want to load only when visible at least once
  private loadNube = true
  private loadMapa = false
  private loadSerieA = false
  private loadSerieB = false

  private readonly iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  }

  componentWillMount() {
    document.title = 'Tendencias | Explorar de gráficos'

    window.scrollTo(0, 0)
  }

  showTab(tab) {
    console.log(tab)

    this.showNube = false
    this.showMapa = false
    this.showSerieA = false
    this.showSerieB = false

    this[`show${tab}`] = true
    this[`load${tab}`] = true // set the loading so we fetch the graphic
  }

  render() {
    return (
      <div>
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

        <div style={{
          maxWidth: '1040px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '50px',
        }}>
          <h1 style="text-align: center;margin-top:0;">Explorador de gráficos</h1>

          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingBottom: '0.5rem',
            marginBottom: '1rem',
            borderBottom: '1px solid #eee'
          }}>
            <a onClick={e => this.showTab('Nube')} href="#nube">Palabras</a>
            <a onClick={e => this.showTab('Mapa')} href="#mapa">Temas</a>
            <a onClick={e => this.showTab('SerieA')} href="#serieA">Cantidad</a>
            <a onClick={e => this.showTab('SerieB')} href="#serieB">Engagement</a>
          </div>

          <div style={{ position: 'relative', width: '100%', overflow: 'hidden', paddingTop: '100%' }}>
            {/* first one loads by default */}
            <iframe style={{ display: this.showNube ? 'block' : 'none', ...this.iframeStyle }}
              src="https://tendencias.cenat.ac.cr/api/graficos/mediatic/nube"></iframe>

            <iframe style={{ display: this.showMapa ? 'block' : 'none', ...this.iframeStyle }}
              src={ this.loadMapa ? "https://tendencias.cenat.ac.cr/api/graficos/mediatic/mapa" : "about:blank"}></iframe>

            <iframe style={{ display: this.showSerieA ? 'block' : 'none', ...this.iframeStyle }}
              src={ this.loadSerieA ? "https://tendencias.cenat.ac.cr/api/graficos/mediatic/serieA" : "about:blank"}></iframe>

            <iframe style={{ display: this.showSerieB ? 'block' : 'none', ...this.iframeStyle }}
              src={ this.loadSerieB ? "https://tendencias.cenat.ac.cr/api/graficos/mediatic/serieB" : "about:blank"}></iframe>
          </div>
        </div>

        {/* footer section */}
        <Footer />
      </div>
    )
  }
}
