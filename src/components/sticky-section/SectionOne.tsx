import { motion } from 'framer-motion';
import Button2 from '../Button/Button2';
import useCursor from '../Cursor/cursor-provider'; 
import clsx from "clsx";
import s from "./SectionTransition.module.scss"; 

const SectionOne: React.FC = () => {
    const { setCursor, resetCursor } = useCursor(); 

    return (
        
        <div 
className="relative flex lg:md:flex-row flex-col h-screen px-4 ">
        <div className={clsx(s.SectionOne, "absolute h-full w-full overflow-hidden")}>
            <div className={s.stars}></div>
            <div className={s.stars2}></div>
            <div className={s.stars3}></div>
        </div>
            <div 
                className="relative lg:w-[50%] sm:w-full flex flex-col xl:lg:top-[20%] xl:lg:left-[5%] top-[10%] lg:gap-4 h-fit">
                {/* container */}

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="items-start p-3">
                    <span 
                            onMouseEnter={() => {
                                setCursor({ variant: "blurred", content: "HOLA", color: "#e82626" }); // Set blurred cursor
                            }}
                            onMouseLeave={resetCursor} 
                    className="text-xl lg:text-2xl font-medium text-[#9eb3f5]">
                        Creative
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="items-start  font-black xl:lg:text-[7rem] md:text-6xl text-5xl text-gradient3">
                        DESIGNER 
                    <span className="relative ml-6 text-3xl font-medium text-[#9ebff5] ">&</span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="items-start text-gradient3 font-black xl:lg:text-[8rem] md:text-8xl text-6xl">
                    DEVELOPER
                </motion.div>
            </div>

            {/* ----------------- */}
            <div className="lg:w-[50%] xl:lg:pr-5 w-full h-screen items-end justify-center flex flex-col gap-4">
                {/* container */}
                <motion.div 

                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="p-2 flex gap-0 text-[#d4d4d4fc] items-end text-md lg:text-xl md:text-lg sm:text-sm font-medium lg:md:mt-10"
                >
                    <span>Available</span>
                    <span>For Work</span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col place-self-end p-3 text-end lg:max-w-[70%] md:sm:w-full font-medium text-[#6975d6] text-pretty lg:text-[1.5rem] sm:text-lg md:text-xl border border-[#35353549] rounded-3xl"
                >
                    <h1> Hey</h1>
                    <h1>Im Priya</h1>
                    <h1>. . . And I love writing beautiful code</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }} 
                    className="flex place-content-end text-[#8a99ef]"
                >
                    <Button2  text='CONTACT' />
                </motion.div>
            </div>
        </div>
    );
};

export default SectionOne;
