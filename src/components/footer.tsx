import { h, Component } from 'preact'

import logoCenat from '../assets/logo-cenat.png'
import logoCicom from '../assets/logo-cicom.png'
import logoLiit from '../assets/logo-liit.png'
import footerBackground from '../assets/footer.svg'

export class Footer extends Component<{}, {}> {
  render = () => (
    <div style={{ background: 'url(' + footerBackground + ')', backgroundRepeat: 'no-repeat', backgroundSize: '100%', marginTop: '5em', minHeight: '180px', display: 'flex', justifyContent: 'flex-end', backgroundPosition: 'bottom', }}>

    </div>
  )
}
