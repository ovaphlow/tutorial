import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

const Page3 = props => (
  <h2>Page 3</h2>
)

const Page2 = props => (
  <h2>Page 2</h2>
)

const Page1 = props => (
  <HashRouter>
  <div className="container-fluid">
    <div className="row">
      <div className="col-3">
        1123
        <br />
        <a href="#">home</a>
        <br />
        <a href="#1/2">222</a>
        <br />
        <a href="#1/3">333</a>
      </div>

      <div className="col">
        <Route path="/1/2" component={Page2} />
        <Route path="/1/3" component={Page3} />
      </div>
    </div>
  </div>
  </HashRouter>
)

const Home = props => (
  <div className="container-fluid">
    <h1>
      TITLE
    </h1>
    <Navbar />
  </div>
)

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

ReactDOM.render(
  <App />, document.getElementById('app')
)