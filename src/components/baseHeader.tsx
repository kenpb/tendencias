import { h, Component } from 'preact'
import { Link } from 'react-router-dom'

export class BaseHeader extends Component<{}, {}> {

  render = (props, _state) => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to={"/"} style={{ textDecoration: 'none' }}><h3>Tendencias</h3></Link>
      {props.children}
    </div>
  )
}
