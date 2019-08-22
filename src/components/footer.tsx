import { h, Component } from 'preact'

import logoCenat from '../assets/logo-cenat.png'
import logoCicom from '../assets/logo-cicom.png'
import logoLiit from '../assets/logo-liit.png'
import footerBackground from '../assets/footer.png'

export class Footer extends Component<{}, {}> {
  render = () => (
    <div style={{ background: 'url(' + footerBackground + ')', marginTop: '5em', minHeight: '14.813em', display: 'flex', justifyContent: 'flex-end' }}>
      <h1 style={{ color: 'white', fontWeight: 'normal', margin: 0, padding: '1em', lineHeight: '3em', fontSize: '3rem' }}>en colaboración</h1>
      <img src={logoCenat} alt='logo-cenat' style={{ height: '85px', padding: '8px', paddingLeft: '2em', marginTop: '5em',  marginRight: '1rem', verticalAlign: 'top', borderLeft: '0.3em solid white' }} />
      <img src={logoCicom} alt='logo-cicom' style={{ height: '100px', padding: '8px', paddingTop: '5em', verticalAlign: 'top' }} />
      <img src={logoLiit} alt='logo-liit' style={{ height: '100px', padding: '8px', paddingTop: '5em', verticalAlign: 'top' }} />
    </div>
  )
}
