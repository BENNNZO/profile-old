import React, { useState } from 'react';

import Logo from '../assets/img/logo-transparent.svg'

export default function Navbar() {
    const navLinks = [
        {
            id: 1,
            title: 'About Me'
        },
        {
            id: 2,
            title: 'My Work'
        },
        {
            id: 3,
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
                            <a href={`#${link.title}`} onClick={() => setActive(link.title)}>{link.title}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
