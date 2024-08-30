import { FC } from 'react';
import { motion } from 'framer-motion';
import { GiAxeInLog } from 'react-icons/gi';

const FlexGrid: FC = () => {

  return (
    <div 
    style={{perspective: '500px'}}
    className="flex flex-row p-6 gap-4 mx-10 min-h-[60vh] ">
      
        <motion.div
          className={`relative basis-1/3 overflow-hidden rounded-lg shadow-lg flex border text-white items-center justify-center text-7xl font-black`}
          
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          style={{ flexGrow: 'FlexGrow' }}
        >
          <h1> SLINK </h1>
        </motion.div>

        <div
        className={`relative gap-5 basis-2/3  rounded-lg shadow-lg flex flex-col min-w-[160px] min-h-[150px] text-white items-center justify-center`}>
            <motion.div 

            whileHover={{ scale: 1.02}}
            whileTap={{ scale: 0.95 }}
            style={{ flexGrow: 'FlexGrow', perspective:'1000px' }}
            className="relative  w-full  overflow-hidden rounded-lg shadow-lg flex flex-col min-w-[100px] min-h-[47%] border text-white items-center justify-center">
                        
                        <motion.h1
                        initial={{ rotateY:'60deg', scaleX:1.5, scaleY:2,scaleZ:2}}
                        whileHover={{  rotateY:'0deg', scaleX:1, scaleY:1}}
                        transition={{ type: 'linear', stiffness: 30, duration:0.5 }}
                        style={{perspectiveOrigin:'left', transformOrigin:'1%'}}
                        className=" relative block text-9xl font-black">
                        SLINK
                        </motion.h1>

            </motion.div>

            <motion.div 

whileHover={{ scale: 1.02}}
whileTap={{ scale: 0.95 }}
style={{ flexGrow: 'FlexGrow', perspective:'1000px' }}
className="relative  w-full  overflow-hidden rounded-lg shadow-lg flex flex-col min-w-[100px] min-h-[47%] border text-white items-center justify-center">
            
            <motion.h1
            initial={{ rotateY:'60deg', scaleX:2, scaleY:2,scaleZ:1.5}}
            whileHover={{  rotateY:'10deg', scaleX:1, scaleY:1}}
            transition={{ type: 'linear', stiffness: 30, duration:0.5 }}
            style={{perspectiveOrigin:'left', transformOrigin:'1%', transformStyle:'preserve-3d'}}
            className=" relative block text-9xl font-black text-start">
            SLINK
            </motion.h1>

</motion.div>
        </div>

        <motion.div
          className={`relative basis-2/3 border border-gray-800 overflow-hidden rounded-lg shadow-lg flex flex-row min-w-[150px] text-red-700 items-center justify-center text-9xl font-black`}
          initial={{  scaleX:1.2, rotateY:'20deg', skewY:'-10deg',  skewX:'20deg' }}
          whileHover={{  scaleX:1, rotateY:'0deg', skewY:'0deg' ,  skewX:0}}
          transition={{ type: 'linear', stiffness: 30, duration:0.8 }}
          style={{ flexGrow: 'FlexGrow', padding: '2rem', transformOrigin:'top-left', perspectiveOrigin:'left'  }}
        >

            <h1>SLINK</h1>
                        
            {/* <motion.h1
            initial={{ rotateY:'60deg', scaleX:2, scaleY:2,scaleZ:1.5}}
            whileHover={{  rotateY:'10deg', scaleX:1, scaleY:1}}
            transition={{ type: 'linear', stiffness: 30, duration:0.5 }}
            style={{perspectiveOrigin:'left', transformOrigin:'1%', transformStyle:'preserve-3d'}}
            className=" relative block text-9xl font-black text-start">
            SLINK
            </motion.h1> */}

        </motion.div>
    </div>
  );
};

export default FlexGrid;
