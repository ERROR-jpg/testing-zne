import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import News from './components/News/News';
import Affiliates from './components/Affiliates/Affiliates';
import StreamAffiliate from './components/StreamAffiliate/StreamAffiliate';
import Merch from './components/Merch/Merch';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <div className="section-divider"></div>
      <Affiliates />
      <StreamAffiliate />
      <Merch />
      <Partners />
      <Footer />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
