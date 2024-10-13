import React from 'react'
// import AboutImages from './animated-image/Index'
import Faq from './skill/Index'
import useCursor from '../Test/cursor-provider'; 





const SkillSection = () => {
  const { setCursor, resetCursor } = useCursor(); 

  return (
    <div className="relative h-full w-auto bg-[#fcfbfb] justify-center items-center">
    <div className="relative h-[20vh] xl:lg:mx-14 "/>

          <div className=" relative flex xl:lg:text-[4rem] md:text-[3rem] text-[2rem] font-black pt-20 xl:lg:mx-[20vw]  md:px-10 px-10 text-center justify-center" >
            <div 
            onMouseEnter={() => {
            setCursor({ variant: "lowblurred" }); 
            }}
            onMouseLeave={resetCursor} 
            className="w-full text-[#132450] rounded-3xl">
            Technical Skills
            </div>
          </div>
          <Faq />
          



          {/* <div className="relative ">
              <AboutImages />
              <div className="relative h-[20vh] "/>
          </div> */}

    <div className="relative h-[20vh] "/>
    </div>

)
}

export default SkillSection