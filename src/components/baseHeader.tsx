import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

import headerBackground from '../assets/home-hero.svg'
import logo from '../assets/logo.svg'
// import loginButton from '../assets/login-button.png'

import './header.scss'

export class BaseHeader extends Component<any, any> {
  render = (props, _state) => {

    return (

      <div className="header-wrapper">
        <img className="background" src={headerBackground} />
        <div className="navigation">
          <Link to={"/"}style={{ zIndex: 1, display: 'flex', margin: '10px 0', }}>
            <img src={logo} style={{ width: '150px', height: '30px', }} alt=""/>
          </Link>

          <Link to={"/"} style={{ zIndex: 1, textDecoration: 'none', margin: '10px 0', border: '.15em solid white', borderRadius: '25px', height: '30px', }}>
            <h2 style={{ color: 'white', margin: '0 .5em', fontSize: '1.2rem' }}>Iniciar Sesión</h2>
          </Link>
        </div>
      </div>

    )
  }
}
