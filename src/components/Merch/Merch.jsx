import React, { useState } from 'react';
import './Merch.css';
import merchImage from '../../assets/merch/merch.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Merch = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemWidth = 343.35 + 24.67; // item width + gap

  const handleScroll = (direction) => {
    const container = document.querySelector('.merch-grid');
    const newPosition = direction === 'left' 
      ? Math.max(scrollPosition - itemWidth, 0)
      : Math.min(scrollPosition + itemWidth, (container.scrollWidth - container.clientWidth));
    
    setScrollPosition(newPosition);
    container.style.transform = `translateX(-${newPosition}px)`;
  };

  return (
    <section id="merch" className="merch">
      <div className="merch-container">
        <h2 className="merch-title">MERCH</h2>
        
        <div className="merch-content">
          <div className="merch-nav">
            <div className="nav-items">
              <button className="nav-btn active">All</button>
              <button className="nav-btn">Jersey</button>
              <button className="nav-btn">Hoodie</button>
              <button className="nav-btn">Bottom</button>
              <button className="nav-btn">Accessories</button>
            </div>
            <div className="nav-arrows">
              <button className="arrow-btn" onClick={() => handleScroll('left')}>
                <FaArrowLeft />
              </button>
              <button className="arrow-btn" onClick={() => handleScroll('right')}>
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="merch-grid">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="merch-item">
                <div className="merch-card">
                  <img src={merchImage} alt="ZNE Merch" />
                </div>
                <h3>ZNE LOGO JERSEY</h3>
                <div className="merch-details">
                  <span className="category">Jersey</span>
                  <span className="price">$49.99</span>
                </div>
              </div>
            ))}
          </div>

          <div className="see-more">
            <span>See the whole shop</span>
            <div className="arrow-icons">
              <FaArrowRight className="arrow-icon" />
              <FaArrowRight className="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merch; 