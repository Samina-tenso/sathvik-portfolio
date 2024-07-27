import React from 'react'
import { motion } from 'framer-motion'
import { transform } from "framer-motion"
import Arrow from './Arrow'
const Button = ({ url, text, bgColor, textColor }) => {
    const boxMotion = {
        rest: {
            color: '#191919',

        },
        hover: {
            color: '#fbfbfb',
            backgroundColor: '#191919'

        }
    };

    const textMotion = {
        rest: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4
            }
        },
        hover: {
            opacity: 0,
            y: -10,

        }
    };

    const emailMotion = {
        rest: {
            opacity: 0,
            y: 10
        },
        hover: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4
            }
        }
    }



    return (
        <div className='flex md:justify-start'
        >
            < a href={url} >
                <motion.div
                    variants={boxMotion}
                    initial='rest' whileHover='hover' animate='rest'
                    className='text-center  text-par   px-2 py-1 md:py-2 md:px-6  border-2 rounded-full  border-black/[.55] flex justify-center' >
                    <motion.p
                        className='absolute'
                        variants={textMotion}
                    >{text}</motion.p>
                    {
                    }   <motion.p
                        variants={emailMotion}>
                        tensammi@gmail.com
                    </motion.p>
                </motion.div >

            </a >
        </div >

    )
}

export default Button