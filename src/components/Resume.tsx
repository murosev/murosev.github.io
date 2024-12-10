import React, { useState } from 'react';
import './Resume.css';

function Resume() {
  const [textColor, setTextColor] = useState('#00ff00');
  const [backgroundColor, setBackgroundColor] = useState('#1e1e1e');

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(e.target.value);
  };

  const handleBackgroundColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <main>
      <div className="color-selector">
        <div className="color-input">
          <label htmlFor="textColor">Text:</label>
          <input
            type="color"
            id="textColor"
            value={textColor}
            onChange={handleTextColorChange}
          />
        </div>
        <div className="color-input">
          <label htmlFor="backgroundColor">Background:</label>
          <input
            type="color"
            id="backgroundColor"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
          />
        </div>
      </div>

      <div
        className="cli"
        style={{ color: textColor, backgroundColor: backgroundColor }}
      >
        <h1>Magnus Urosev</h1>
        <p>
          <a href="mailto:urosevmagnus@gmail.com">urosevmagnus@gmail.com</a> | (708) 837-1009 |{' '}
          <a href="https://www.linkedin.com/in/murosev001" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/murosev001
          </a>
        </p>

        <h2>Education</h2>
        <ul>
          <li>
            <strong>Master of Science in Software Development, Computer Science</strong> | GPA: 3.46
            <br />
            Expected Jan. 2025 | Boston University, Boston, MA
          </li>
          <li>
            <strong>Master of Education in M.E.S.A</strong> | GPA: 3.33
            <br />
            Sept. 2021 – May 2023 | University of Illinois – Chicago, Chicago, IL
          </li>
          <li>
            <strong>Bachelor of Music Education</strong> | GPA: 3.27
            <br />
            Sept. 2016 – May 2021 | Illinois State University, Normal, IL
          </li>
        </ul>

        <h2>Experience</h2>
        <h3>Software Engineer / Data Scientist</h3>
        <p>
          <em>July 2022 – Present</em>
        </p>
        <ul>
          <li>
            Developed scalable, high-performance software systems, improving internal applications using Java, Python, and Spring Boot.
          </li>
          <li>
            Designed and implemented data structures and algorithms to optimize system performance and data processing speed by 30%.
          </li>
          <li>
            Led initiatives to enhance distributed computing solutions and introduced parallel processing techniques, boosting data throughput.
          </li>
        </ul>

        <h2>Projects</h2>
        <h3>Chess Opening Recommendation System | Spring, React, Lichess API</h3>
        <p>
          <em>May 2024 – Present</em>
        </p>
        <ul>
          <li>
            Developed a full-stack chess opening recommendation system using data from the Lichess API, providing personalized suggestions for users.
          </li>
          <li>Integrated Docker for deployment, ensuring scalability and seamless performance.</li>
        </ul>

        <h3>Ghost Buses | React.js, Python, Machine Learning, AWS</h3>
        <p>
          <a href="https://ghostbuses.com/" target="_blank" rel="noopener noreferrer">
            https://ghostbuses.com/
          </a>
          <br />
          <em>Aug. 2022 – Present</em>
        </p>
        <ul>
          <li>
            Created an AI-driven model to predict bus arrivals and mitigate "ghost bus" issues using real-time data, improving accuracy and user experience.
          </li>
          <li>
            Deployed the solution on AWS with ongoing model training and optimization for real-time predictions.
          </li>
        </ul>

        <h2>Technical Skills</h2>
        <ul>
          <li>
            <strong>Languages:</strong> Python, Java, Kotlin, C++, JavaScript
          </li>
          <li>
            <strong>Technologies:</strong> Distributed Systems, Unix/Linux, Web/Mobile Development
          </li>
          <li>
            <strong>Development:</strong> Data Structures, Algorithms, API Development, Cloud Platforms (AWS, Azure)
          </li>
          <li>
            <strong>Frameworks:</strong> Spring Boot, React.js
          </li>
          <li>
            <strong>Tools:</strong> Docker, Kubernetes, Git, Jira
          </li>
          <li>
            <strong>Other:</strong> TDD, BDD, Agile, Clean Code, Accessibility in Technology
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Resume;
