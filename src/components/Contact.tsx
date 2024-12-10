import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      {!isSubmitted ? (
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required />
          <button type="submit">Send</button>
        </form>
      ) : (
        <div className="thank-you-message">
          <h2>Thank You!</h2>
          <p>Your message has been sent. I'll get back to you soon!</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
