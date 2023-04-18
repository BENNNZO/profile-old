import React from 'react';
import Variants from '../assets/constants'
import Project from './Project'
import { motion } from "framer-motion"

import retrogram from '../assets/img/projects/retrogram.png'
import password from '../assets/img/projects/password-gen.png'
import nspsports from '../assets/img/projects/NSP-sports.png'
import riveroak from '../assets/img/projects/river-oak.png'
import hype from '../assets/img/projects/hype.png'

export default function Projects() {
    const projects = [
        {
            title: 'Discord Clone (Hype)',
            img: hype,
            desc: "A clone of discord with a working friend request system with provate messages and private servers that you can invite multiple friends to. ontop of all that it also has working live voice and video calls that you can have multiple friends join",
            link: 'https://project-3-hype.herokuapp.com/'
        },
        {
            title: 'River Oak Properties (Website not deployed yet)',
            img: riveroak,
            desc: "This is a website made for a property managment company with a working contact form and page that allows users to apply to rent a house digitally",
            link: ''
        },
        {
            title: 'Chat room',
            img: retrogram,
            desc: 'The main idea with this project was to improve my knoledge and experience with backend frameworks like express and mySQL.',
            link: 'https://project-2-retrogram.herokuapp.com/'
        },
        {
            title: 'Password Generator',
            img: password,
            desc: 'This is a simple password generator that was for homework when i was in a class but i think this is a good example of my desire to over design things.',
            link: 'https://bennnzo.github.io/homework-03/'
        },
        {
            title: 'Sports Dashboard',
            img: nspsports,
            desc: "A simple dashboard for the Quartar world cup 2022 some of the api's dont't work anymore because the world cup is over but the main idea is still there.",
            link: 'https://santizetina.github.io/NSP-Sports/'
        }
    ]
    return (
        <div className='wrapper-projects'>
            <motion.div initial={Variants.offScreen} whileInView={Variants.onScreen}>
                <h2>PROJECTS</h2>
            </motion.div>
            <div className="projects">
                {projects.length !== 0 && projects.map(project => {
                    return (
                        <Project title={project.title} img={project.img} desc={project.desc} link={project.link} />
                    )
                })}
            </div>
        </div>
    )
}