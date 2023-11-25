// Footer.js

import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: your.email@example.com</li>
            <li>LinkedIn: linkedin.com/in/yourusername</li>
            <li>WhatsApp: +123456789</li>
            <li>Instagram: @yourinstagram</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Downloads</h3>
          <ul>
            <li>
              <a href="/path/to/your/resume.pdf" download>
                Download Resume
              </a>
            </li>
            <li>
              <a href="/path/to/dummy_project1.pdf" download>
                Dummy Project 1
              </a>
            </li>
            <li>
              <a href="/path/to/dummy_project2.pdf" download>
                Dummy Project 2
              </a>
            </li>
            <li>
              <a href="/path/to/dummy_project3.pdf" download>
                Dummy Project 3
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#header">Back to Top</a>
            </li>
            <li>
              <a href="https://github.com/youngboypimpin" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            {/* Two extra dummy spaces for potential future links */}
            <li><a href="#">Dummy Link 1</a></li>
            <li><a href="#">Dummy Link 2</a></li>
          </ul>
        </div>
      </div>

      <p>&copy; 2023 Patrick Aigbogun</p>
    </footer>
  );
};

export default Footer;
