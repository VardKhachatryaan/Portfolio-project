import React from "react";
import '../reset.css';
import "./Main.css";
import Aside from "./Aside";
import MainContent from "./MainContent";

const Main = () => {
  return (
    <main className="row mx-0 justify-content-between">
      <Aside />
      <MainContent />
    </main>
  );
}

export default Main;