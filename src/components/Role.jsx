import React from "react";

const Role = ({ date, company, role, description }) => {
    return (
        <div>
            <ul>
                <li className="border-t flex flex-col py-16 border-t-black/[.55]" >
                    <ul className="grid gap-6 md:grid-cols-5">
                        <li className="flex flex-wrap content-start gap-2  md:flex-row ">
                            <ul>
                                <li className=' text-ingress flex space-x-2 '><p>{company}</p><span>/</span> </li >
                                <li className="text-par opacity-80 content-center "><p>{date}</p></li>
                            </ul>

                        </li>
                        <li className='col-span-2 text-h2 pl-2  '>
                            <p>{role}</p>
                        </li>
                        <li className="col-span-2 grow-0 text-par font-light ">
                            <p>{description}</p>
                        </li>
                    </ul>
                </li>
            </ul>


        </div >
    )
}
export default Role