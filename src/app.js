import React from 'react';

import { Navbar, Hero, Skills, Projects, AboutMe, ContactMe } from './components/index'

export default function App() {
    return (
        <section className='wrapper-app'>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
            <ContactMe />
        </section>
    )
}