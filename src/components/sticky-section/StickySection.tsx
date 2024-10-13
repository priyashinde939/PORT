'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue, useInView } from 'framer-motion';
// import SectionOne from './SectionOne';
import { TextEffectWithCustomVariants } from '../TextEffects/TextEffectClr';
import SectionOne from './SectionOne';
import useCursor from '../Test/cursor-provider'; 




const Sticky: React.FC = () => {
    const container = useRef<HTMLDivElement | null>(null);
    
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div 
            style={{ backgroundImage: 'url("./images/bg/1.jpg")', }}
            ref={container} 
            className="relative h-[200vh] bg-contain cursor-none"
        >
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
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 4]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

    return (
        <motion.div
            transition={{ type: "spring", stiffness: 40, damping: 100 }}
            style={{ scale, rotate, opacity }}
            className="sticky top-10 h-[90vh] bg-[#050404ac] bg-blend-multiply backdrop-blur-sm rounded-3xl mx-6 border border-[#a22327]"
        >

            <SectionOne />
        </motion.div>
    );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [4, 0]);

    // Create a ref for the section and use useInView to track its visibility
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });
    const { setCursor, resetCursor } = useCursor(); 
    
    return (
        <motion.div
            ref={sectionRef}
            transition={{ type: "spring", stiffness: 50, damping: 10 }}
            style={{ scale, rotate }}
            className="relative h-[120vh] bg-[#000000] rounded-3xl "
        >
            
            <div
                    onMouseEnter={() => {
                        setCursor({ variant: "blurred", content: "", color: "#e82626" }); // Set blurred cursor
                    }}
                    onMouseLeave={resetCursor} 
             className="relative rounded-3xl text-[1rem] md:lg:text-[2rem] font-semibold w-[60%] top-[40%] left-[20%]">
                {isInView && <TextEffectWithCustomVariants />}
            </div>
        </motion.div>
    );
};

export default Sticky;
