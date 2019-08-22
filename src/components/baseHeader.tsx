import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

import headerBackground from '../assets/header.png'
import loginButton from '../assets/login-button.png'

export class BaseHeader extends Component<any, any> {
  render = (props, _state) => {
    const backgroundURL = props.backgroundUrl || headerBackground

    const styles = {
      // display: 'flex',
      // justifyContent: 'space-between',
      background: 'url(' + backgroundURL + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
      minHeight: '178px',
    }

    return (
      <div style={styles}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={"/"} style={{ textDecoration: 'none', marginLeft: '20em' }}>
            {/* <img src={} alt=""/> */}
            <h1 style={{ color: 'white', margin: '.15em .5em', fontSize: '5rem' }}>Logo</h1>
          </Link>

          <Link to={"/"} style={{ textDecoration: 'none', border: '.15em solid white', margin: '3em', borderRadius: '25px' }}>
            {/* <img src={} alt=""/> */}
            <h2 style={{ color: 'white', margin: '.15em .5em' }}>Iniciar Sesión</h2>
          </Link>
        </div>
        {props.children}
      </div>
    )
  }
}
