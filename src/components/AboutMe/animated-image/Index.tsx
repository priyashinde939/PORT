
import React from "react";
import AboutAnimatedImages from "./AboutAnimatedImages";
import { ClientOnly } from "@/lib/isClient";

const AboutImages = () => {


  return (
    <div className="relative flex justify-start md:justify-center lg:justify-center w-[100vw] sm:max-w-sm-content   md:max-w-md-content lg:max-w-content 1xl:max-w-max-container  lg:px-10   h-full   ">
      <div
        className="relative -top-20 w-full lg:w-[90%] md:mt-8 md:mb-32 lg:my-0 h-[24rem]   lg:h-[50rem] xl:h-[58rem]    rounded-xl  flex justify-center items-center text-white"
      >
        <div className="flex relative   flex-col mt-20 lg:mt-0    gap-4 w-full h-full">
          <ClientOnly>
          <AboutAnimatedImages/>
          </ClientOnly>
          <div className="flex flex-col z-40 md:items-center items-center md:top-[70%] top-[40%] pointer-events-none lg:top-[60%] uppercase mix-blend-difference justify-center absolute w-full text-[#ffffff]">

            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black">Whereas</h1>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black">Myself</h1>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImages;