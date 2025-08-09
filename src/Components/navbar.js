import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../leela.png';
import { FaPhoneAlt, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logos">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" style={{borderRadius:"50%"}} />
        </Link>
      </div>

      <ul className="nav-links">

        <li><Link to="/rooms" className='dancing-script'>Rooms</Link></li>
       
      </ul>

      <div className="nav-icons">
        <a href="tel:+917906734034" className="icon-btn" title="Call Leela Stays">
          <FaPhoneAlt />
        </a>
        <a href="https://instagram.com/leelastays" target="_blank" rel="noopener noreferrer" className="icon-btn" title="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/vairagi0/" target="_blank" rel="noopener noreferrer" className="icon-btn" title="Facebook">
          <FaFacebookF />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
