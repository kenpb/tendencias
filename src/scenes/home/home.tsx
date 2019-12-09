import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

import { BaseHeader, Footer } from '../../components'

import headerHero from '../../assets/home-hero.svg'
import background from '../../assets/background.svg'

import hallazgosButton from  '../../assets/hallazgos-button.svg'
import hallazgosAvatar from  '../../assets/hallazgos-avatar.svg'

import visualizacionesAvatar from '../../assets/visualizaciones-avatar.svg'
import visualizacionesButton from '../../assets/visualizaciones-button.svg'

import dataAvatar from '../../assets/data-avatar.svg'
import dataButton from '../../assets/data-button.svg'

import resourcesAvatar from '../../assets/resources-avatar.svg'
import resourcesButton from '../../assets/resources-button.svg'

export class Home extends Component<{}, {}> {

  componentDidMount() {
    document.title = 'Tendencias | Inicio'
  }

  render = () => (
    <div>
      <BaseHeader backgroundUrl={headerHero}>
        <div style={{ padding: '10em 10px 0 10px', margin: '0 auto', maxWidth: '1200px', }}>
          <div style={{ maxWidth: '70%', }}>
            <h2 style={{ fontWeight: 'normal', }}> Les damos la bienvenida a Tendencias, un espacio para observar las dinámicas de las personas alrededor de medios de comunicación en línea en Costa Rica.</h2>
          </div>
          {/* <h2 style={{ fontWeight: 'normal', }}> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam id nisi auctor, aliquam purus non, elementum odio. Praesent ullamcorper sapien et ante pretium vehicula. Pellentesque mollis nec eros sit amet bibendum. Suspendisse eget odio in lacus sodales mollis. Mauris dignissim scelerisque neque facilisis fringilla. Nam ipsum neque, consequat eu dolor vel, dignissim volutpat purus.</h2> */}
        </div>
      </BaseHeader>

      {/* findings section */}
      <div class="findings-wrapper" style={{ marginTop: '0em' }}>
        <div class="findings" style={{ padding: '0 10px' }}>
          <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '6em 0 2.5em', display: 'flex', justifyContent: 'center', }}>
            <div style={{ maxWidth: '60%', paddingRight: '5em' }}>
              <Link to={'/graficos'}>
                <img src={hallazgosButton} alt="" style={{  }}/>
              </Link>
              <h2 style={{ fontWeight: 'normal', float: 'left', }}>
                Mostramos diversos hallazgos realizados por el grupo de investigación con el fin de aportar al conocimiento de esta área en el contexto costarricense.
              </h2>
            </div>
            <img src={hallazgosAvatar} alt="" style={{ height: '250px', }} />
          </div>
        </div>
      </div>

      {/* graph section */}
      <div style={{ padding: '0 10px' }}>
        <div style={{ margin: '0 auto', maxWidth: '1200px', paddingTop: '3em', display: 'flex', justifyContent: 'center', }}>
          <img src={visualizacionesAvatar} style={{ transform: 'scaleX(-1)', height: '250px', }} alt=""/>
          <div style={{ maxWidth: '60%', paddingLeft: '5em' }}>
            <Link to={'/graficos'} style={{ width: '50%',  marginLeft: '50%', display: 'inline-block' }}>
              <img src={visualizacionesButton} alt="" style={{ float: 'right', }}/>
            </Link>
            <h2 style={{ fontWeight: 'normal', }}>
              Presentamos de forma gráfica e interactiva las dinámicas en torno a los medios de comunicación en línea.
            </h2>
          </div>
        </div>
      </div>

      {/* data section */}
      <div class="data-wrapper" style={{ marginTop: '3em' }}>
        <div class="data" style={{ padding: '0 10px' }}>
          <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '6em 0px 2.5em', display: 'flex', justifyContent: 'center', }}>
            <div style={{ maxWidth: '60%' }}>
              <Link to={'/datos'}>
                <img src={dataButton} alt="" style={{  }}/>
              </Link>
              <h2 style={{ fontWeight: 'normal', }}>
                Brindamos acceso a los datos recopilados por el proyecto para incentivar nuevas iniciativas de investigación en el campo.
              </h2>
            </div>
            <img src={dataAvatar} alt="" style={{ transform: 'scaleX(-1)', height: '250px', }}/>
          </div>
        </div>
      </div>

      {/* resources section */}
      <div style={{ padding: '0 10px' }}>
        <div style={{ margin: '0 auto', maxWidth: '1200px', display: 'flex', paddingTop: '2rem', justifyContent: 'center', }}>
          <img src={resourcesAvatar} alt="" style={{ height: '250px', }} />
          <div style={{ maxWidth: '60%', paddingLeft: '5em' }}>
            <Link to={'/recursos'} style={{ marginLeft: '50%', width: '50%', display: 'inline-block', float: '' }}>
              <img src={resourcesButton} alt="" style={{ float: 'right', }}/>
            </Link>
            <h2 style={{ fontWeight: 'normal' }}>
              Ofrecemos una serie de recursos educativos abiertos para que la ciudadanía se acerque a la temática y pueda conocer más al respecto del tema.
            </h2>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  )
}
