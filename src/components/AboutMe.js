import React from 'react';
import Variants from '../assets/constants'
import { motion } from "framer-motion"

import Me from '../assets/img/about-me/Profile Pic.jpg'
import Resume from '../assets/img/about-me/Resume.pdf'

export default function AboutMe() {
    return (
        <section className='wrapper-about-me'>
            <motion.h2 initial={Variants.offScreen} whileInView={Variants.onScreen}>ABOUT ME</motion.h2>
            <div>
                <motion.img initial={Variants.offScreen} whileInView={Variants.onScreen} src={Me} alt="picture of me" />
                {/* <p>
                    Hi my name is Benjamin Phillips im a Full Stack Web Devoloper.<span className='br'/>
                    I am 18 years old and have just finished a boot camp with Georgia Tech.<span className='br'/>
                    I am also currently looking for a full-time job doing full-stack development.<span className='br'/>
                    I personally love designing websites but have never taken a UI/UX design class.<span className='br'/>
                    I am a very determined person with a skill to learn things very quickly.
                </p> */}
                <motion.p initial={Variants.offScreen} whileInView={Variants.onScreen}>
                    Hello, my name is Benjamin Phillips, and I am an 18-year-old who is eager to become a full-stack web developer.  
                    <span className='br'/>
                    It is extremely important to me that I maintain a strong work ethic and maintain a high level of reliability.
                    <span className='br'/>
                    I have recently finished a six month development bootcamp with Georgia Tech and have moved on to freelancing, but untimatly I would like to have a full-time job doing full stack web development.
                </motion.p>
            </div>
            {/* <object data={Resume} type="application/pdf" width="100%" height="500px">
            <p>Unable to display PDF file. <a href={Resume}>Download</a> instead.</p>
            </object> */}
        </section>
    )
}