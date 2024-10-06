import React from 'react';
import './Footer.css';
import Facebook from './assets/Images/Facebook.webp';
import Instagram from './assets/Images/Instagram.webp';
import LinkedIn from './assets/Images/LinkedIn.webp'; 
import Logo from './assets/Images/logo.webp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-left">
          <div className="logo"><img src={Logo}></img></div>
          <p>© Sutainability Cell IITB</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href='lmao'>ISR Report (Complete)</a></li>
            <li><a href='lmao'>ISR Report (Summary)</a></li>
            <li><a href='lmao'>Main Website</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href='lmao'>About Us</a></li>
            <li><a href='lmao'>Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Feedback</h4>
          <ul>
            <li><a href='lmao'>Feedback Form</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow us on</h4>
            <ul>
                <a><img src={Instagram}></img></a>
                <a><img src={LinkedIn}></img></a>
                <a><img src={Facebook}></img></a>
            </ul>

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-medium"></i>
            <i className="fab fa-telegram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{/*
import React from 'react';
import './Footer.css';
import Facebook from './assets/Images/Facebook.png'; // Import the Facebook image
import Instagram from './assets/Images/Instagram.png'; // Import the Instagram image
import LinkedIn from './assets/Images/LinkedIn.png'; // Import the LinkedIn image

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-left">
          <div className="logo"><img src={Facebook}></img></div>
          <p>© Sutainability Cell IITB</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href='lmao'>ISR Report (Complete)</a></li>
            <li><a href='lmao'>ISR Report (Summary)</a></li>
            <li><a href='lmao'>Main Website</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href='lmao'>About Us</a></li>
            <li><a href='lmao'>Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Feedback</h4>
          <ul>
            <li><a href='lmao'>Feedback Form</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow us on</h4>
            <ul>
                <a><img src={Instagram}></img></a>
                <a><img src={LinkedIn}></img></a>
                <a><img src={Facebook}></img></a>
            </ul>

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-medium"></i>
            <i className="fab fa-telegram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
*/}