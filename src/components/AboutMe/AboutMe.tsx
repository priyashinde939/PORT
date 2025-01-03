import React from 'react'
import Faq from './faq/Index'
import useCursor from '../Cursor/cursor-provider'; 





const AboutMe = () => {
  const { setCursor, resetCursor } = useCursor(); 

  return (
    <div style={{backgroundColor: 'white'}}
    className="relative h-full w-auto justify-center items-center rounded-3xl mb-[10rem]">
    <div className="relative h-[20vh] xl:lg:mx-14 "/>

          <div className=" relative flex xl:lg:text-[4rem] md:text-[3rem] text-[2rem] font-black pt-20 xl:lg:mx-[20vw]  md:px-10 px-10 text-center justify-center" >
            <div 
            onMouseEnter={() => {
            setCursor({ variant: "lowblurred" }); 
            }}
            onMouseLeave={resetCursor} 
            className="w-full text-[#080721] ">
            About Me
            </div>
          </div>
          <Faq />

    <div className="relative h-[20vh] "/>
    </div>

)
}

export default AboutMe