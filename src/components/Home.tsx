import React from 'react';
import './Home.css';
import fluteImage from '../assets/flute.jpg'; 

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="overlay">
          <h1 className="hero-title">Harmonizing Music, Learning, and Innovation</h1>
          <p className="hero-subtitle">
            Where the art of music meets the logic of code and the precision of data.
          </p>
          <div className="image-container">
            <img src={fluteImage} alt="Playing the flute" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
