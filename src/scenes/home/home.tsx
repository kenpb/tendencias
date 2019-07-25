import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

import { BaseHeader, Footer } from '../../components'

import logoCenat from '../../assets/logo-cenat.png'
import logoCicom from '../../assets/logo-cicom.png'
import logoLiit from '../../assets/logo-liit.png'

export class Home extends Component<{}, {}> {

  componentDidMount() {
    document.title = 'Tendencias | Inicio'
  }

  render = () => (
    <div>
      <BaseHeader>
        <h3>Login</h3>
      </BaseHeader>

      <div style={{ padding: '1rem 0' }}>
        {/* <h1 style={{ textAlign: 'center' }}>Hero Image/Video Header?</h1> */}
        <img src='https://via.placeholder.com/1140x350' alt='some hero image' style={{ 'width': '100%', height: '350px' }} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit. Pellentesque feugiat leo sit amet aliquam pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam id nisi auctor, aliquam purus non, elementum odio. Praesent ullamcorper sapien et ante pretium vehicula. Pellentesque mollis nec eros sit amet bibendum. Suspendisse eget odio in lacus sodales mollis. Mauris dignissim scelerisque neque facilisis fringilla. Nam ipsum neque, consequat eu dolor vel, dignissim volutpat purus.</p>
        <h3 style={{ 'padding-top': 0, 'color': 'rgba(0,0,0,.38)', 'text-align': 'center', marginTop: '2rem' }}>Una colaboración de</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logoCenat} alt='logo-cenat' style={{ height: '85px', padding: '8px', marginRight: '1rem', verticalAlign: 'top' }} />
          <img src={logoCicom} alt='logo-cicom' style={{ height: '100px', padding: '8px', verticalAlign: 'top' }} />
          <img src={logoLiit} alt='logo-liit' style={{ height: '100px', padding: '8px', verticalAlign: 'top' }} />
        </div>
      </div>

      <div style={{ padding: '1rem 0' }}>
        <h1 style={{ textAlign: 'center' }}>Explorador de gráficos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit. Pellentesque feugiat leo sit amet aliquam pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
        <Link to={'/graficos'}>Explorador de gráficos</Link>
      </div>

      <div style={{ padding: '1rem 0' }}>
        <h1 style={{ textAlign: 'center' }}>Explorador de datos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit. Pellentesque feugiat leo sit amet aliquam pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
        <Link to={'/datos'}>Explorador de datos</Link>
      </div>

      <div style={{ padding: '1rem 0' }}>
        <h1 style={{ textAlign: 'center' }}>Recursos educativos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit. Pellentesque feugiat leo sit amet aliquam pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        <Link to={'/recursos'}>Recursos educativos</Link>
      </div>

      <Footer />
    </div>
  )
}
