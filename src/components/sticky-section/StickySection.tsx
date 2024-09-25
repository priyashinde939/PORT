'use client';
import { useRef } from 'react';
// import Link from 'next/link'
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
        ref={container} className="relative h-[190vh] bg-black">
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
            style={{ scale, rotate, backgroundImage: 'url("./images/bg/3.jpg")'}}
            className="sticky top-0 h-[100vh] bg-[#afbeed] bg-no-repeat bg-cover rounded-xl border-2"
        >


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
            className="relative h-[100vh] w-full"
        >
                <TextEffect />
        </motion.div>
    );
};



export default Sticky;
