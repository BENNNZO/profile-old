import React from 'react';
import Variants from '../assets/constants'
import { motion } from "framer-motion"

export default function Experience() {
    return (
        <div className="wrapper-exp">
            <motion.div initial={Variants.offScreen} whileInView={Variants.onScreen}>
                <h2>EXPERIENCE</h2>
            </motion.div>
        </div>
    )
}