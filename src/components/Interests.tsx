import React from 'react';
import './Interests.css';
import churchImage from '../assets/church.jpg';
import spainImage from '../assets/spain.jpg';

function Interests() {
  return (
    <main className="interests">
      <h1>Interests</h1>
      <p>
        I have a deep love for jazz music and exploring architecture. I am also passionate about learning new languages; I speak French fluently and am currently learning Mandarin and Spanish. 
      </p>
      <p>
        In my free time, I enjoy reading. Some of my favorite authors include Langston Hughes, Dostoyevsky, and Kierkegaard.
      </p>
      <div className="image-gallery">
        <div>
          <img src={churchImage} alt="Beautiful church architecture" />
          <p>Unity Temple</p>
        </div>
        <div>
          <img src={spainImage} alt="Landscape in Spain" />
          <p>Sagrada Familia</p>
        </div>
      </div>
    </main>
  );
}

export default Interests;
