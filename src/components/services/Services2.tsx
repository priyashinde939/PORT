import { useRef, useLayoutEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Services: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={containerRef} className="relative h-[500vh] w-[100vw] bg-black">
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

const Card1: React.FC<CardProps> = ({ scrollRef }) => {
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.8, 0]);
//    const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.7, 0]);

    return (
        <motion.div
        transition={{ type: "linear", stiffness: 50, damping: 10,  delay:5, duration:10}}
            style={{ scale}}
            className="sticky top-0  flex items-center justify-center"
        >
            <div className=" text-white border  w-[90vw] flex  text-5xl font-bold rounded-[3rem]">
                <div className="relative w-full h-[100vh] top-0 bg-black rounded-[3rem] flex items-center justify-center">
                    Card 1 Content
                </div>
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

    const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.8, 0]);
//    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10, delay:5, duration:10}}
            style={{ scale}}
            className="sticky top-0 flex items-center justify-center"
        >
            <div className=" text-black border  w-[90vw] flex  text-5xl font-bold rounded-[3rem]">
                <div className="relative w-full h-[100vh] top-0 bg-pink-700 rounded-[3rem] flex items-center justify-center">
                    Card 2 Content
                </div>
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

    const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0]);
//    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10,  delay:2, duration:10}}
            style={{ scale}}
            className="sticky top-0 flex items-center justify-center"
        >
            <div className=" text-black border  w-[90vw] flex  text-5xl font-bold rounded-[3rem]">
                <div className="relative w-full h-[100vh] top-0 bg-lime-500 rounded-[3rem] flex items-center justify-center">
                    Card 3 Content
                </div>
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

    const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.8, 0]);
//    const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10 }}
            style={{ scale}}
            className="sticky top-0 flex items-center justify-center"
        >
            <div className=" text-black border  w-[90vw] flex  text-5xl font-bold rounded-[3rem]">
                <div className="relative w-full h-[100vh] top-0 bg-orange-700 rounded-[3rem] flex items-center justify-center">
                    Card 4 Content
                </div>
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

    const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.8, 0]);
//    const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.7, 0]);

    return (
        <motion.div
            transition={{ type: "linear", stiffness: 50, damping: 10 }}
            style={{ scale}}
            className="sticky top-0 flex items-center justify-center"
        >
            <div className=" text-black border  w-[90vw] flex  text-5xl font-bold rounded-[3rem]">
                <div className="relative w-full h-[100vh] top-0 bg-lime-500 rounded-[3rem] flex items-center justify-center">
                    Card 5 Content
                </div>
            </div>
        </motion.div>
    );
};


export default Services;