import React from 'react';
import { motion } from "framer-motion"
import Variants from '../assets/constants'

export default function Skill(props) {
    return (
        <motion.div initial={Variants.offScreen} whileInView={Variants.onScreen}>
            <li key={props.id}>
                <div className="skill-title">
                    {props.icon}
                    <p>{props.title}</p>
                </div>
                <div className="skill-percentage">
                    <div className="bar-backing"></div>
                    <div className="bar-fill" style={{width: props.percentage}}></div>
                </div>
            </li>
        </motion.div>
    )
}