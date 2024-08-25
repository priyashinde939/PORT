
import {  motion } from 'framer-motion';


const Two: React.FC = () => {

    return (
        <div className="relative h-[100vh] bg-black">
            <motion.div className="h-20 w-20 bg-pink-700 rounded-full"
            animate={{
              x:[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500],
              y:[0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0, 20, 0]
            }}
            transition={{
              duration: 2,
              ease:'linear',
              repeat: Infinity
            }}
            >

            </motion.div>
        </div>
    );
};


export default Two;
