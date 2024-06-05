// Contact.js
import React from 'react';
import './Contact.css'; // Import CSS file for styling

function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
