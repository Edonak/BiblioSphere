import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../../public/images/1-removebg-preview.png';
import '../css/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <figure className="logo">
        <img src={Logo} alt="Logo" />
      </figure>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/library">Bibliothèque</Link>
          </li>
          <li>
            <Link to="/contact">Nous Contacter</Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="btn login">Se connecter</button>
          </Link>
          <Link to="/register">
            <button className="btn register">S'inscrire</button>
          </Link>
        </div>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
