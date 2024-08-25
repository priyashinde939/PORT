import { motion } from 'framer-motion';
import Image from 'next/image'

const Three: React.FC = () => {
    return (
        <div className="relative h-[100vh] bg-black">
          <motion.div 
          animate={{
            x: [-1600, -1400, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400, 1600],
            y: [0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0]
          }}
          transition={{
              duration: 6,
              ease: 'linear',
              repeat: Infinity
          }}
          className="relative flex flex-row place-content-between w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/glow.png" 
              width={200}
              height={200}
              className="relativeh-full"/>
              <Image 
              alt="img" 
              src="/images/glow.png" 
              width={200}
              height={200}
              className="relativeh-full"/>
              <Image 
              alt="img" 
              src="/images/glow.png" 
              width={220}
              height={200}
              className="relativeh-full"/>
              <Image 
              alt="img" 
              src="/images/glow.png" 
              width={200}
              height={200}
              className="relativeh-full"/>

          </motion.div>
        </div>
    );
};

export default Three;
