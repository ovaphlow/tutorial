import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import Page2 from './Page2'
import Page3 from './Page3'

const Page1 = props => (
  <HashRouter>
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <h2>TITLE</h2>
          <hr />
          <a href="#">返回首页</a>
          <br />
          <br />
          <a href="#1/2">二级页面2</a>
          <br />
          <a href="#1/3">二级页面3</a>
        </div>

        <div className="col">
          <Route path="/1/2" component={Page2} />
          <Route path="/1/3" component={Page3} />
        </div>
      </div>
    </div>
  </HashRouter>
)

export default Page1