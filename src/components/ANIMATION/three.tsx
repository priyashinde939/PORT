import { motion } from 'framer-motion';
import Image from 'next/image'

const Three: React.FC = () => {
    return (
        <div className="relative h-[100vh] bg-white overscroll-x-none overflow-x-hidden">
          <motion.div 
          animate={{
            x: [-1500,-1400, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [20, 0, 30, 0, 35, -10, 30, 0, 35, 20, 25, 10, 0, 15, 30, 35]
          }}
          transition={{
              duration: 6,
              ease: 'linear',
              repeat: Infinity
          }}
          className="absolute flex flex-row place-content-between w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/1c.png" 
              width={180}
              height={200}
              className="relative h-full"/>
              <Image 
              alt="img" 
              src="/images/4c.png" 
              width={180}
              height={200}
              className="relative h-full"/>
              <Image 
              alt="img" 
              src="/images/2c.png" 
              width={180}
              height={200}
              className="relative h-full"/>
              <Image 
              alt="img" 
              src="/images/3c.png" 
              width={180}
              height={200}
              className="relative h-full"/>

          </motion.div>

          <motion.div 
          animate={{
            x: [-1400, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [10, 30, 35, 30, 20, 20, 0, 20, -10, 30, 35, 30, 0, 30, 0]
          }}
          transition={{
              duration: 6,
              ease: 'linear',
              repeat: Infinity
          }}
          className="absolute top-0 flex flex-row place-content-between w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/1c.png" 
              width={180}
              height={200}
              className="relative h-full"/>
              <Image 
              alt="img" 
              src="/images/4c.png" 
              width={180}
              height={200}
              className="relative h-full"/>
              <Image 
              alt="img" 
              src="/images/2c.png" 
              width={180}
              height={200}
              className="relative h-full"/>
              <Image 
              alt="img" 
              src="/images/3c.png" 
              width={180}
              height={200}
              className="relative h-full"/>

          </motion.div>
        </div>
    );
};

export default Three;
