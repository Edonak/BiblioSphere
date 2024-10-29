// src/components/Navbar.tsx

import React from 'react';
import Logo from './../../../public/images/1-removebg-preview.png'
import '../css/Navbar.css'; // Assurez-vous que le chemin est correct

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <figure className="logo">
        <img src={Logo} alt=""/>
      </figure>
      <ul className="nav-menu">
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
    </nav>
  );
};

export default Navbar;
