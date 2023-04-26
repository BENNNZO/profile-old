import React from 'react';
import Variants from '../assets/constants'
import { motion } from "framer-motion"

import Me from '../assets/img/about-me/Profile Pic.jpg'

export default function AboutMe() {
    return (
        <section className='wrapper-about-me' id='about-me'>
            <motion.h2 initial={Variants.offScreen} whileInView={Variants.onScreen}>ABOUT ME</motion.h2>
            <div>
                <motion.img initial={Variants.offScreen} whileInView={Variants.onScreen} src={Me} alt="picture of me" />
                <motion.p initial={Variants.offScreen} whileInView={Variants.onScreen}>
                    Hello, my name is Benjamin Phillips, and I am an 18-year-old who is eager to become a full-stack web developer.  
                    <span className='br'/>
                    It is extremely important to me that I maintain a strong work ethic and maintain a high level of reliability.
                    <span className='br'/>
                    I have recently finished a six month development bootcamp with Georgia Tech and have moved on to freelancing, but untimatly I would like to have a full-time job doing full stack web development.
                </motion.p>
            </div>
        </section>
    )
}