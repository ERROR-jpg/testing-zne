import React from 'react';
import './StreamAffiliate.css';
import twitchLogo from '../../assets/affiliates/twitch.png';

const StreamAffiliate = () => {
  return (
    <section className="stream-affiliate">
      <div className="stream-affiliate-container">
        <div className="content-wrapper">
          <div className="title-group">
            <h2>
              <div className="title-line">
                <span>STREAM </span>
                <span className="cyan-text">AFFILIATE</span>
              </div>
              <div className="title-line">PARTNERSHIP</div>
            </h2>
          </div>
          
          <p className="description">
            Discover the power of collaboration through our Stream Affiliate Partnership. 
            Whether you're a rising content creator or an established streamer, ZNE empowers 
            you to grow your audience, connect with industry-leading brands like Rouge 
            Product, and amplify your presence in the gaming community.
          </p>

          <button className="join-btn">JOIN NZE</button>
        </div>

        <div className="twitch-logo">
          <img src={twitchLogo} alt="Twitch" />
        </div>
      </div>
    </section>
  );
};

export default StreamAffiliate; 