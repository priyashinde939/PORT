import { FC } from 'react';
import { motion } from 'framer-motion';

const FlexGrid: FC = () => {

  return (
    <div className="flex  flex-row p-6 gap-4 mx-10">
      
        <motion.div
          className={`relative basis-1/3 overflow-hidden rounded-lg shadow-lg flex min-w-[150px] bg-gray-800 text-white items-center justify-center`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ flexGrow: 'FlexGrow', padding: '2rem' }}
        >
        </motion.div>

        <div
          className={`relative gap-8 basis-2/3 overflow-hidden rounded-lg shadow-lg flex flex-col min-w-[150px] bg-gray-800 text-white items-center justify-center`}
        >
            <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ flexGrow: 'FlexGrow', padding: '1rem', margin:'3rem' }}
            className="relative   w-full h-[50vh] basis-2/4 overflow-hidden rounded-lg shadow-lg flex min-w-[150px] bg-slate-400 text-white items-center justify-center">
            </motion.div>

            <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ flexGrow: 'FlexGrow', padding: '1rem', margin:'3rem' }}
            className="relative w-full h-[50vh] basis-2/3 overflow-hidden rounded-lg shadow-lg flex min-w-[150px] bg-slate-400 text-white items-center justify-center">

            </motion.div>
        </div>

        <motion.div
          className={`relative basis-2/3 overflow-hidden rounded-lg shadow-lg flex flex-row min-w-[150px] bg-gray-800 text-white items-center justify-center`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ flexGrow: 'FlexGrow', padding: '2rem' }}
        >
        </motion.div>
    </div>
  );
};

export default FlexGrid;
