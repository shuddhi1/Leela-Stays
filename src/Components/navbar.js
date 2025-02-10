import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Create a CSS file for styling
import logo from '../leela.png'; 
const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="logos">
        <Link to="/">   <img  src={logo} alt="Logo" className="logo" /></Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className='dancing-script'>Home</Link>
        </li>
        <li>
          <Link   className='dancing-script' to="/rooms">Rooms</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
