/* -------------------------------- PACKAGES -------------------------------- */
import React from 'react';
import ReactDOM from 'react-dom/client';

/* ------------------------------- COMPONENTS ------------------------------- */
import App from './app'

/* ----------------------------------- CSS ---------------------------------- */
import './assets/styles/index.scss'
import './assets/styles/navbar.scss'
import './assets/styles/hero.scss'
import './assets/styles/skills.scss'
import './assets/styles/experience.scss'
import './assets/styles/projects.scss'
import './assets/styles/about-me.scss'

/* ----------------------------------- APP ---------------------------------- */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);