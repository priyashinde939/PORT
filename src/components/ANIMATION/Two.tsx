import { motion } from 'framer-motion';
import Image from 'next/image';

const Two: React.FC = () => {
    return (
        <div className="relative h-[100vh] bg-gray-400 overscroll-x-none overflow-hidden rounded-[4rem] inset-0">
            <div className='relative top-11'>
                <motion.div 
                // <------
                    animate={{
                        x: [1400, 1000, 600, 200, -200, -600, -1000, -1400],
                        y: [-20, 20, -20, 20, -20, 20, -10, 20]
                    }}
                    transition={{
                        duration: 9,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0,
                        repeatDelay: 10
                    }}
                    className="absolute flex flex-row place-content-evenly top-80 w-full h-[50vh]"
                >
                    <Image 
                        alt="img" 
                        src="/images/glow_l.png" 
                        width={260}
                        height={80}
                        className="relative h-full mx-10"
                    />
                </motion.div> 

                <motion.div 
                    animate={{
                        x: [-1400, -1000, -600, -200, 200, 600, 1000, 1400],
                        y: [-20, 20, -20, 20, -20, 20, -10, 20]
                    }}
                    transition={{
                        duration: 10,
                        ease: 'linear',
                        repeat: Infinity,
                        delay: 5,
                        repeatDelay: 0
                    }}
                    className="absolute flex flex-row place-content-evenly top-80 w-full h-[50vh]"
                >
                    <Image 
                        alt="img" 
                        src="/images/glow_r.png" 
                        width={260}
                        height={80}
                        className="relative h-full mx-10"
                    />
                </motion.div> 
            </div>
        </div>
    );
};

export default Two;
