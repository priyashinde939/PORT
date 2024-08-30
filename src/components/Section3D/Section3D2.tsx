'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const Section3D2: React.FC = () => {
    return (
        <div 
        style={{perspective: '500px', transformStyle:'preserve-3d'}}
        className="flex flex-row p-6 gap-4 mx-10 min-h-[60vh] ">
    
            <motion.div
            className={`relative basis-2/3 border border-gray-800 overflow-hidden rounded-full shadow-lg flex flex-row min-w-[150px] text-red-700 items-center justify-center text-9xl font-black overflow-`}
            initial={{ transform: "matrix3d(1, 0, 0.5, 0.001,   0, 1, 0.2, 0.01,   0.2, 0, 1, 0,   0, 0, 0, 1)" }}
            whileHover={{ transform: "matrix3d(1, 0, 0, 0,   0, 1, 0, 0,   0, 0, 1, 0,   0, 0, 0, 1)"  }}
            transition={{ type: 'linear', stiffness: 30, duration:0.8 }}
            style={{ flexGrow: 'FlexGrow', padding: '2rem', transformOrigin:'top-left', perspectiveOrigin:'center'  }}
            >
    
                <h1>SLINK</h1>
                        
    
            </motion.div>
        </div>
      );
    };

export default Section3D2;
