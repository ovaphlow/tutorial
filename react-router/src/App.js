import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'
import Page1 from './Page1'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/1" component={Page1} />
        </div>
      </HashRouter>
    )
  }
}

export default App