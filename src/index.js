/* -------------------------------- PACKAGES -------------------------------- */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* ------------------------------- COMPONENTS ------------------------------- */
import { Navbar, Hero, Skills, Experience, Projects } from './components/index'

/* ----------------------------------- CSS ---------------------------------- */
import './assets/styles/index.scss'
import './assets/styles/navbar.scss'
import './assets/styles/hero.scss'
import './assets/styles/skills.scss'
import './assets/styles/experience.scss'
import './assets/styles/projects.scss'

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