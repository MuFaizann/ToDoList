//import React from 'react';
import './Navbar.css'; // Optional: Create a separate CSS file for styling the navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>My Todo List</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#tasks">Tasks</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

