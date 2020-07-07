import { h, Component } from 'preact'

import { BaseHeader, Footer } from '../../components'
import { Visualization } from './visualization';

export class Graphs extends Component<any, {}> {

  componentWillMount() {
    document.title = 'Tendencias | Explorar de gráficos'
  }

  render() {
    return (
      <div>
        <BaseHeader minHeight={'100px'} />

        <h1 style="text-align: center;">Explorador de gráficos</h1>

        {/* <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Visualization width={500} height={250} />
          <Visualization width={500} height={250} />
        </div> */}
        <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '0 10px' }}>
          <iframe style={{ borderColor: 'transparent', margin: '0 20px', width: '25%', height: '80vh' }} src="http://tendencias.cenat.ac.cr:8787/mediatic/lectura/"></iframe>
          <iframe style={{ borderColor: 'transparent', margin: '0 20px', width: '25%', height: '80vh' }} src="http://tendencias.cenat.ac.cr:8787/mediatic/nube/"></iframe>
          <iframe style={{ borderColor: 'transparent', margin: '0 20px', width: '25%', height: '80vh' }} src="http://tendencias.cenat.ac.cr:8787/mediatic/mapa/"></iframe>
          <iframe style={{ borderColor: 'transparent', margin: '0 20px', width: '25%', height: '80vh' }} src="http://tendencias.cenat.ac.cr:8787/mediatic/serieA/"></iframe>
          <iframe style={{ borderColor: 'transparent', margin: '0 20px', width: '25%', height: '80vh' }} src="http://tendencias.cenat.ac.cr:8787/mediatic/serieB/"></iframe>
        </div>

        {/* footer section */}
        <Footer />
      </div>
    )
  }
}
