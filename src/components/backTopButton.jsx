import React from 'react'
import CustomLink from "./CustomLink";
import Arrow from "./Arrow";
import { useScroll } from 'framer-motion'
let rootElement = document.documentElement


const BackToTopButton = () => {
    function backToTop() {

        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return <CustomLink className="flex items-center" label={'Back to top'} action={backToTop} symbol={<Arrow />} />

}
export default BackToTopButton