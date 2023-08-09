import React from 'react';
import './Contact.css'

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-form">
        <form>
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
            <textarea id="message" name="message" rows="5" required />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          If you have any questions or inquiries, feel free to contact us using the details below:
        </p>
        <ul>
          <li>
            <i className="fas fa-envelope"></i> Email:BiteBazaar@gmail.com
          </li>
          <li>
            <i className="fas fa-phone"></i> Phone: +123-456-7890
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i> Address:Dehradun,Uttarakhand
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
