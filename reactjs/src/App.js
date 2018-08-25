import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Home from './Home'
import Test from './Test'

// React主程序，可以用来处理一些全局变量、路由等内容
class App extends Component {
  render() {
    return (
      <HashRouter>
        <span>
          <Route exact path="/" component={Home} />
          <Route path="/test" component={Test} />
        </span>
      </HashRouter>
    );
  }
}

export default App;
