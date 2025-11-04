import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ThemeContext from '../context/ThemeContext';
import './Footer.css';

function Footer() {
  const { themeColor } = useContext(ThemeContext);

  return (
    <footer className="footer" style={{ backgroundColor: themeColor }}>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Sonipat Home Service</h3>
          <p>Find your perfect rental property in Sonipat</p>
          <p>Contact: +91-XXXXXXXXXX</p>
          <p>Email: info@sonipathomeservice.com</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
          <div className="qr-code">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://sonipathomeservice.com" alt="QR Code" />
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sonipat Home Service. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
