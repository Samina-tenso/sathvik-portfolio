import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ url, text, bgColor, textColor }) => {
    return (
        <div>
            <a href={url}>
                <motion.button
                    whileHover={{
                        backgroundColor: bgColor,
                        color: textColor,
                    }} className='text-center text-button border-solid border-2 border-textColor text-textColor rounded-full w-44 py-4' >
                    {text}
                </motion.button >
            </a>
        </div>

    )
}

export default Button