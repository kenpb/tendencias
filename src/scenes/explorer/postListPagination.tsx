import { h, Component } from 'preact'
import { Link } from 'react-router-dom'
import queryString from 'query-string'

// import withRouter from '@decorators/withRouter';

// @withRouter()
export class PostListPagination extends Component<any /*{ history?: any, currentPage: number, totalPages: number }*/, {}> {
  linkStyle = { display: 'block', margin: '0 .5rem' }
  disabledLinkStyle = { ...this.linkStyle, pointerEvents: 'none' }

  changePage(pagenumber) {
    const currentQueryString = queryString.parse(location.search)
    return queryString.stringify({ ...currentQueryString, pagenumber })
  }

  render({ currentPage, totalPages }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'right', marginTop: '1em', }}>
        Página { currentPage } de { Number.parseInt(totalPages) === 0 ? 1 : totalPages }

        <span style={Number.parseInt(currentPage) != 1 ? this.linkStyle : this.disabledLinkStyle}>
          <Link to={{ pathname: '/datos', search: this.changePage(1) }}>Primera</Link>
        </span>
        <span style={currentPage != 1 ? this.linkStyle : this.disabledLinkStyle}>
          <Link to={{ pathname: '/datos', search: this.changePage(Number.parseInt(currentPage) - 1) }}>Anterior</Link>
        </span>
        <span style={currentPage != totalPages ? this.linkStyle : this.disabledLinkStyle}>
          <Link to={{ pathname: '/datos', search: this.changePage(Number.parseInt(currentPage) + 1) }}>Siguiente</Link>
        </span>
        <span style={currentPage != totalPages ? this.linkStyle : this.disabledLinkStyle}>
          <Link to={{ pathname: '/datos', search: this.changePage(totalPages) }}>Última</Link>
        </span>
      </div>
    )
  }

}
