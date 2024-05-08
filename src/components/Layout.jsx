import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
const Layout = () => {
    return (
        <div className="bg-blue-700  px-6 md:px-16 xl:px-[10vw] text-amber-100">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout