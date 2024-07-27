import React from "react";
import { Link } from "react-router-dom";


const CustomLink = ({ url, label, symbol, action, color }) => {

    return (
        <div onClick={action} className={`text-ingress flex items-center justify-center text-${color}`}>
            <Link href={url} className={`py-2 relative after:bg-${color} after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}>
                {label}
            </Link>
            {symbol !== undefined &&
                <span className="flex pl-2.5" >{symbol}</span>
            }
        </div>
    )
}

export default CustomLink