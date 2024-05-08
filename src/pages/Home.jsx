import React from "react"
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from "../components/About"
import Experiences from "../components/Experiences"
const Home = () => {

    return (
        < div className=' text-left max-w-1280'>
            <Hero />
            <Services />
            <About />
            <Experiences />
        </div>
    )
}
export default Home