import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
