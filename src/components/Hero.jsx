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
        hidden: { opacity: 0, y: 200 },
    }

    return (


        <div ref={ref}>
            <AnimatePresence>
                {isInView && (
                    <motion.div key="hero"
                        variants={listVariants}
                        initial="hidden"
                        animate={isInView ? "enter" : "hidden"} className=' pb-40 pt-30 flex flex-col items-center justify-center border-b-2 border-opacity-60 border-amber-100'

                    >

                        <div >
                            <div >
                                <h1 className='text-h1 pb-10 md:max-w-[60vw]'>Sriram Prashant <br /> Data analyst </h1>
                            </div>

                            <p className='text-ingress md:max-w-[60vw] xl:max-w-[35vw] mb-16'> Curiosity reduced Paul's fear to a manageable level.
                                He heard truth in the old woman's voice, no denying it.
                                If his mother stood guard out there ... if this were truly a
                                test....
                            </p>
                            <Button url={'mailto:sammique95@gmail.com'} text={'Get in touch'} bgColor={'#FEF3C7'} textColor={'#1d4ed8'} />
                        </div>
                    </motion.div >

                )

                }

            </AnimatePresence >
        </div>

    )
}

export default Hero