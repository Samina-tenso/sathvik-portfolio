import React from "react";
import CustomLink from "./CustomLink";
const Footer = () => {
    return (
        <div className="py-24 px-6 md:px-16 xl:px-[10vw] bottom-0 static bg-beige text-forest">
            <ul className="flex space-x-10">
                <li>
                    <CustomLink url={'https://www.linkedin.com/in/sathvik-katam/'} label={'Linkedin'} />

                </li>
                <li>
                    <CustomLink url={'https://www.linkedin.com/feed/'} label={'Blog'} />

                </li>
                <li>
                    <CustomLink url={'mailto:sathvik.katam@gmail.com'} label={'Email'} />
                </li>
            </ul>
        </div >
    )
}

export default Footer