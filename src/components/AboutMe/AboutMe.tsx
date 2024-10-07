import React from 'react'
import AboutImages from './animated-image/Index'
import Faq from './faq/Index'





const AboutMe = () => {

  return (
    <div className="relative h-full w-auto bg-[#dbdce5] justify-center items-center">
    <div className="relative h-[20vh] xl:lg:mx-14 "/>

          <div className=" relative flex xl:lg:text-[4rem] md:text-[3rem] text-[2rem] font-black py-20 xl:lg:mx-[20vw]  md:px-10 px-10 text-center justify-center" >
            <div className="w-full text-[#8496b7] rounded-3xl outline-double">
            About Me
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

export default AboutMe