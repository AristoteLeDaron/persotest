import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos de moi</Link></li>
          <li><Link to="/achievements">Réalisations</Link></li>
          <li><Link to="/objectives">Objectifs</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;