import React from "react";
import "../styles/Navbar.css";
import logo from "./images/logo-mmnews.png";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        
          <Link to="/">Acceuil</Link>
          {/* <img src="" alt="Lien 1" /> */}
        
        
          <Link to="/meteo">Meteo</Link>
          {/* <img src="" alt="Lien 3" /> */}
        
        
          <Link to="/signin">Compte</Link>
          {/* <img src="" alt="Lien 3" /> */}
       
        
          <Link to="/profil">Profil</Link>
          {/* <img src="" alt="Lien 3" /> */}
        
      </div>
    </div>
  );
}

export default Navbar;
