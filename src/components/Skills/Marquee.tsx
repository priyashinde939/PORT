import React from 'react'
import { motion } from 'framer-motion'

function Marquee({ skills, direction }: { skills: string[], direction: any }) {
    return (
        <div className='w-full flex items-center gap-[10vw] sm:gap-[6vw] py-[2.5vw] sm:py-[1.5vw] overflow-hidden'>
            <motion.div
                initial={{ x: direction === 'left' ? '0' : '-100%' }}
                animate={{ x: direction === 'left' ? '-100%' : '0' }}
                transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
                className='flex flex-shrink-0 gap-[10vw] sm:gap-[6vw]'>
                
                {skills.map((skill: string, index: number) => (
                    <span key={index} className='text-4xl sm:text-2xl font-bold text-white flex-shrink-0 w-[20vw] sm:w-[6vw]'>
                        {skill}
                    </span>
                ))}
            </motion.div>

            <motion.div
                initial={{ x: direction === 'left' ? '0' : '-100%' }}
                animate={{ x: direction === 'left' ? '-100%' : '0' }}
                transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
                className='flex flex-shrink-0 gap-[10vw] sm:gap-[6vw]'>
                
                {skills.map((skill: string, index: number) => (
                    <span key={index} className='text-4xl sm:text-2xl font-bold text-white flex-shrink-0 w-[20vw] sm:w-[6vw]'>
                        {skill}
                    </span>
                ))}
            </motion.div>
        </div>
    )
}

export default Marquee;
