import React from "react";
import logo from '../logo.png'

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo"/>
          <span className="text-success">GREENSHOP</span>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Plant Care</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blogs</a>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav navbar-right">
          <li><a href="#"><i className="bi bi-search"></i></a></li>
          <li><a href="#"><i className="bi bi-cart3"></i></a></li>
          <button type="button" className="btn btn-default btn-success"><span
            className="glyphicon glyphicon-log-in"></span> Login
          </button>
        </ul>
      </nav>
    )
}

export default Navbar;