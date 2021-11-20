import React from "react";
import logo from '../logo.png';
import './Navbar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light mt-4 p-0">
        <a className="navbar-brand align-items-center py-3" href="#">
          <img src={logo} alt="Logo" className="logo"/>
          <span className="text-success h3">GREENSHOP</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active mx-4 py-3">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item mx-4 py-3">
              <a className="nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item mx-4 py-3">
              <a className="nav-link" href="#">Plant Care</a>
            </li>
            <li className="nav-item mx-4 py-3">
              <a className="nav-link" href="#">Blogs</a>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right py-3 d-flex align-items-center">
            <li><a href="#"><i className="bi bi-search mx-2 black"></i></a></li>
            <li><a href="#"><i className="bi bi-cart3 mx-4 black"></i></a></li>
            <button type="button" className="btn btn-default btn-success">
              <i className="bi bi-box-arrow-right me-2"></i>
              Login
            </button>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;