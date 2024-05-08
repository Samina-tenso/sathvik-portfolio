import React from 'react'
import Card from './Card'
import data from '../assets/data.json'
import { motion, AnimatePresence, stagger } from "framer-motion"
import { useInView } from "framer-motion";
import Button from './Button';
import { useRef } from "react";
const Services = () => {


    return (
        <div className='py-24 border-b-2 border-amber-100 '>
            <h4 className='text-h3 pb-4 opacity-80'>My expertise</h4>
            <ul

                className='text-left '>
                {data.map((d, index) => (
                    <li key={index}><Card {...d} /></li>
                ))}
            </ul>

        </div >
    )
}

export default Services  