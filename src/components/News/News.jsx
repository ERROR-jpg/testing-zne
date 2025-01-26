import React from 'react';
import './News.css';
import news1 from '../../assets/news/news1.png';
import news2 from '../../assets/news/news2.png';

const News = () => {
  return (
    <section id="news" className="news">
      <div className="news-container">
        <div className="news-header">
          <h2>News</h2>
          <div className="gradient-line"></div>
        </div>
        
        <div className="news-subtitle">
          Sign up for upcoming Apex Legends and League of Legends tournaments and battle for exciting prizes!
        </div>

        <div className="news-grid">
          <div className="news-item">
            <img src={news1} alt="News 1" />
            <div className="register-section">
              <div className="register-text">
                Register Your Team
                <div className="register-arrows">
                  <span className="arrow">→</span>
                  <span className="arrow">→</span>
                </div>
              </div>
              <div className="register-underline"></div>
            </div>
          </div>
          <div className="news-item">
            <img src={news2} alt="News 2" />
            <div className="register-section">
              <div className="register-text">
                Register Your Team
                <div className="register-arrows">
                  <span className="arrow">→</span>
                  <span className="arrow">→</span>
                </div>
              </div>
              <div className="register-underline"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 