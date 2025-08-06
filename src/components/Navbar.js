import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#artworks">Artworks</a></li>
        <li><a href="#exhibitions">Exhibitions</a></li>
        <li><a href="#awards">Awards</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;