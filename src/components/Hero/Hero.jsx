import React from 'react';
import './Hero.css';
import heroImage from '../../assets/hero/hero.png';
import charLeft from '../../assets/hero/char-left.png';
import charRight from '../../assets/hero/char-right.png';
import demoImage from '../../assets/hero/demo.png';
import discordIcon from '../../assets/hero/discord.png';
import twitchIcon from '../../assets/hero/twitch.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="unite">UNITE.</h1>
          <h1 className="compete">COMPETE.</h1>
          <h1 className="dominate">DOMINATE.</h1>
          
          <p className="hero-description">
            Step into the world of ZNE—your ultimate hub for tournaments, top-tier gaming, and exclusive merch. Join the team. Embrace the energy. Dominate the scene.
          </p>
          
          <div className="hero-cta">
            <button className="signup-hero-btn">SIGN UP</button>
            <span className="or">or</span>
            <div className="social-buttons">
              <button className="social-btn discord">
                <img src={discordIcon} alt="Discord" />
              </button>
              <button className="social-btn twitch">
                <img src={twitchIcon} alt="Twitch" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="demo-image">
          <img src={demoImage} alt="Demo" />
        </div>
        
        <div className="character character-left">
          <img src={charLeft} alt="Character Left" />
        </div>
        
        <div className="hero-main">
          <img src={heroImage} alt="Hero" />
        </div>
        
        <div className="character character-right">
          <img src={charRight} alt="Character Right" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 