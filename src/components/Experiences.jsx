import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from 'framer-motion'
import experiences from '../assets/experience.json'
import Experience from "./Experience";
const Experiences = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const listVariants = {
        enter: {
            opacity: 1,
            transition: {
                duration: 0.8, staggerChildren: 1, delayChildren: 0.2
            },
        },

        hidden: { opacity: 0 },
    };

    const item = {
        hidden: { opacity: 0, y: 100, },
        enter: { opacity: 1, y: 0, transition: { duration: 1 } }
    };


    return (
        <section id='experiences' className="py-24 " >
            <h4 className='text-h3 md:mr-auto pb-4 opacity-80'>Previous Roles</h4>
            <motion.ul
                variants={listVariants}
                ref={ref}
                key="exp"
                initial="hidden"
                animate={isInView ? "enter" : "hidden"}
                className="flex flex-col space-y-10 " >
                {experiences.map((e, i) => (
                    <motion.li key={i} variants={item} className=" md:ml-auto md:max-w-[60vw] flex items-top md:items-center border-amber-100 border-t-2 first:border-0 py-10 first:pt-0 ">
                        <Experience {...e} />
                    </motion.li>
                ))}
            </motion.ul>
        </section >
    )
};
export default Experiences