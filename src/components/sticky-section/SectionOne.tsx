import { motion } from 'framer-motion';
import Button from '../Button/Button';

const SectionOne: React.FC = () => {
  return (
    <div className="flex flex-row items-center h-screen px-4">

      <div 
      className="relative w-[50%] h-screen flex flex-col top-[40%] gap-4 ">
        {/* container */}
        <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
         className="items-start ">
          <span className="text-2xl font-medium">
            Creative
          </span>
        </motion.div>
        <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8,delay:0.4 }}
         className="items-start  font-black text-8xl">
          DESIGNER <span className="text-2xl font-medium">&</span>
        </motion.div>
        <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8,delay:0.8 }}
        className="items-start  font-black text-8xl">
          DEVELOPER
        </motion.div>
      </div>
{/* ----------------- */}
      <div className="w-[50%] h-screen justify-center flex flex-col gap-4">
        {/* container */}
        <motion.div 
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
        className="flex  place-content-end">
          <span className="text-xl font-medium mr-10">
            Available <br/> For Work
          </span>
        </motion.div>
        <motion.p 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
        className="flex place-self-end  text-end max-w-[70%] text-3xl">
        I am a Front-End Web Developer, I focus on creating creative and interactive websites. I’m passionate about building user-friendly, dynamic experiences and continuously improving my coding skills.
 
        </motion.p>
        <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }} 
        className="flex place-content-end -2 ">
          <Button text="CONTACT ME" />
        </motion.div>
      </div>

    </div>
  );
};

export default SectionOne;
