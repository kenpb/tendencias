import { h, Component } from 'preact'

import logoCenat from '../assets/logo-cenat.png'
import logoCicom from '../assets/logo-cicom.svg'
import logoLiit from '../assets/logo-liit.svg'
import colab from '../assets/colab.svg'

import './footer.scss'

export class Footer extends Component<{}, {}> {
  render = () => (
    // <div style={{ background: 'url(' + footerBackground + ')', backgroundRepeat: 'no-repeat', backgroundSize: '100%', marginTop: '5em', minHeight: '180px', display: 'flex', justifyContent: 'flex-end', backgroundPosition: 'bottom', }}>

    // </div>
    <div class="footer">
      <div class="logos-wrapper">
        <img class="logo-img" style={{ height: '100px', margin: '0 10px', }} src={colab} alt="" />

        <span class="logos-wrapper">
          <a class="logo-img" href={"http://cicom.eccc.ucr.ac.cr/"} style={{ textDecoration: 'none', }}>
            <img style={{ height: '100px', margin: '0 15px', }} src={logoCicom} alt="cicom" />
          </a>

          <a class="logo-img" href={"https://investiga.uned.ac.cr/liit/"} style={{ textDecoration: 'none', }}>
            <img style={{ height: '80px', margin: '0 15px', }} src={logoLiit} alt="liit" />
          </a>
          <a class="logo-img" href={"http://www.cenat.ac.cr/en/"} style={{ textDecoration: 'none', }}>
            <img style={{ height: '100px', margin: '0 15px', }} src={logoCenat} alt="cenat" />
          </a>
        </span>
      </div>
    </div>
  )
}
