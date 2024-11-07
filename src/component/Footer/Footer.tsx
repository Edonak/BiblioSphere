import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";
import "../css/Footer.css";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <img
            src="./../../../public/images/2-removebg-preview.png"
            alt="Logo"
          />
        </div>
        <div className="footer-socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon-facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon-twitter" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon-instagram" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon-linkdin" />
          </a>
        </div>
        <div className="footer-back-to-top">
          <button onClick={scrollToTop} className="back-to-top-button">
            <FaArrowUp />
          </button>
        </div>
      </div>
      <div className=" mt-8 gap-2 mx-auto my-auto footer-bottom">
        
        <p>© 2024 Tout droit réservé</p>
      </div>
    </footer>
  );
};

export default Footer;
