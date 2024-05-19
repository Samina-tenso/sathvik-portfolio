import React from "react";

const Role = ({ date, company, role, description }) => {
    return (
        <div>
            <ul className="flex flex-col md:max-w-[50vw] lg:max-w-[20]" >
                <span className="flex  flex-row justify-between">
                    <li className=' text-h3 font-semibold  mb-6'> {company}</li >
                    <li className=" text-par  opacity-80 ">{date} </li></span>

                <li className='text-h2 leading-[4.5rem] mb-6'> <h3>{role}</h3></li><li className="text-par">{description}</li></ul>
        </div >
    )
}
export default Role