import React from 'react'
import CustomLink from './CustomLink'
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"
const Card = ({ title, content, url, inView }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })


    const textVariants = {
        enter: {
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.8
            },
        },

        hidden: { opacity: 0 },
    };
    console.log(inView)
    return (
        <div>
            {/* <div className='flex flex-row justify-end mb-4'>  <CustomLink url={''} label={'Go to blog post'} /></div> */}

            <div className=' md:grid md:gap-x-16 md:grid-cols-2 '>
                <div ref={ref}
                >
                    <motion.h3
                        variants={textVariants}
                        initial="hidden"
                        animate={isInView ? "enter" : "hidden"}
                        key="h3text"
                        className='text-h2 leading-tight '>{title} </motion.h3>

                </div>
                <div className='content-center'>
                    <p className='text-par font-light  ml-auto mb-4'>{content}</p>
                </div>


            </div>
        </div>

    )
}

export default Card