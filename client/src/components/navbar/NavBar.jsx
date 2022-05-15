import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  let navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavBar">
      <h1 className="pickle-logo" onClick={() => navigate("/")}>
        In-A-Pickle
      </h1>
      <div
        className="menu-icon"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <Link className="iLinks" to="/recipes">
          Recipes
        </Link>
        <Link className="iLinks login" to="/login">
          Log In
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
