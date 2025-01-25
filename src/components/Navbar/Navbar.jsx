import React from 'react';
import './Navbar.css';
import navbarLogo from '../../assets/navbar/navbar.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={navbarLogo} alt="ZNE" className="navbar-logo" />
        </div>
        
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/news">News</a>
          <a href="/affiliates">Affiliates</a>
          <a href="/merch">Merch</a>
          <a href="/partners">Partners</a>
        </div>

        <div className="nav-actions">
          <button className="search-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="signup-btn">SIGN UP</button>
          <button className="login-btn">LOGIN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 