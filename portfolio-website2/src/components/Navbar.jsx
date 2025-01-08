import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes,FaMapMarkerAlt } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="avatar-section">
        <div className="avatar">
        <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="Profile" draggable={false} />
        </div>
        <div className="avatar-info">
          <h2>Madeus Rene</h2>
          <p> < FaCode className='info-icon1'/> <em>Front-End Developer</em></p>
          <p><FaMapMarkerAlt  className='info-icon2'/> <em> Indianapolis, IN</em></p>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes size={29} /> : <FaBars size={29} />}
      </div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu} className='nav-item'> 
          <FaHome size={27}/> Home 
        </Link>
        <Link to="/about" onClick={toggleMenu} className='nav-item'>
          <FaUser size={27}/> About
        </Link>
        <Link to="/projects" onClick={toggleMenu} className='nav-item'>
          <FaCode     size={27}  /> Projects
        </Link>
        <Link to="/resume" onClick={toggleMenu} className='nav-item'>
          <FaFileAlt size={27}/> Resume
        </Link>
        <Clock />
      </div>
    </nav>
  );
};

export default Navbar;

