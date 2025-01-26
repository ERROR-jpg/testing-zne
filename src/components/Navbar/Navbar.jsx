import React, { useState } from 'react';
import './Navbar.css';
import navbarLogo from '../../assets/navbar/navbar.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 90; // Height of navbar
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={navbarLogo} alt="ZNE" className="navbar-logo" />
        </div>
        
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <a onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href="#">Home</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection('news'); }} href="#news">News</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection('affiliate'); }} href="#affiliate">Affiliates</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection('merch'); }} href="#merch">Merch</a>
          <a onClick={(e) => { e.preventDefault(); scrollToSection('partners'); }} href="#partners">Partners</a>
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