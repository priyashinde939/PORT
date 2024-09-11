'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const Services: React.FC = () => {
    // Create separate refs for each card
    const containerRef = useRef<HTMLDivElement | null>(null);
    const card1Ref = useRef<HTMLDivElement | null>(null);
    const card2Ref = useRef<HTMLDivElement | null>(null);
    const card3Ref = useRef<HTMLDivElement | null>(null);
    const card4Ref = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={containerRef} className="relative h-[750vh] bg-black">
            {/* Different card components with unique content */}
            <Card1 scrollRef={containerRef} />
            <Card2 scrollRef={card1Ref} />
            <Card3 scrollRef={card2Ref} />
            <Card4 scrollRef={card3Ref} />
            <Card5 scrollRef={card4Ref} />
            {/* <Card1 scrollRef={card1Ref} />
            <Card2 scrollRef={card2Ref} />
            <Card3 scrollRef={card3Ref} />
            <Card4 scrollRef={card4Ref} /> */}
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

    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <motion.div
            ref={scrollRef}
            transition={{ type: "linear", stiffness: 50, damping: 10 }}
            style={{ scale, opacity }}
            className="sticky top-0 h-[100vh] flex items-center justify-center"
        >
            <div className="bg-black text-white border w-[100vw] flex items-center justify-center text-5xl font-black">
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

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (

                    <motion.div
            ref={scrollRef}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ scale, opacity }}
            className="sticky top-0 h-[100vh] flex items-center justify-center"
        >
            <div className=" sticky  bg-pink-700 text-black w-full flex items-center justify-center text-2xl font-bold">
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

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (
        <motion.div
            ref={scrollRef}
            style={{ scale, opacity }}
            className="sticky top-0 h-[100vh] flex items-center justify-center"
        >
            <div className=" bg-lime-500 text-black w-full  flex items-center justify-center text-2xl font-bold">
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

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (
        <motion.div
            ref={scrollRef}
            style={{ scale, opacity }}
            className="sticky top-0 h-[100vh] flex items-center justify-center"
        >
            <div className=" bg-orange-800 text-black w-full  flex items-center justify-center text-2xl font-bold">
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

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (
        <motion.div
            ref={scrollRef}
            style={{ scale, opacity }}
            className="sticky top-0 h-[100vh] flex items-center justify-center"
        >
            <div className="rounded-[3rem] bg-lime-500 text-black w-full  flex items-center justify-center text-2xl font-bold">
                Card 5 Content
            </div>
        </motion.div>
    );
};

export default Services;
