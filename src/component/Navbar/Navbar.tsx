import React, { useState } from 'react';
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
        <img src={Logo} alt="Logo"/>
      </figure>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li>
            <a href="#">Bibliothèque</a>
            <ul className="dropdown">
              <li><a href="/livres">Livres</a></li>
              <li><a href="/auteurs">Auteurs</a></li>
            </ul>
          </li>
          <li><a href="/contact">Nous Contacter</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="btn login">Se connecter</button>
          <button className="btn register">S'inscrire</button>
        </div>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
