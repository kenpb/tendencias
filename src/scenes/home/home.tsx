import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

import { BaseHeader, Footer } from '../../components'

import headerHero from '../../assets/home-hero.png'

import tendenciaBackground from '../../assets/tendencia.png'
import tendenciaAvatar from '../../assets/tendencia-avatar.png'
import tendenciaButton from '../../assets/tendencia-button.png'

import dataAvatar from '../../assets/data-avatar.png'
import dataButton from '../../assets/data-button.png'

import resourcesBackground from '../../assets/resources.png'
import resourcesAvatar from '../../assets/resources-avatar.png'
import resourcesButton from '../../assets/resources-button.png'

// const heroStyle = {
//   background: 'url(' + headerHero + ')',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'right top',
// }

export class Home extends Component<{}, {}> {

  componentDidMount() {
    document.title = 'Tendencias | Inicio'
  }

  render = () => (
    <div>
      <BaseHeader backgroundUrl={headerHero}>
        <div style={{ paddingTop: '31.250em', margin: '0 8em' }}>
          <div style={{ maxWidth: '60%', }}>
            <h2 style={{ fontWeight: 'normal', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.</h2>
          </div>
          <h2 style={{ fontWeight: 'normal', }}> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam id nisi auctor, aliquam purus non, elementum odio. Praesent ullamcorper sapien et ante pretium vehicula. Pellentesque mollis nec eros sit amet bibendum. Suspendisse eget odio in lacus sodales mollis. Mauris dignissim scelerisque neque facilisis fringilla. Nam ipsum neque, consequat eu dolor vel, dignissim volutpat purus.</h2>
        </div>
      </BaseHeader>

      {/* graph section */}
      <div style={{ background: 'url(' + tendenciaBackground + ')', backgroundRepeat: 'no-repeat', minHeight: '35.375em', marginTop: '8em' }}>
        <div style={{ margin: '0 8em', paddingTop: '6em', display: 'flex' }}>
          <img src={tendenciaAvatar} alt=""/>
          <Link to={'/graficos'} style={{ position: 'absolute', paddingLeft: '20em' }}>
            <img src={tendenciaButton} alt=""/>
          </Link>
          <div style={{ maxWidth: '60%', paddingLeft: '5em', paddingTop: '5em', }}>
            <h2 style={{ fontWeight: 'normal', }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.
            </h2>
          </div>
        </div>
      </div>

      {/* data section */}
      <div>
        <div style={{ margin: '0 8em', paddingTop: '6em', display: 'flex' }}>
          <div style={{ maxWidth: '60%', paddingLeft: '5em', paddingTop: '5em', }}>
            <h2 style={{ fontWeight: 'normal', }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.
            </h2>
          </div>
          <Link to={'/datos'} style={{ position: 'absolute', right: '32.55em' }}>
            <img src={dataButton} alt=""/>
          </Link>
          <img src={dataAvatar} alt="" style={{ float: 'right' }}/>
        </div>
      </div>

      {/* resources section */}
      <div style={{ background: 'url(' + resourcesBackground + ')', backgroundRepeat: 'no-repeat', minHeight: '35.375em', marginTop: '8em' }}>
        <div style={{ margin: '0 8em', paddingTop: '6em', display: 'flex' }}>
          <img src={resourcesAvatar} alt=""/>
          <Link to={'/recursos'} style={{ position: 'absolute', paddingLeft: '20em' }}>
            <img src={resourcesButton} alt=""/>
          </Link>
          <div style={{ maxWidth: '60%', paddingLeft: '5em', paddingTop: '5em', }}>
            <h2 style={{ fontWeight: 'normal', }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.
            </h2>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  )
}
