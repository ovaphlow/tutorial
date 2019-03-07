import React from 'react'

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <a className="navbar-brand" href="#">TITLE</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#1">
            Page1
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar