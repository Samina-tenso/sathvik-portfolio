import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
const Layout = () => {
    return (
        <div className='grid grid  grid-flow-row bg-offWhite  min-x-[320px]'>

            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout