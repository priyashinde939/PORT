import React , { useRef } from 'react'
// import Card from './Card'
import { useScroll, useTransform, motion } from 'framer-motion';


function Card() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    // const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
  return (
    <div className='w-full py-[4vw] bg-black'>
        <div className='max-w-[1840px] mx-auto px-[5vw] xs:px-0'>
            <div className='flex flex-col gap-[8vw] xs:gap-[2vw]'>
                <motion.div
                ref={ref}
                style={{
                    scale: scaleProgress,
                    // opacity: opacityProgress,
                }}
                className={` text-[#e3d0f1] w-full xs:py-[2vw] py-[4vw] 
                px-[4vw] xs:px-[2vw]  
                rounded-[5rem] flex gap-[1vw] border border-sky-200`
                }
                >
                    <div className='xs:w-1/2 flex flex-col items-start gap-[1.5vw]  h-[40rem]'>
                    
                    </div>
                </motion.div>
            </div>        
        </div>
    </div>
  )
}

export default Card
