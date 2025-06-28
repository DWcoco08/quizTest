import "./App.scss";
import React from "react";
import NavBar_Header from "./components/Header/NavBar_Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div class="header-container">
        <NavBar_Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-content">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;
