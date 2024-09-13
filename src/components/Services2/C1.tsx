'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const C1: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div 
            style={{ perspective: '300px' }} 
            ref={container} 
            className="relative h-[200vh]" // Ensure height allows enough scrolling
        >
            <Section1 scrollYProgress={scrollYProgress} />
        </div>
    );
};

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
    // const backgroundColor = useTransform(scrollYProgress, [0.4, 0.8], ['#000000', '#ffffff']);

    return (
        <motion.div
            // initial={{y:'-30px'}}
            // animate={{y:'0'}}
            transition={{ type: 'linear' }}
            style={{  scale, opacity }} // Apply the dynamic backgroundColor
            className="sticky top-0 h-[100vh] text-[3.5vw] font-extrabold text-black flex flex-col items-center bg-slate-400 justify-center pb-[10vh] rounded-[3rem]"
        >
            <p>Heading Heading</p>
            <div className="flex gap-3">
                <p>Section</p>
                <p>Transition</p>
            </div>
            <h1 className="mt-3 font-bold text-2xl text-gray-700">
                SED CONDIMENTUM MUS AUGUE LUCTUS.
            </h1>
            <button className="w-[200px] h-[60px] rounded-full text-2xl text-white bg-black m-6">
                Click
            </button>
        </motion.div>
    );
};

export default C1;
