import React from "react";
import headerImg from "../header-img.png";
import headerSmallImg from "../header-small-img.png"
import "./Header.css";

const Header = () => {
  return (
    <div className="header-content d-flex row justify-content-between m-0">
      <div className="header-context d-flex flex-column col-6 justify-content-center align-items-start">
        <span className="header-subtitle">Welcome to GreenShop</span>
        <h1 className="header-heading mt-3">Let’s Make a<br/>
          Better <span className="green">Planet</span>
        </h1>
        <p className="header-par mt-2">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
        <button className="btn btn-success header-btn px-4 py-2">shop know</button>
      </div>
      <div className="header-img__wrapper col-5 position-relative">
        <img src={headerSmallImg} alt="" className="header-small__img"/>
        <img src={headerImg} alt="Plant Image" className="header-img"/>
      </div>
    </div>
  )
}

export default Header;