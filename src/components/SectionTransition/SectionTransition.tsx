'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
// import { TextEffect } from '../TextGenerateEffect/TextEffect';
import SectionOne from './SectionOne';


const SectionTransition: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div 
        style={{perspective:1000, transformStyle:'preserve-3d'}}
        ref={container} className="relative h-[200vh] bg-[#000000]">
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
        </div>
    );
};

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 4]);
    // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
    // const translateX = useTransform(scrollYProgress, [0, 1], [0, 100]); 
//backgroundImage: 'url("./images/bg/fl1.jpg")'

    return (
        <motion.div
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ scale, rotate}}
            className="sticky top-0 h-[100vh] bg-[#2941a0] border border-[#1e222e]"
        >
            <SectionOne />

        </motion.div>
    );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [-6, 0]);
    // const translateZ = useTransform(scrollYProgress, [0, 1], [500, 0]); 
    // const borderRadius = useTransform(scrollYProgress, [0.5, 1], ['500px', '0px'])


    return (
        <motion.div
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{scale }}
            className="relative h-[100vh] bg-[#000000]"
        >
                {/* <TextEffect /> */}
        </motion.div>
    );
};



export default SectionTransition;
