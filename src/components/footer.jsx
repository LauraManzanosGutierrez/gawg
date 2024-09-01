import React from 'react';
import '../styles/footer.css';
import gawgLogo from '../assets/gawg_logo_white.png';

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_left">
        <img src={gawgLogo} alt="GAWG Logo" className="footer_logo" />
        <span className="footer_text">· &nbsp; &nbsp; Designed in Europe 🇪🇺</span>
      </div>
      <div className="footer_right">
        <a href="#get-started" className="footer_link get_started">Get started</a>
        <a>·</a>
        <a href="https://www.linkedin.com/in/alvarogarciapiz/" className="footer_link">@lvrpiz</a>
        <a>·</a>
        <a href="#" className="footer_link">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;