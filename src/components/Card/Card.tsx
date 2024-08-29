import Image from 'next/image'
import React, { useRef } from 'react'
import Button from '../Button/Button'
import { useScroll, useTransform, motion } from 'framer-motion';
import { MaskText1 } from '../Text/Text_Mask';

function Card({ val }: { val: any }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    // const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                // opacity: opacityProgress,
                backgroundColor: val.bg
            }}
            className={` text-[#e3d0f1] w-full xs:py-[2vw] py-[4vw] 
            px-[4vw] xs:px-[2vw] 
            rounded-[5rem] flex gap-[1vw]`
            }
        >
            <div className='xs:w-1/2 flex flex-col items-start gap-[1.5vw]  h-[40rem]'>

            </div>

        </motion.div>
    )
}

export default Card
