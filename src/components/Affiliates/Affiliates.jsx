import React from 'react';
import './Affiliates.css';
import affiliateNoText from '../../assets/affiliates/affiliate-no-text.png';
import affiliateText from '../../assets/affiliates/affiliate-text.png';

const Affiliates = () => {
  return (
    <section id="affiliate" className="affiliates">
      <div className="affiliates-container">
        <h2 className="affiliates-title">
          <span>AFFILIATES AND </span>
          <span className="pink-text">MEMBERS</span>
        </h2>
        
        <div className="affiliates-grid">
          <div className="row">
            <div className="affiliate-item">
              <img src={affiliateNoText} alt="Affiliate" />
            </div>
            <div className="affiliate-item">
              <img src={affiliateText} alt="Affiliate" />
            </div>
            <div className="affiliate-item">
              <img src={affiliateNoText} alt="Affiliate" />
            </div>
            <div className="affiliate-item">
              <img src={affiliateNoText} alt="Affiliate" />
            </div>
          </div>
          <div className="row">
            <div className="affiliate-item">
              <img src={affiliateNoText} alt="Affiliate" />
            </div>
            <div className="affiliate-item">
              <img src={affiliateNoText} alt="Affiliate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliates; 