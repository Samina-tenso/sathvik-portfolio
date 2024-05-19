import React from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from 'framer-motion'
import roles from '../assets/roles.json'
import Role from "./Role";
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
        <section id='roles  ' className="py-24 px-6 md:px-16 xl:px-[10vw] bg-forest text-beige" >
            <h4 className='text-h4 md:mr-auto pb-4 opacity-80'>Previous Roles</h4>
            <motion.ul
                variants={listVariants}
                ref={ref}
                key="exp"
                initial="hidden"
                animate={isInView ? "enter" : "hidden"}
                className="flex flex-col space-y-10 " >
                {roles.map((e, i) => (
                    <motion.li key={i} variants={item} className=" md:ml-auto md:max-w-[60vw] flex items-top md:items-center border-beige/50 border-t-2  first:border-0 py-10 first:pt-0 ">
                        <Role {...e} />
                    </motion.li>
                ))}
            </motion.ul>
        </section >
    )
};
export default Experiences