'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { TextEffect } from '../TextGenerateEffect/TextEffect';

const Sticky: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div style={{fontFamily:'Oswald'}}
        ref={container} className="relative h-[200vh] bg-black">
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
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -3]);

    return (
        <motion.div
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ scale, rotate }}
            className="sticky rounded-2xl top-0 h-screen bg-violet-700 text-[3.5vw] font-extrabold text-black flex flex-col items-center justify-center pb-[10vh]"
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

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [3, 0]);

    return (
        <motion.div
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ scale, rotate }}
            className="relative h-auto"
        >
            {/* <div className="relative flex flex-col text-[7vw] gap-5 font-black">
                <p>IMAGE CONTAINER</p>
                <h1 className="mt-3 font-bold text-2xl text-gray-400">
                    SED CONDIMENTUM MUS AUGUE LUCTUS .
                </h1>
            </div>
            <div className="top-5 left-[30%] m-0 w-[50%] text-[2vw] min-w-[300px] text-start p-3 text-gray-500 text-wrap">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, ipsa quae abeaque ipsa quae ab illo ipsa quae abeaqueinventore veritatis
                <h1 className="mt-3 font-bold text-gray-400">
                    SED CONDIMENTUM MUS AUGUE LUCTUS .
                </h1>
            </div> */}


                <TextEffect />


        </motion.div>
    );
};



export default Sticky;
