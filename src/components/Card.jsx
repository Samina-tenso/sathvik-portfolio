import React from 'react'
import CustomLink from './CustomLink'
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"
const Card = ({ title, content, url }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const textVariants = {
        enter: {
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: 0.8
            },
        },

        hidden: { opacity: 0 },
    };



    return (
        <div>
            {/* <div className='flex flex-row justify-end mb-4'>  <CustomLink url={''} label={'Go to blog post'} /></div> */}

            <div className=' md:grid md:gap-x-16 md:grid-cols-2 pb-32  '>
                <div
                >

                    <motion.h3
                        variants={textVariants}
                        whileInView="enter"
                        initial="hidden"
                        key="h3text"
                        className='text-h2 pb-6 font-light'>{title} </motion.h3>

                </div>

                <p className='text-par ml-auto mb-4'>{content}</p>

            </div>
        </div>

    )
}

export default Card