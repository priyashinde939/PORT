import React from 'react';
import { motion } from 'framer-motion';


interface SlideProps {
    text: string;
    index: number;
}

const Slide: React.FC<SlideProps> = ({text, index}) => {
    return(
        <div className="relative my-40 flex flex-col bg-white text-black font-black w-full text-4xl place-items-center">
        <motion.div className="relative bg-slate-600  w-[45vw] h-[50vh] rounded-3xl"
        initial={{
            opacity:0,
            x: index % 2 === 0? 100:-100,
            rotate: index % 2 === 0 ? 40: 40
        }}
        whileInView={{
            opacity:1,
            x:0,
            rotate:0
        }}
        transition={{
            duration: 1,
        }}
        // viewport={{
        //     once:true
        // }}
        >
            <p>{text}</p>
        </motion.div>
    </div>

    );
}
export default Slide
