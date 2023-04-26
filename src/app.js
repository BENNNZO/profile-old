import React from 'react';

import { Navbar, Hero, Skills, Experience, Projects, AboutMe } from './components/index'

export default function App() {
    return (
        <section className='wrapper-app'>
            <Navbar />
            <Hero />
            <AboutMe />
            <Skills />
            {/* <Experience /> */}
            <Projects />
        </section>
    )
}