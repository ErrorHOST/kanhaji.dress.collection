import React from 'react';
import './Footer.css';  // Link to the above CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 2: Contact Information */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <ul>
            <li>123 Clothwear Street, Fashion City</li>
            <li>Phone: +123 456 7890</li>
            <li>Email: info@clothwear.com</li>
          </ul>
        </div>

        {/* Column 3: Social Media Links */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 Clothwear. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
