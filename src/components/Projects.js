import React, { useState, useEffect } from 'react';
import Variants from '../assets/constants'
import Project from './Project'
import { motion } from "framer-motion"

import retrogram from '../assets/img/projects/retrogram.png'
import password from '../assets/img/projects/password-gen.png'
import nspsports from '../assets/img/projects/NSP-sports.png'

export default function Projects() {
    const projects = [
        {
            title: 'RETROGRAM',
            img: retrogram,
            desc: 'A simple chat room app made with a backend database with usee logins and '
        },
        {
            title: 'RETROGRAM',
            img: password,
            desc: 'A simple chat room app made with a backend database with usee logins and '
        },
        {
            title: 'RETROGRAM',
            img: nspsports,
            desc: 'A simple chat room app made with a backend database with usee logins and '
        }
    ]
    return (
        <div className='wrapper-projects'>
            <motion.div initial={Variants.offScreen} whileInView={Variants.onScreen}>
                <h2>PROJECTS</h2>
            </motion.div>
            <div className="projects">
                <Project title={projects[0].title} img={projects[0].img} desc={projects[0].desc}/>
                <Project title={projects[1].title} img={projects[1].img} desc={projects[1].desc}/>
                <Project title={projects[2].title} img={projects[2].img} desc={projects[2].desc}/>
            </div>
        </div>
    )
}