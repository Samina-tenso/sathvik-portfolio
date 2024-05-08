import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Blog from '../pages/Blog'
import Home from '../pages/Home';
import About from './About';
import url from '../assets/images/profile.jpg'
import Profile from './Profile';


const Nav = () => {
    const navLinks = [['Home', '/'], ['About', '/about']];

    return (
        <nav className='sticky top-0 bg-blue-700 '>
            <ul className=' flex flex-row py-10 text-ingress space-x-10 px-10 text-a'>

                {
                    navLinks.map(([pathname, url]) => (
                        <li >
                            <NavLink to={url} className={({ isActive }) => {
                                return isActive ? 'py-2 relative after:bg-amber-100 after:absolute after:h-[0.2rem] after:bottom-0 after:left-0 after:w-full' : 'py-2 relative after:bg-amber-100 after:absolute after:h-[0.2rem] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer'
                            }}>{pathname}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav