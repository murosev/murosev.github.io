import React from 'react';
import './About.css';
import headshotImage from '../assets/headshot.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="headshot-container">
        <img src={headshotImage} alt="Headshot of Magnus Urosev" className="headshot-image" />
      </div>
      <div className="biography">
        <p>
          I began my professional journey as a music education teacher, sharing my passion for music and inspiring students. During the COVID-19 pandemic, I felt a profound calling to make a greater impact in Chicago. This led me to join the University of Illinois at Chicago's Department of Disability and Human Development, where I contributed to initiatives focused on equity and inclusion. While there, I pursued and completed my master’s degree, which strengthened my analytical and research skills.
        </p>
        <p>
          Building on this foundation, I transitioned into data science, where I now work to solve complex problems and drive meaningful change. Currently, I am furthering my expertise as a master’s student in software development at Boston University, blending my technical knowledge with creative problem-solving to develop innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
