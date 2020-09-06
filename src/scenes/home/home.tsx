import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

import { BaseHeader, Footer } from '../../components'

import headerHero from '../../assets/home-hero.png'

import hallazgosButton from '../../assets/hallazgos-button.svg'
import hallazgosAvatar from '../../assets/hallazgos-avatar.svg'

import visualizacionesAvatar from '../../assets/visualizaciones-avatar.svg'
import visualizacionesButton from '../../assets/visualizaciones-button.svg'

import dataAvatar from '../../assets/data-avatar.svg'
import dataButton from '../../assets/data-button.svg'

import resourcesAvatar from '../../assets/resources-avatar.svg'
import resourcesButton from '../../assets/resources-button.svg'

import './home.scss'

export class Home extends Component<{}, {}> {

  componentDidMount() {
    document.title = 'Tendencias | Inicio'
  }

  render = () => (
    <div>
      <BaseHeader class="header">

      </BaseHeader>

      <div class="intro">
        <div class="text-wrapper">
          <h2 style={{ fontWeight: 'normal', }}>
            Les damos la bienvenida a Tendencias, un espacio para observar las dinámicas de las personas alrededor de medios de comunicación en línea en Costa Rica.
          </h2>
        </div>
      </div>

      <div>
        {/* findings section */}
        {/* <div class="findings-section">
          <div style={{ padding: '0 10px', background: '#d7effc' }}>
            <div class="findings-wrapper">
              <div class="findings-content">
                <Link to={'/graficos'}>
                  <img src={hallazgosButton} alt=""/>
                </Link>
                <h2 style={{ fontWeight: 'normal', float: 'left', }}>
                  Mostramos diversos hallazgos realizados por el grupo de investigación con el fin de aportar al conocimiento de esta área en el contexto costarricense.
                </h2>
              </div>
              <img src={hallazgosAvatar} alt="" style={{ height: '250px', }} />
            </div>
          </div>
        </div> */}

        {/* data section */}
        <div class="data-section">
          <div style={{ background: '#d7effc', padding: '0 10px' }}>
            <div class="data-wrapper">
              <div class="data-content">
                <Link to={'/datos'}>
                  <img src={dataButton} alt="" />
                </Link>
                <h2 style={{ fontWeight: 'normal', }}>
                  Brindamos acceso a los datos recopilados por el proyecto para incentivar nuevas iniciativas de investigación en el campo.
                </h2>
              </div>
              <img src={dataAvatar} alt="" style={{ transform: 'scaleX(-1)', height: '250px', }} />
            </div>
          </div>
        </div>

        {/* graph section */}
        <div style={{ padding: '0 10px' }}>
          <div class="graph-section">
            <img src={visualizacionesAvatar} style={{ transform: 'scaleX(-1)', height: '250px', }} alt="" />
            <div class="graph-content">
              <Link to={'/graficos'} class="cta">
                <img src={visualizacionesButton} alt="" />
              </Link>
              <h2 style={{ fontWeight: 'normal', }}>
                Presentamos de forma gráfica e interactiva las dinámicas en torno a los medios de comunicación en línea.
              </h2>
            </div>
          </div>
        </div>



        {/* resources section */}
        {/* <div style={{ padding: '0 10px' }}>
          <div class="resources-section">
            <img src={resourcesAvatar} alt="" style={{ height: '250px', }} />
            <div class="resources-content">
              <Link to={'/recursos'} class="cta">
                <img src={resourcesButton} alt="" style={{ float: 'right', }} />
              </Link>
              <h2 style={{ fontWeight: 'normal' }}>
                Ofrecemos una serie de recursos educativos abiertos para que la ciudadanía se acerque a la temática y pueda conocer más al respecto del tema.
            </h2>
            </div>
          </div>
        </div> */}
      </div>

      {/* footer section */}
      <Footer />
    </div>
  )
}
