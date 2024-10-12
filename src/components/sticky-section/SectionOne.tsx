import { motion } from 'framer-motion';
import Button2 from '../Button/Button2';
import useCursor from '../Test/cursor-provider'; // Make sure the path is correct

const SectionOne: React.FC = () => {
    const { setCursor, resetCursor } = useCursor(); // Using the cursor context

    return (
        <div 

        className="flex lg:md:flex-row flex-col h-screen px-4">
            <div 
                    onMouseEnter={() => {
                        setCursor({ variant: "blurred", content: ""}); 
                    }}
                    onMouseLeave={resetCursor} 
                className="relative lg:w-[50%] sm:w-full flex flex-col xl:lg:top-[20%] xl:lg:left-[5%] top-[10%] lg:gap-4 h-fit">
                {/* container */}

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="items-start p-3">
                    <span 

                    className="text-xl lg:text-2xl font-medium text-[#9eb3f5]">
                        Creative
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="items-start text-[#e4e6f1fc] font-black xl:lg:text-[7rem] md:text-6xl text-5xl">
                        DESIGNER 
                    <span className="relative ml-6 text-3xl font-medium text-[#9ebff5] ">&</span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="items-start text-[#e4e6f1fc] font-black xl:lg:text-[8rem] md:text-8xl text-6xl">
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
                    className="p-2 flex gap-0 text-[#eae6e6] items-end text-md lg:text-xl md:text-lg sm:text-sm font-medium lg:md:mt-10"
                >
                    <span>Available</span>
                    <span>For Work</span>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col place-self-end p-3 text-end lg:max-w-[70%] md:sm:w-full font-medium text-[#979797] text-pretty lg:text-[1.5rem] sm:text-lg md:text-xl border border-[#35353549] rounded-3xl"
                >
                    <h1> Hey</h1>
                    <h1>Im Priya</h1>
                    <h1>. . . And I love writing beautiful code</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }} 
                    className="flex place-content-end"
                >
                    <Button2 bgColor='transparent' text='CONTACT' />
                </motion.div>
            </div>
        </div>
    );
};

export default SectionOne;
