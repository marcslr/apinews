import React from "react";
import "../styles/Navbar.css";
import logo from "../images/logo-mmnews.png";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <a>
          <Link to="/">Acceuil</Link>
          {/* <img src="" alt="Lien 1" /> */}
        </a>
        <a>
          <Link to="/Sports">Sports</Link>
          {/* <img src="" alt="Lien 2" /> */}
        </a>
        <a>
          <Link to="/meteo">Meteo</Link>
          {/* <img src="" alt="Lien 3" /> */}
        </a>
        <a>
          <Link to="/Authentification">Compte</Link>
          {/* <img src="" alt="Lien 3" /> */}
        </a>
      </div>
    </div>
  );
}

export default Navbar;
