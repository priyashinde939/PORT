'use client';
import { useRef } from 'react';
import Link from 'next/link'
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { TextEffect } from '../TextGenerateEffect/TextEffect';

const Sticky: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div 
        ref={container} className="relative h-[200vh] bg-black mb-[10vh]">
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
        </div>
    );
};

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -4]);

    return (
        <motion.div
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ scale, rotate }}
            className="sticky rounded-2xl top-0 h-screen bg-[#336268] font-extabold flex flex-col items-center justify-center pb-[10vh]"
        >
            <div style={{fontFamily:'"Day", Arial'}}
            className="text-[20VW] font-black my-10 text-center text-black">
                FRONTEND DEVELOPER & FREELANCER
            </div>

            <p className="mt-8 text-black text-center font-medium w-[60vw] font-jost">
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <Link href="/contacts">
                <button className="w-[200px] h-[60px] font-black rounded-full text-4xl text-red-800 bg-black m-6">
                    Click
                </button>
            </Link>


        </motion.div>
    );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);

    return (
        <motion.div
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ scale, rotate }}
            className="relative h-[100vh] w-[100vh]-"
        >
                <TextEffect />
        </motion.div>
    );
};



export default Sticky;
