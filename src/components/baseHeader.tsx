import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

import headerBackground from '../assets/header.png'
import logo from '../assets/logo.svg'
// import loginButton from '../assets/login-button.png'

export class BaseHeader extends Component<any, any> {
  render = (props, _state) => {
    const backgroundURL = props.backgroundUrl || headerBackground
    const minHeight = props.minHeight || '600px'

    const styles = {
      // display: 'flex',
      // justifyContent: 'space-between',
      background: 'url(' + backgroundURL + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right top',
      backgroundSize: '80%',
      minHeight,
    }

    return (
      <div style={styles}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '75%', float: 'right' }}>
          <Link to={"/"}style={{ display: 'flex' }}>
            <img src={logo} style={{ width: '150px' }} alt=""/>
          </Link>

          <Link to={"/"} style={{ textDecoration: 'none', border: '.15em solid white', margin: '2em', borderRadius: '25px' }}>
            {/* <img src={} alt=""/> */}
            <h2 style={{ color: 'white', margin: '0 .5em', fontSize: '1.2rem' }}>Iniciar Sesión</h2>
          </Link>
        </div>
        {props.children}
      </div>
    )
  }
}
