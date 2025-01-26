import React from 'react';
import './Footer.css';
import logo from '../../assets/footer/logo.png';
import { FaDiscord, FaTwitch, FaYoutube, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
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
    <footer className="footer">
      <div className="footer-container">
        {/* Call to Action Section */}
        <div className="footer-cta">
          <h2 className="footer-title">Join ZNE Today!</h2>
          <p className="footer-description">
            Stay updated with the latest tournaments, exclusive opportunities, and insider access to ZNE's esports journey. 
            Whether you're a gamer, fan, or investor—this is where it begins.
          </p>
          <button className="join-btn">JOIN NZE</button>
        </div>

        {/* Main Footer Section */}
        <div className="main-footer">
          {/* Logo and Navigation */}
          <div className="footer-top">
            <div className="footer-logo">
              <img src={logo} alt="ZNE Logo" />
              <span>ZNE</span>
            </div>
            
            <nav className="footer-nav">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
              <button onClick={() => scrollToSection('news')}>News</button>
              <button onClick={() => scrollToSection('affiliate')}>Affiliate</button>
              <button onClick={() => scrollToSection('merch')}>Merch</button>
              <button onClick={() => scrollToSection('partners')}>Partners</button>
            </nav>
          </div>

          <div className="footer-divider"></div>

          {/* Copyright and Social Links */}
          <div className="footer-bottom">
            <div className="copyright">
              <span>Copyright 2025</span>
              <span>ZNE.GG</span>
            </div>
            
            <div className="social-links">
              <FaDiscord />
              <FaTwitch />
              <FaYoutube />
              <FaInstagram />
              <FaFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 