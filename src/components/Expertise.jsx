import React from 'react'
import Card from './Card'
import data from '../assets/data.json'
import { motion, AnimatePresence, stagger } from "framer-motion"
import { useInView } from "framer-motion";
import Button from './Button';
import { useRef } from "react";
const Expertise = () => {

    return (
        <section id="expertise " className=' px-6 md:px-16 xl:px-[10vw] py-14 bg-forest text-beige '>
            <h4 className='text-h4 pb-10 opacity-50'>Expertise</h4>
            <ul
                className='text-left '>
                {data.map((d, index) => (
                    <li className=' border-t-2  pt-10 border-beige/50  first:border-0 first:pt-0' key={index}><Card {...d} /></li>
                ))}
            </ul>

        </section >
    )
}

export default Expertise