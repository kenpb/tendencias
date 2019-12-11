import { h, Component } from 'preact'

import logoCenat from '../assets/logo-cenat.png'
import logoCicom from '../assets/logo-cicom.svg'
import logoLiit from '../assets/logo-liit.svg'
import colab from '../assets/colab.svg'

export class Footer extends Component<{}, {}> {
  render = () => (
    // <div style={{ background: 'url(' + footerBackground + ')', backgroundRepeat: 'no-repeat', backgroundSize: '100%', marginTop: '5em', minHeight: '180px', display: 'flex', justifyContent: 'flex-end', backgroundPosition: 'bottom', }}>

    // </div>
    <div style={{
      background: 'linear-gradient(90deg, rgba(5,131,191,1) 0%, rgba(102,159,155,1) 50%, rgba(130,153,131,1) 100%)',
      height: '150px',
      marginTop: '80px',
      left: '0',
      bottom: '0',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}>
        <img style={{ height: '100px', margin: '0 10px', }} src={colab} alt="" />

        <a href={"http://cicom.eccc.ucr.ac.cr/"} style={{ textDecoration: 'none', }}>
          <img style={{ height: '100px', margin: '0 15px', }} src={logoCicom} alt="" />
        </a>

        <a href={"https://investiga.uned.ac.cr/liit/"} style={{ textDecoration: 'none', }}>
          <img style={{ height: '80px', margin: '0 15px', }} src={logoLiit} alt="" />
        </a>
        <a href={"http://www.cenat.ac.cr/en/"} style={{ textDecoration: 'none', }}>
          <img style={{ height: '100px', margin: '0 15px', }} src={logoCenat} alt="" />
        </a>
      </div>
    </div>
  )
}
