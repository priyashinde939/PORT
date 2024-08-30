'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

const Section3D2: React.FC = () => {
    return (
        <div 
        style={{perspective: '500px', transformStyle:'preserve-3d'}}
        className="relative mx-10 min-h-[60vh] ">
    {/* border border-gray-800 */}
            <motion.div
            className={`relative  overflow-hidden rounded-full w-fit left-[35%] text-red-700 items-center justify-center text-9xl font-black`}
            initial={{ transform: "matrix3d(1, 0, 0, 0.003,   0, 1, 0, 0,   0.2, 0, 1, 0,   0, 0, 0, 1)" }}
            whileHover={{ transform: "matrix3d(1, 0, 0, -0.001,   0, 1, 0, 0,   0, 0, 1, 0,   0, 0, 0, 1)"  }}
            transition={{ type: 'linear', stiffness: 30, duration:0.8 }}
            style={{ flexGrow: 'FlexGrow', padding: '2rem', transformOrigin:'top-left', perspectiveOrigin:'center'  }}
            >
                
    
                <h1>SLINK</h1>
                        
    
            </motion.div>
        </div>
      );
    };

export default Section3D2;