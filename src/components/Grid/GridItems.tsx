import { FC } from 'react';
import { motion } from 'framer-motion';
import Cube3D from '../Section3D/Cube3D';

const FlexGrid: FC = () => {

  return (
    <div 
    style={{perspective: '500px'}}
    className="flex flex-row sm:flex-col p-6 gap-4 mx-10 h-auto sm:gap-6 ">
      
        <motion.div
          className={`relative basis-2/4 overflow-hidden rounded-3xl shadow-lg flex border border-gray-600 text-white items-center justify-center text-7xl font-black`}
          
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          style={{ flexGrow: 'FlexGrow' }}
        >
                  <img className="object-cover"
                  src="images/7.jpg" alt="img" />
        </motion.div>

        <div className={`relative gap-5 basis-2/3  flex flex-col min-w-[150px] min-h-[150px] text-white items-center justify-center`}>
            
            <motion.div 
            whileHover={{ scale: 1.02}}
            whileTap={{ scale: 0.95 }}
            style={{ flexGrow: 'FlexGrow', perspective:'500px' }}
            className="relative basis-2/3 w-full  overflow-hidden rounded-3xl shadow-lg flex flex-col min-w-[100px] items-center justify-center border border-gray-700 ">      
                <Cube3D />
            </motion.div>

            <motion.div 
            whileHover={{ scale: 1.02}}
            whileTap={{ scale: 0.95 }}
            style={{ flexGrow: 'FlexGrow', perspective:'500px' }}
            className="relative basis-1/3 w-full  overflow-hidden rounded-3xl shadow-lg flex flex-col min-w-[100px]  border border-gray-800 items-center justify-center">
                        
                <motion.div
                className={`relative overflow-hidden rounded-full w-fit left-16 text-orange-700 items-center justify-center text-[7vw] font-black`}
                initial={{    transform: "matrix3d(1.3, 0, -0.2, 0.002,   0.2, 1, -0.1, 0,   -0.5, 0, 1, 1,   25, 0, 40, 1)" }}
                whileHover={{ transform: "matrix3d(1.5, 0, 0, 0,   0, 1.8, 0, 0,   0, 0, 1, 0,   -60, 10, 0, 1)"  }}
                transition={{ type: 'spring', stiffness: 30, duration:0.6 }}
                style={{ flexGrow: 'FlexGrow', padding: '2rem', transformOrigin:'bottom', perspectiveOrigin:'center'  }}
                >
                    <h1>FLIKY</h1>
                </motion.div>

            </motion.div>
        </div>
        
        <div className={`relative basis-2/3 flex flex-col gap-10`}>

              <div className="basis-2/4"></div>
              <div className="relative basis-2/4 bg-slate-900 rounded-[2rem] ">
                  <img className="object-cover overflow-clip "
                  src="images/mid.jpg" alt="img" />
              </div>
        </div>


    </div>
  );
};

export default FlexGrid;
