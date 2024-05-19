import React from 'react'
import { motion } from 'framer-motion'
import { transform } from "framer-motion"

const Button = ({ url, text, bgColor, textColor }) => {


    return (
        <div>
            <a href={url}>
                <motion.button
                    whileHover={{
                        backgroundColor: bgColor,
                        color: textColor
                    }
                    }
                    className='text-center text-button font-bold border-solid border-2 border-forest text-forest bg-beige rounded-full px-6 py-6' >
                    {text}
                </motion.button >

            </a>
        </div >

    )
}

export default Button