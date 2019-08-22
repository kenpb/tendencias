import { h, Component } from 'preact'

export class Search extends Component<{ onSearch: Function, currentSearch: string }, { searchValue: string }> {
  componentDidMount() {
    this.setState({ searchValue: this.props.currentSearch })
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value })
  }

  render = ({ onSearch }) => (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '5em', }}>
      <div style={{ minWidth: '1366px', }}>
        <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', padding: 0, backgroundColor: '#9d9d9c', borderRadius: '25px', }}>
          <button onClick={e => onSearch(this.state['searchValue'])} style={{
            border: 'none',
            font: 'inherit',
            color: 'inherit',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            marginLeft: '.6em',
          }}>
            Buscar
          </button>
          <input onChange={this.handleChange.bind(this)} value={this.state.searchValue} style={{
            display: 'inline-block',
            width: '100%',
            border: 'none',
            backgroundImage: 'none',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            fontSize: '2rem',
            fontWeight: 'bold',
            padding: '.3em',
            color: '#ffd948',
          }} placeholder="Buscar..." type="text" />
        </form>
      </div>
    </div>
  )
}
