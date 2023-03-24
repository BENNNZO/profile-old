/* -------------------------------- PACKAGES -------------------------------- */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* ------------------------------- COMPONENTS ------------------------------- */
import { Navbar, Hero, Skills, Experience, Projects } from './components/index'

/* ----------------------------------- CSS ---------------------------------- */
import './assets/styles/index.css'
import './assets/styles/navbar.css'
import './assets/styles/hero.css'
import './assets/styles/skills.css'
import './assets/styles/experience.css'
import './assets/styles/projects.css'

/* ----------------------------------- APP ---------------------------------- */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Skills />
    <Experience />
    <Projects />
  </React.StrictMode>
);