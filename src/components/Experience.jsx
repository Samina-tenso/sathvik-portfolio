import React from "react";

const Experience = ({ date, company, role, description }) => {
    return (
        <div>
            <ul className="flex flex-col  md:max-w-[50vw] lg:max-w-[20]" >
                <li className="  text-h4 text-amber-100 opacity-80 ">{date} </li>
                <li className=' text-h4  mb-6'> {company}</li >
                <li className='text-h2 leading-[4.5rem] mb-6'> <h3>{role}</h3></li><li className="text-par">{description}</li></ul>
        </div >
    )
}
export default Experience