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
        <div style={{ paddingTop: '10em', margin: '0 auto', maxWidth: '1200px', }}>
          <div style={{ maxWidth: '50%', }}>
            <h3 style={{ fontWeight: 'normal', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.</h3>
          </div>
          {/* <h3 style={{ fontWeight: 'normal', }}> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam id nisi auctor, aliquam purus non, elementum odio. Praesent ullamcorper sapien et ante pretium vehicula. Pellentesque mollis nec eros sit amet bibendum. Suspendisse eget odio in lacus sodales mollis. Mauris dignissim scelerisque neque facilisis fringilla. Nam ipsum neque, consequat eu dolor vel, dignissim volutpat purus.</h3> */}
        </div>
      </BaseHeader>

      {/* findings section */}
      <div style={{ background: 'url(' + background + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '35.375em', marginTop: '8em' }}>
        <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '10em 0', display: 'flex' }}>
          <div style={{ maxWidth: '60%', paddingRight: '5em' }}>
            <Link to={'/graficos'}>
              <img src={hallazgosButton} alt="" style={{ width: '50%', }}/>
            </Link>
            <h3 style={{ fontWeight: 'normal', float: 'left', }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.
            </h3>
          </div>
          <img src={hallazgosAvatar} alt=""/>
        </div>
      </div>

      {/* graph section */}
      <div>
        <div style={{ margin: '0 auto', maxWidth: '1200px', paddingTop: '6em', display: 'flex' }}>
          <img src={visualizacionesAvatar} style={{ transform: 'scaleX(-1)' }} alt=""/>
          <div style={{ maxWidth: '60%', paddingLeft: '5em' }}>
            <Link to={'/graficos'} style={{ width: '100%', display: 'inline-block' }}>
              <img src={visualizacionesButton} alt="" style={{ width: '50%', float: 'right', }}/>
            </Link>
            <h3 style={{ fontWeight: 'normal', }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.
            </h3>
          </div>
        </div>
      </div>

      {/* data section */}
      <div style={{ background: 'url(' + background + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '35.375em', marginTop: '8em' }}>
        <div style={{ margin: '0 auto', maxWidth: '1200px', padding: '10em 0', display: 'flex' }}>
          <div style={{ maxWidth: '60%', paddingRight: '5em' }}>
            <Link to={'/datos'}>
              <img src={dataButton} alt="" style={{ width: '50%', }}/>
            </Link>
            <h3 style={{ fontWeight: 'normal', }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.
            </h3>
          </div>
          <img src={dataAvatar} alt="" style={{ transform: 'scaleX(-1)' }}/>
        </div>
      </div>

      {/* resources section */}
      <div>
        <div style={{ margin: '0 auto', maxWidth: '1200px', paddingTop: '6em', display: 'flex' }}>
          <img src={resourcesAvatar} alt=""/>
          <div style={{ maxWidth: '60%', paddingLeft: '5em' }}>
            <Link to={'/recursos'} style={{ width: '100%', display: 'inline-block', }}>
              <img src={resourcesButton} alt="" style={{ width: '50%', float: 'right', }}/>
            </Link>
            <h3 style={{ fontWeight: 'normal' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit felis et turpis fermentum, interdum lobortis ex eleifend. Nulla vulputate rutrum ante sed blandit. Nunc vel lectus quis sapien laoreet laoreet ut ac sem. Quisque lacus orci, vehicula sit amet arcu sit amet, dignissim pellentesque elit.
            </h3>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </div>
  )
}
