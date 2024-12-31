import React from 'react'
import FlowerSection from './FlowerSection'

import AnimatedSVG from './AnimatedSvg'
const SvgSection = () => {
    return (
        <section className='relative  h-[150vh] flex justify-center items-center'>
             <div className="relative">
                {/* <AnimatedSVG/> */}
                <AnimatedSVG />
            </div>
            {/* <div className="absolute border-pink-500 h-[100vh]">
                <FlowerSection/>   
            </div> */}

        </section>
    )
}


export default SvgSection