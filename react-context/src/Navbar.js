import React from 'react'

const Navbar = props => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Navbar</span>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            首页
          </a>
        </li>
      </ul>

      <ul className="navbar-nav">
        <li className="navbar-nav">
          请
          <a href="#login">登录</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
