import React from 'react'
import Card from './Card'
import data from '../assets/data.json'
import { motion, AnimatePresence, stagger } from "framer-motion"
import { useInView } from "framer-motion";
import Button from './Button';
import { useRef } from "react";
import { inView } from 'motion';
const Expertise = () => {


    // console.log(isInView)
    return (
        <section id="expertise" className=' px-4 md:px-16 py-24 '>
            <h4 className='text-h4  font-light text-orange '>Expertise.</h4>
            <ul
                className='text-left grid grid-flow-rows gap-y-32 '>
                {data.map((d, index) => (
                    <li key={index}><Card {...d} /* inView={isInView}*/ /></li>
                ))}
            </ul>

        </section >
    )
}

export default Expertise