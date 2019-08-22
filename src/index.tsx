import { h, render } from 'preact'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Home } from './scenes/home'
import { DataExplorer } from  './scenes/explorer'
import { Graphs } from './scenes/graphs'
import { Resources } from './scenes/resources'

const root = document.getElementById('root')

render(
  <Router basename={process.env.PUBLIC_URL} >
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/datos" exact={true} component={DataExplorer} />
      <Route path="/graficos" exact={true} component={Graphs} />
      <Route path="/recursos" exact={true} component={Resources} />
      <Route render={() => <h1>Not Found</h1>} />
    </Switch>
  </Router>, root, root.lastChild as Element)
