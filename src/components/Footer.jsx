import React from "react";
import CustomLink from "./CustomLink";
const Footer = () => {
    return (
        <div className="py-24 bottom-0 static">
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