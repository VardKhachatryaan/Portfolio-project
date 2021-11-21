import React from "react";
import '../reset.css';
import "./Aside.css";
import add from "../images/add.png";
const Aside = () => {
  return (
    <aside className="col-3 p-0">
      <div className="sidebar-categories p-3">
        <div className="sidebar-header">
          Categories
        </div>
        <ul className="list-unstyled ps-4">
          <li className="list-item d-flex justify-content-between active">
            <a href="#" className="">House Plants</a>
            <span>(33)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#">Potter Plants</a>
            <span>(12)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#" className="">Seeds</a>
            <span>(65)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#">Small Plants</a>
            <span>(39)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#">Big Plants</a>
            <span>(23)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#">Succulents</a>
            <span>(42)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#">Trerrariums</a>
            <span>(17)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#">Gardening</a>
            <span>(19)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#">Accessories</a>
            <span>(18)</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-range mt-5 p-3">
        <div className="sidebar-header">
          Price Range
        </div>
        <form className="multi-range-field d-flex flex-column align-items-start p-4">
          <input id="multi6" className="multi-range w-100" type="range"/>
          <label htmlFor="multi6" className="range-input__label mt-3">Price: <span className="green ms-1">$39 - $1230</span></label>

          <button className="btn btn-success filter-btn">Filter</button>
        </form>
      </div>
      <div className="sidebar-sizes p-3">
        <div className="sidebar-header">
          Size
        </div>
        <ul className="list-unstyled ps-4">
          <li className="list-item d-flex justify-content-between active">
            <a href="#" className="">Small</a>
            <span>(33)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#">Medium</a>
            <span>(12)</span>
          </li>
          <li className="list-item d-flex justify-content-between active mt-4">
            <a href="#" className="">Large</a>
            <span>(65)</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-add p-0">
        <img src={add} alt="Sale Add" className="w-100"/>
      </div>
    </aside>
  )
}

export default Aside;