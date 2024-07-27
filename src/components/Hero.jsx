import React from 'react'
import Button from './Button'
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion";
import { useRef } from "react";


const Hero = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const listVariants = {
        enter: {
            opacity: 1,
            y: -10,
            transition: { duration: 1 },
            ease: 'easeIn',
        },
        hidden: { opacity: 0, y: 10 },
    }

    return (


        <section id="hero" ref={ref} className=' px-4 md:px-16 py-24  bg-offWhite text-realBlack'>
            <AnimatePresence>
                {isInView && (

                    <div >
                        <div >
                            <motion.h1
                                key="heroText"
                                variants={listVariants}
                                initial="hidden"
                                animate={isInView ? "enter" : "hidden"} className='text-h1 '>Samina Dahlberg </motion.h1>

                        </div>
                        <div className='grid grid-cols-1  md:grid-cols-2 md:gap-16 pt-10'>
                            <div className='flex text-orange pb-4 md:justify-end md:pb-0'>

                                <p>Frontend and Design </p>

                            </div>
                            <div className='flex flex-col'>
                                <p className='text-ingress font-light mb-10'>
                                    I'm a frontend developer with a strong interest in web design.
                                </p>
                                <Button url={'mailto:sathvik.katam@gmail.com'} text={" Connect with me"} />
                            </div>
                        </div>
                    </div>

                )

                }

            </AnimatePresence >
        </section>

    )
}

export default Hero