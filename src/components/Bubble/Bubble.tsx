'use client';

import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const Bubble: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div 
            style={{ perspective: '300px' }} 
            ref={container} 
            className="relative h-[200vh] bg-black" // Ensure height allows enough scrolling
        >
            <Section1 scrollYProgress={scrollYProgress} />
        </div>
    );
};

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {

    // const scale = useTransform(scrollYProgress, [0, 1], [0.4, 0.9]);
    const backgroundColor = useTransform(scrollYProgress, [0.4, 0.8], ['#fffas', '#ffffff']);

    return (
        <motion.div
            transition={{ type: "spring",  damping:100 }}
            style={{ backgroundColor }} // Apply the dynamic backgroundColor
            className="sticky top-0 h-[200vh] text-[3.5vw] font-extrabold text-black flex flex-col items-center justify-center pb-[10vh]"
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

export default Bubble;
