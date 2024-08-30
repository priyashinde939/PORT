'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const Section3D1: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div 
        style={{perspective:'300px'}}
        ref={container} className="relative h-[200vh] bg-black">
            <Section1 scrollYProgress={scrollYProgress} />
        </div>
    );
};

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.4, 0.9]);
    const scaleX = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const rotateY = useTransform(scrollYProgress, [0, 1], [-4, 0]);
    const skew= useTransform(scrollYProgress, [0, 1], [-8, 0])


    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10 }}
            style={{ scale, rotateY, scaleX, skew }}
            className="sticky top-0 h-screen border-lime-500 border-2 text-[3.5vw] font-extrabold text-black flex flex-col items-center justify-center pb-[10vh] rounded-3xl"
        >
            <p>Heading Heading</p>
            <div className="flex gap-3">
                <p>Section</p>
                <p>Transition</p>
            </div>
            <h1 className="mt-3 font-bold text-2xl text-gray-700">
                SED CONDIMENTUM MUS AUGUE LUCTUS .
            </h1>
            <button className="w-[200px] h-[60px] rounded-full text-2xl text-white bg-black m-6">
                Click
            </button>
        </motion.div>
    );
};


export default Section3D1;
