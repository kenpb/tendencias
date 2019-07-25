import { h, Component } from 'preact'

export class Search extends Component<{ onSearch: Function, currentSearch: string }, { searchValue: string }> {
  componentDidMount() {
    this.setState({ searchValue: this.props.currentSearch })
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value })
  }

  render = ({ onSearch }) => (
    <form onSubmit={e => e.preventDefault()} style={{ display: 'flex' }}>
      <input onChange={this.handleChange.bind(this)} value={this.state.searchValue} style={{ display: 'inline-block', width: '100%' }} placeholder="Buscar..." type="text"/>
      <button onClick={e => onSearch(this.state['searchValue'])}>Buscar</button>
    </form>
  )
}
