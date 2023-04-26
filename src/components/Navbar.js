import React, { useState } from 'react';

import Logo from '../assets/img/logo-transparent.svg'

export default function Navbar() {
    const navLinks = [
        {
            id: 1,
            link: 'about-me',
            title: 'About Me'
        },
        {
            id: 3,
            link: 'my-skills',
            title: 'My Skills'
        },
        {
            id: 2,
            link: 'my-work',
            title: 'My Work'
        },
        {
            id: 4,
            link: 'contact-me',
            title: 'Contact Me'
        }
    ]
    const [Active, setActive] = useState('');
    return (
        <nav>
            <img src={Logo} alt="Logo" onClick={() => {setActive(''); window.scrollTo(0, 0)}}/>
            <ul>
                {navLinks.map((link) => {
                    return (
                        <li key={link.id} className={ Active === link.title ? 'navlink navbar-active' : 'navlink navbar-inactive' }>
                            <a href={`#${link.link}`} onClick={() => setActive(link.title)}>{link.title}</a>
                        </li>
                    )
                })}
            </ul>
            <div className="bottom-line"></div>
        </nav>
    )
}
