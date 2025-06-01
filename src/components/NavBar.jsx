import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css"
import logo from '../assets/logo.png'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Experience
        </Link>
        <Link to="/" className="nav-link">
          About
        </Link>
        <Link to="/" className="nav-link">
          Contacts
        </Link>
      </div>
    </nav>
  );
};
