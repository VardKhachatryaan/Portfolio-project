import React from "react";
import "./Navbar.css";
import PlantCard from "./PlantCard";
import plant1 from "../images/plant1.png";
import plant2 from "../images/plant2.png";
import plant3 from "../images/plant3.png";
import plant4 from "../images/plant4.png";
import plant5 from "../images/plant5.png";
import plant6 from "../images/plant6.png";
import plant7 from "../images/plant7.png";
import plant8 from "../images/plant8.png";
import plant9 from "../images/plant9.png";


const MainContent = () => {
  return (
    <div className='main-content col-8'>
        <nav className="d-flex justify-content-between row flex-row align-items-center">
          <ul className="d-flex justify-content-between align-items-center col-6 m-0">
            <li className="nav-item active pb-2">
              <a href="#">All Plants</a>
            </li>
            <li className="nav-item pb-2">
              <a href="#">New Arrivals</a>
            </li>
            <li className="nav-item pb-2">
              <a href="#">Sale</a>
            </li>
          </ul>

          <div className="dropdown show col-4 text-end">
            <span>
              Short by:
              <a className="dropdown-toggle ms-2" href="#" id="dropdownMenuLink"
                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Default sorting
              </a>
            </span>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </nav>
        <div className="plant-cards row  mt-5">
          <PlantCard img={plant1} name={"Barberton Daisy"} price={"$119.00"}/>
          <PlantCard img={plant2} name={"Angel Wing Begonia"} price={"$169.00"}/>
          <PlantCard img={plant3} name={"African Violet"} price={"$199.00"}/>
          <PlantCard img={plant4} name={"Beach Spider Lily"} price={"$129.00"}/>
          <PlantCard img={plant5} name={"Blushing Bromeliad"} price={"$139.00"}/>
          <PlantCard img={plant6} name={"Aluminum Plant"} price={"$179.00"}/>
          <PlantCard img={plant7} name={"Broadleaf Lady Palm"} price={"$59.00"}/>
          <PlantCard img={plant8} name={"Bird's Nest Fern"} price={"$139.00"}/>
          <PlantCard img={plant9} name={"Chinese Evergreen"} price={"$179.00"}/>
        </div>
    </div>
  )
}

export default MainContent;