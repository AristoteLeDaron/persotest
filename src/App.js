import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main/Main';
import AboutMe from './components/AboutMe/AboutMe';
import Achievements from './components/Achievements/Achievements';
import Objectives from './components/Objectives/Objectives';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos de moi</Link></li>
            <li><Link to="/achievements">Réalisations</Link></li>
            <li><Link to="/objectives">Objectifs</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
