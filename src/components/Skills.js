import React from 'react'
import Skill from './Skill'
import Variants from '../assets/constants'
import { motion } from "framer-motion"

import { ReactComponent as HTML } from '../assets/img/skills/html-5.svg'
import { ReactComponent as CSS } from '../assets/img/skills/css-3.svg'
import { ReactComponent as JS } from '../assets/img/skills/javascript.svg'
import { ReactComponent as MongoDB } from '../assets/img/skills/mongodb.svg'
import { ReactComponent as NodeJS } from '../assets/img/skills/nodejs.svg'
import { ReactComponent as ReactJS } from '../assets/img/skills/react.svg'

export default function Skills() {
    return (
        <div className="wrapper-skills">
            <motion.div initial={Variants.offScreen} whileInView={Variants.onScreen}>
                <h2>SKILLS</h2>
            </motion.div>
            <ul>
                <Skill id='1' icon={<HTML />} title='HTML' percentage='95%'/>
                <Skill id='2' icon={<CSS />} title='CSS' percentage='92%'/>
                <Skill id='3' icon={<JS />} title='JS' percentage='85%'/>
                <Skill id='4' icon={<MongoDB />} title='Mongo DB' percentage='30%'/>
                <Skill id='5' icon={<NodeJS />} title='Node JS' percentage='75%'/>
                <Skill id='6' icon={<ReactJS />} title='React' percentage='50%'/>
            </ul>
        </div>
    )
}