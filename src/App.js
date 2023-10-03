import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutMe from './components/AboutMe/AboutMe';
import Achievements from './components/Achievements/Achievements';
import Objectives from './components/Objectives/Objectives';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
