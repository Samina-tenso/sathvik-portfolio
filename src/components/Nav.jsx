import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Blog from '../pages/Blog'
import Home from '../pages/Home';
import About from './About';
import Profile from './Profile';


const Nav = () => {
    const navLinks = [['Home', '/'], ['Blog', '/blog']];

    return (
        <nav className='sticky pt-6 text-realBlack bg-offWhite px-6 md:px-4 xl:px-[2vw] '>
            <ul className='flex flex-row py-6 text-ingress justify-end space-x-4 px-10 '>

                {
                    navLinks.map(([pathname, url]) => (
                        <li className='space-x-2'>
                            <NavLink to={url} className={({ isActive }) => {
                                return isActive ? 'py-2 relative after:bg-realBlack after:absolute after:h-[0.2rem] after:bottom-0 after:left-0 after:w-full' : 'py-2 relative after:realBlack after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
                            }}>{pathname} </NavLink>

                        </li>

                    ))
                }

            </ul>
        </nav>
    )
}

export default Nav