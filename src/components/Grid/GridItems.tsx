import { FC } from 'react';
import { motion } from 'framer-motion';
import { GiAxeInLog } from 'react-icons/gi';

const FlexGrid: FC = () => {

  return (
    <div 
    style={{perspective: '500px'}}
    className="flex flex-row p-6 gap-4 mx-10 max-h-[75vh] ">
      
        <motion.div
          className={`relative basis-1/3 overflow-hidden rounded-3xl shadow-lg flex bg-slate-400 text-white items-center justify-center text-7xl font-black`}
          
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          style={{ flexGrow: 'FlexGrow' }}
        >

        </motion.div>

        <div
        className={`relative gap-5 basis-2/3  flex flex-col min-w-[160px] min-h-[150px] text-white items-center justify-center`}>
            <motion.div 

            whileHover={{ scale: 1.02}}
            whileTap={{ scale: 0.95 }}
            style={{ flexGrow: 'FlexGrow', perspective:'500px' }}
            className="relative  w-full  overflow-hidden rounded-3xl shadow-lg flex flex-col min-w-[100px] min-h-[47%] bg-zinc-300 text-black items-center justify-center">
                        
                        <motion.h1
                        initial={{ rotateY:'40deg', scaleX:1.9, scaleY:1.5,scaleZ:0.6}}
                        whileHover={{  rotateY:'0deg', scaleX:1.8, scaleY:1, scaleZ:0}}
                        transition={{ type: 'linear', stiffness: 30, duration:0.5 }}
                        style={{perspectiveOrigin:'left', transformOrigin:'1%'}}
                        className=" relative block text-9xl font-black">
                        26
                        </motion.h1>

            </motion.div>

            <motion.div 

            whileHover={{ scale: 1.02}}
            whileTap={{ scale: 0.95 }}
            style={{ flexGrow: 'FlexGrow', perspective:'500px' }}
            className="relative  w-full  overflow-hidden rounded-3xl shadow-lg flex flex-col min-w-[100px] min-h-[47%] border border-gray-800 items-center justify-center">
                        
            <motion.div
            className={`relative overflow-hidden rounded-full w-fit left-16 text-red-700 items-center justify-center text-9xl font-black`}
            initial={{    transform: "matrix3d(1, 0, -0.4, 0.001,   0.1, 1, -0.6, 0,   0.1, 0, 1, 1,   -20, 0, 40, 1)" }}
            whileHover={{ transform: "matrix3d(1.4, 0, 0, 0.001,   0, 1.4, 0, 0,   0, 0, 1, 0,   -10, -10, 0, 1)"  }}
            transition={{ type: 'spring', stiffness: 30, duration:0.6 }}
            style={{ flexGrow: 'FlexGrow', padding: '2rem', transformOrigin:'bottom-left', perspectiveOrigin:'center'  }}
            >
                
    
                <h1>SLINK</h1>
                        
    
            </motion.div>

            </motion.div>
        </div>

        <motion.div
          className={`relative basis-2/3 border border-gray-800 overflow-hidden rounded-full shadow-lg flex flex-row min-w-[150px] text-red-700 items-center justify-center text-9xl font-black`}
          initial={{  scaleX:1.2, rotateY:'20deg', skewY:'-10deg',  skewX:'20deg' }}
          whileHover={{  scaleX:1, rotateY:'0deg', skewY:'0deg' ,  skewX:0}}
          transition={{ type: 'linear', stiffness: 30, duration:0.8 }}
          style={{ flexGrow: 'FlexGrow', padding: '2rem', transformOrigin:'top-left', perspectiveOrigin:'left'  }}
        >
            <img className="object-fill"
            src="images/8.jpg" alt="img" />

        </motion.div>
    </div>
  );
};

export default FlexGrid;
