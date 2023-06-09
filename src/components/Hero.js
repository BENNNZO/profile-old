import React from 'react';

import Logo from '../assets/img/logo-transparent.svg'
import Blob_01 from '../assets/img/hero/blob-01.svg'
import Blob_02 from '../assets/img/hero/blob-02.svg'
import Blob_03 from '../assets/img/hero/blob-03.svg'
import Scroll from '../assets/img/hero/scroll.svg'

export default function Hero() {
    return (
        <div className='wrapper-hero'>
            <div className="hero-main">
                <div className="name">
                    <img className='logo' src={Logo} alt="Logo" />
                    <div className="name-background">
                        <img className='blob'src={Blob_01} alt="Blob" />
                        <img className='blob'src={Blob_02} alt="Blob" />
                        <img className='blob'src={Blob_03} alt="Blob" />
                    </div>
                    <h1>BENJAMIN</h1>
                    <h2>PHILLIPS</h2>
                </div>
            </div>
            <div className="hero-desc">
                <p>MERN Stack, Front-end, Web Developer</p>
            </div>
            <div className="scroll">
                <p>SCROLL!</p>
                <img className='scroll-icon' src={Scroll} alt="Scroll icon" />
            </div>
        </div>
    )
}
