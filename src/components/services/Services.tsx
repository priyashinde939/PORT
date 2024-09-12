'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Services: React.FC = () => {
    // Create a single ref for the entire container
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={containerRef} className="relative h-[650vh] w-[100vw] bg-black">
            <Card1 scrollRef={containerRef} />
            <Card2 scrollRef={containerRef} />
            <Card3 scrollRef={containerRef} />
            <Card4 scrollRef={containerRef} />
            <Card5 scrollRef={containerRef} />
        </div>
    );
};

interface CardProps {
    scrollRef: React.RefObject<HTMLDivElement>;
}

// Card1 Component
const Card1: React.FC<CardProps> = ({ scrollRef }) => {
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    });

    // Define scale and opacity transformations based on scroll progress
    const scale = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 0.8, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.3], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10 }}
            style={{ scale, opacity }}
            className="sticky top-0  flex items-center justify-center"
        >
            <div className=" bg-black text-white h-[100vh] border w-full flex items-center justify-center text-5xl font-black rounded-[3rem]">
                Card 1 Content
            </div>
        </motion.div>
    );
};

// Card2 Component
const Card2: React.FC<CardProps> = ({ scrollRef }) => {
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [1, 0.8, 0.5]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ scale, opacity }}
            className="sticky top-0 flex items-center justify-center"
        >
            <div className=" bg-pink-700 text-black h-[100vh] w-[90vw] flex items-center justify-center text-2xl font-bold rounded-[3rem]">
                Card 2 Content
            </div>
        </motion.div>
    );
};

// Card3 Component
const Card3: React.FC<CardProps> = ({ scrollRef }) => {
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0.4, 0.5, 0.7], [1, 0.8, 0.5]);
    const opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.7], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10 }}
            style={{ scale, opacity }}
            className="sticky top-0 flex items-center justify-center"
        >
            <div className=" bg-lime-500 text-black h-[100vh] w-[90vw] flex items-center justify-center text-2xl font-bold rounded-[3rem]">
                Card 3 Content
            </div>
        </motion.div>
    );
};

// Card4 Component
const Card4: React.FC<CardProps> = ({ scrollRef }) => {
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0.6, 0.7, 0.9], [1, 0.8, 0.5]);
    const opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.9], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10 }}
            style={{ scale, opacity }}
            className="sticky top-0 flex items-center justify-center"
        >
            <div className=" bg-orange-800 text-black h-[100vh] w-[90vw]  flex items-center justify-center text-2xl font-bold rounded-[3rem]">
                Card 4 Content
            </div>
        </motion.div>
    );
};

// Card5 Component
const Card5: React.FC<CardProps> = ({ scrollRef }) => {
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0.8, 0.9, 1], [1, 0.8, 0.5]);
    const opacity = useTransform(scrollYProgress, [0.8, 0.9, 1], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10 }}
            style={{ scale, opacity }}
            className="sticky top-0 flex items-center justify-center"
        >
            <div className=" bg-lime-500 text-black h-[100vh] w-[90vw]  flex items-center justify-center text-2xl font-bold rounded-[3rem]">
                Card 5 Content
            </div>
        </motion.div>
    );
};

export default Services;
