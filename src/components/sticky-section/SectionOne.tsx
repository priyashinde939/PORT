import { motion } from 'framer-motion';
import Button from '../Button/Button';

const SectionOne: React.FC = () => {
  return (
    <div className="flex lg:md:flex-row flex-col h-screen px-4">

      <div 
      className="relative lg:w-[50%] sm:w-full flex flex-col lg:top-[30%] top-[15%] lg:gap-4 ">
        {/* container */}
        <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
         className="items-start ">
          <span className="text-xl lg:text-2xl font-medium mix-blend-darken">
            Creative
          </span>
        </motion.div>
        <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8,delay:0.4 }}
         className="items-start  font-black lg:text-7xl md:text-6xl text-5xl">
          DESIGNER <span className="text-2xl font-medium">&</span>
        </motion.div>
        <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8,delay:0.8 }}
        className="items-start  font-black lg:text-8xl md:text-8xl text-6xl">
          DEVELOPER
        </motion.div>
      </div>
{/* ----------------- */}
      <div className="lg:w-[50%] w-full h-screen justify-center flex flex-col gap-4">
        {/* container */}
        <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
        className="flex flex-col gap-0 items-end text-md lg:text-xl font-medium mt-10 mr-10">
          <span>
            Available 
          </span>
          <span>
            For Work 
          </span>
        </motion.div>
        <motion.p 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
        className="flex place-self-end p-3 text-end lg:max-w-[70%] md:sm:w-full font-medium text-[#000000] text-pretty lg:text-[1.5rem] sm:text-lg md:text-xl border border-[#35353549] backdrop-blur-sm rounded-3xl">
        I am a Front-End Web Developer, I focus on creating creative and interactive websites. I’m passionate about building user-friendly, dynamic experiences and continuously improving my coding skills.
 
        </motion.p>
        <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }} 
        className="flex place-content-end ">
          <Button text="CONTACT ME" />
        </motion.div>
      </div>

    </div>
  );
};

export default SectionOne;
