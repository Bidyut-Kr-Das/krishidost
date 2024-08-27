/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src='./nav-logo-removebg-preview.png' alt="Logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/auth">Login/Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

