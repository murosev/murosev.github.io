import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Building modern, accessible, and responsive web experiences.</p>
      </section>
      <section className="links-section">
        <div className="links-grid">
          <Link to="/about" className="link-card">
            <h2>About</h2>
            <p>Learn more about my background and experience.</p>
          </Link>
          <Link to="/resume" className="link-card">
            <h2>Resume</h2>
            <p>Check out my professional experience and education.</p>
          </Link>
          <Link to="/interests" className="link-card">
            <h2>Interests</h2>
            <p>Discover my hobbies and what I’m passionate about.</p>
          </Link>
          <Link to="/gallery" className="link-card">
            <h2>Gallery</h2>
            <p>View a collection of my photos and projects.</p>
          </Link>
          <Link to="/contact" className="link-card">
            <h2>Contact</h2>
            <p>Get in touch with me directly through my contact form.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
