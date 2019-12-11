import { h, Component } from 'preact'

import { BaseHeader } from '../../components'
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
        <div style={{ margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
          <iframe style={{ borderColor: 'transparent', margin: '0 20px', width: '90%', height: '100vh' }} src="https://acespedesv.shinyapps.io/mediatic22/"></iframe>
        </div>
      </div>
    )
  }
}
