import { h, Component } from 'preact'

import './search.scss'

export class Search extends Component<{ onSearch: Function, currentSearch: string }, { searchValue: string }> {
  componentDidMount() {
    this.setState({ searchValue: this.props.currentSearch })
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value })
  }

  render = ({ onSearch }) => (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '5em 0', }}>
      <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', maxWidth: '1200px', width: '100%', margin: '0 10px', backgroundColor: '#74afbf', borderRadius: '25px', }}>
        <button onClick={e => onSearch(this.state['searchValue'])} style={{
          border: 'none',
          font: 'inherit',
          color: 'inherit',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          marginLeft: '.6em',
        }}>
          <svg viewBox="0 0 500 500" width="35" height="35">
            <g transform="translate(0,-552.36216)">
              <g transform="translate(-4.3609793,-7.6704785)">
                <path d="M 232.83952,614.96702 A 154.04816,154.04794 0 0 0 78.79153,769.01382 154.04816,154.04794 0 0 0 232.83952,923.06184 154.04816,154.04794 0 0 0 386.88751,769.01382 154.04816,154.04794 0 0 0 232.83952,614.96702 Z m 0,26.77613 A 129.95832,127.2707 0 0 1 362.79832,769.01382 129.95832,127.2707 0 0 1 232.83952,896.28449 129.95832,127.2707 0 0 1 102.88194,769.01382 129.95832,127.2707 0 0 1 232.83952,641.74315 Z"
                  style="opacity:1;fill:#2b0000;fill-opacity:1;stroke:none;stroke-opacity:1" />
                <rect
                  ry="18.08342"
                  rx="33.249443"
                  transform="matrix(0.65316768,0.7572133,-0.60689051,0.79478545,0,0)"
                  y="319.55432"
                  x="794.8775"
                  height="36.16684"
                  width="173.02675"
                  id="rect4721"
                  style="opacity:1;fill:#2b0000;fill-opacity:1;stroke:none;stroke-opacity:1" />
              </g>
            </g>
          </svg>
        </button>
        <input onChange={this.handleChange.bind(this)} value={this.state.searchValue} style={{
          display: 'inline-block',
          minWidth: '0',
          border: 'none',
          backgroundImage: 'none',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          fontSize: '2rem',
          fontWeight: 'bold',
          padding: '.3em',
          color: '#fff',
        }} placeholder="Buscar..." type="text" />
      </form>
    </div>
  )
}
