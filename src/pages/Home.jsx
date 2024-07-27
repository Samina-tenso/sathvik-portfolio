import React from "react"
import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import About from "../components/About"
import Roles from "../components/Roles"

const Home = () => {

    return (
        < div className=' grid  grid-flow-row  text-left max-w-1280'>
            <Hero />
            <Expertise />
            <About />
            <Roles />
        </div>
    )
}
export default Home