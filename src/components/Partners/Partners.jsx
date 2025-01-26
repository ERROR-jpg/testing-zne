import React from 'react';
import './Partners.css';
import twitch from '../../assets/partners/twitch.png';
import rouge from '../../assets/partners/rouge.png';
import prime from '../../assets/partners/prime.png';
import logitech from '../../assets/partners/logitech.png';

const Partners = () => {
  return (
    <section id="partners" className="partners">
      <div className="partners-container">
        <h2 className="partners-title">
          <span>OUR </span>
          <span className="pink-text">PARTNERS</span>
        </h2>
        
        <div className="partners-grid">
          <div className="partner-item">
            <img src={twitch} alt="Twitch" />
          </div>
          <div className="partner-item">
            <img src={rouge} alt="Rouge" />
          </div>
          <div className="partner-item">
            <img src={prime} alt="Prime" />
          </div>
          <div className="partner-item">
            <img src={logitech} alt="Logitech" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 