import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    padding: '10px',
    backgroundColor: '#282c34',
    display: 'flex',
    justifyContent: 'space-around',
    listStyleType: 'none',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '18px',
  };

  const navItemStyle = {
    margin: '0 10px',
  };

  return (
    <nav style={{ backgroundColor: '#282c34' }}>
      <ul style={navStyle}>
        <li style={navItemStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={navItemStyle}><Link to="/register" style={linkStyle}>Register</Link></li>
        <li style={navItemStyle}><Link to="/login" style={linkStyle}>Login</Link></li>
        <li style={navItemStyle}><Link to="/contact" style={linkStyle}>Contact</Link></li>
        <li style={navItemStyle}><Link to="/about" style={linkStyle}>About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
