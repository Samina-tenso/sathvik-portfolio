import React from "react";
import { Link } from "react-router-dom";


const CustomLink = ({ url, label }) => {
    console.log(url, label)
    return (
        <div className="text-ingress ">
            <Link href={url} className=" py-2 relative after:bg-forest after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                {label}
            </Link>
        </div>
    )
}

export default CustomLink