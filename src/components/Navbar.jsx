import React from 'react';
import './Navbar.css'; // Import the CSS file


const Navbar = () => {
  return (
    <div>
       <nav className="navbar">
    <div className="navbar-brand">
      <a href="#" className="logo">Your Logo</a>
    </div>
    <ul className="navbar-menu">
      <li className="navbar-item"><a href="#" className="nav-link">Home</a></li>
      <li className="navbar-item"><a href="#" className="nav-link">About</a></li>
      <li className="navbar-item"><a href="#" className="nav-link">Services</a></li>
      <li className="navbar-item"><a href="#" className="nav-link">Contact</a></li>
    </ul>
  </nav>
    </div>
  );
}

export default Navbar;
