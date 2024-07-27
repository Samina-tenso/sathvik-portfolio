import React from "react";
import CustomLink from "./CustomLink";
import BackToTopButton from "./backTopButton";
const Footer = () => {


    return (
        <div className="bottom-0 static pb-6 px-4 md:px-16">
            <ul className="flex flex-col  md:flex-row md:space-x-6">
                <li >
                    <CustomLink url={'https://www.linkedin.com/in/sathvik-katam/'} label={'Linkedin'} />

                </li>
                <li>
                    <CustomLink url={'mailto:sathvik.katam@gmail.com'} label={'Email'} />
                </li>
                <li >
                    <BackToTopButton />
                </li>


            </ul >

        </div >
    )
}

export default Footer