import { h, Component } from 'preact'

import { BaseHeader } from '../../components'

export class Resources extends Component<{}, {}> {

  componentDidMount() {
    document.title = 'Tendencias | Recursos educativos'
  }

  render = () => (
    <div>
      <BaseHeader />

      <h1 style="text-align: center;">Recursos educativos</h1>

      <div class="container">
        <div class="row">
          { [0,1,2,3,4,5,6,7,8,9].map(_ => <div style={{ height: '150px', background: 'grey', color: 'white', textAlign: 'center' }} class="col-3">
            Recurso educativo
          </div>) }
        </div>
      </div>

    </div>
  )
}
