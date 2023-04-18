import React from 'react';
import { motion } from 'framer-motion';
import Variants from '../assets/constants'

export default function Project(props) {
    return (
        <motion.div initial={Variants.offScreen} whileInView={Variants.onScreen}>
            <div className="project" onClick={() => window.location.href = props.link}>
                <h3>{props.title}</h3>
                <img src={props.img} alt={`${props.title} sample image`} />
                <p>{props.desc}</p>
            </div> 
        </motion.div> 
    )
}