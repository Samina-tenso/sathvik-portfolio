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
            y: 0,
            transition: { duration: 1 },
            ease: 'easeIn',
        },
        hidden: { opacity: 0, y: 80 },
    }

    return (


        <section id="hero" className='bg-beige text-forest px-6 md:px-16 xl:px-[10vw]  ' ref={ref}>
            <AnimatePresence>
                {isInView && (
                    <div
                        className=' pb-40 pt-30 flex flex-col  '
                    >
                        <div >
                            <div >
                                <motion.h1
                                    key="heroText"
                                    variants={listVariants}
                                    initial="hidden"
                                    animate={isInView ? "enter" : "hidden"} className='text-h1 font-semibold py-10 md:max-w-[70vw]'>Sathvik Katam <br /> Data and ML expert </motion.h1>
                            </div>

                            <p className='text-ingress md:max-w-[50vw]  mb-10'>
                                Are you seeking a professional to drive transformative projects in machine learning and data engineering?
                            </p>
                            <p className='text-ingress md:max-w-[50vw]  mb-16'>

                                With over 8 years of hands-on experience, I bring a proven track record of architecting cutting-edge solutions that harness the power of massive datasets and state-of-the-art machine learning algorithms.
                            </p>
                            <Button url={'mailto:sathvik.katam@gmail.com'} text={'sathvik.katam@gmail.com'} bgColor={'#3c5f45'} textColor={'beige'} />

                        </div>
                    </div >

                )

                }

            </AnimatePresence >
        </section>

    )
}

export default Hero