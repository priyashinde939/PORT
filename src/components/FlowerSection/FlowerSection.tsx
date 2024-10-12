import React, {useRef} from 'react'
import { SkillSlider } from '../Slider/SkillSlider'

const FlowerSection = () => {
    const sectionRef = useRef(null)
  return (
    <section className="my- cursor-none">

    <div className="relative h-screen bg-black flex flex-col lg:md:flex-row mx-20">
        <div style={{backgroundImage:'url(./images/bg/stone.jpg)'}}
        className="absolute border border-dashed border-[#053bff4e] w-[70%] lg:h-[40%] md:h-[25vh] sm:h-[20vh] bg-contain rounded-lg">

        </div>
        <div 
        // style={{ WebkitTextStroke: '1px pink' }}
        className="flex flex-col lg:md:w-[1/2%] w-[80%] h-full font-semibold lg:text-8xl md:text-7xl text-3xl text-[#9aaee3] mix-blend-exclusion z-40 ">
            <span>
                WE
            </span>
            <span>
                MAKE
            </span>
            <span>
                COOL
            </span>
            <span>
                WEBSITES
            </span>
        </div>
        <div className="lg:md:w-[1/2%] w-full h-full p-5 pb-32 font-thin text-end lg:text-2xl md:text-lg text-md text-slate-400 place-content-end">
        I specialize in creating dynamic, interactive websites using Framer Motion animations and a focus on web performance. <br/> If you’re ready for a website that vibes with your vision and sets you apart, lets make some magic happen...!        
        </div>

    </div>


    {/* Marquee Section*/}
    <SkillSlider />
    {/* <SkillMarquees /> */}
    </section>
  )
}

export default FlowerSection