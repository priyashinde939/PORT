import { motion } from 'framer-motion';
import Image from 'next/image'

const Three: React.FC = () => {
    return (
        <div className="relative h-[100vh] bg-white overscroll-x-none overflow-x-hidden rounded-[4rem] inset-0">

          <div className='relative top-[10%]'>
          <motion.div 
          animate={{
            x: [-1500,-1400, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [20, 0, 30, 0, 30, -10, 30, 0, 30, 20, 25, 10, 0, 15, 30, 35]
          }}
          transition={{
              duration: 7,
              ease: 'linear',
              repeat: Infinity,
              
          }}
          className="absolute flex flex-row place-content-between top-96 w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/8c.png" 
              width={220}
              height={200}
              />
              <Image 
              alt="img" 
              src="/images/2c.png" 
              width={200}
              height={200}
              />
              <Image 
              alt="img" 
              src="/images/7c.png" 
              width={180}
              height={200}
              />
              <Image 
              alt="img" 
              src="/images/6c.png" 
              width={180}
              height={200}
              />

          </motion.div>


          <motion.div 
          animate={{
            x: [-1300, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [0, 30, 15, 30, 0, 20, 0, 20, -10, 30, 35, 10, 0, 30, 0]
          }}
          transition={{
              duration: 7,
              ease: 'linear',
              repeat: Infinity,
              delay:3
          }}
          className="absolute  flex flex-row place-content-evenly top-96 w-full h-[35vh] ">

              <Image 
              alt="img" 
              src="/images/5c.png" 
              width={240}
              height={200}
              className="relative h-full mx-10"/>
              <Image 
              alt="img" 
              src="/images/4c.png" 
              width={180}
              height={200}
              className="relative h-full mx-10"/>

          </motion.div> 

          <motion.div 
          animate={{
            x: [1400, 1200, 1000, 800, 600, 400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1450],
            y: [0, 30, 0, 40, 0, 30, 0, 30, 0, 30, 35, 0, 30, 10, 40]
          }}
          transition={{
              duration: 9,
              ease: 'linear',
              repeat: Infinity,
              delay:4
          }}
          className="absolute flex flex-row place-content-evenly top-96 w-full h-[35vh] ">
              <Image 
              alt="img" 
              src="/images/4c_flipped.png" 
              width={180}
              height={200}
              className="relative h-full mx-10"/>

              <Image 
              alt="img" 
              src="/images/2c_flipped.png" 
              width={180}
              height={200}
              className="relative h-full mx-10"/>

          </motion.div> 

          <motion.div 
          // reversed
          animate={{
            x: [1400, 1200, 1000, 800, 600, 400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1450],
            y: [0, 30, 0, 40, 0, 30, 0, 30, 0, 30, 35, 0, 40, 10, 40]
          }}
          transition={{
              duration: 7,
              ease: 'linear',
              repeat: Infinity,
              
          }}
          className="absolute flex flex-row place-content-between top-96 w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/4c_flipped.png" 
              width={180}
              height={200}
              />
              <Image 
              alt="img" 
              src="/images/1c_flipped.png" 
              width={180}
              height={200}
              />
                            <Image 
              alt="img" 
              src="/images/3c_flipped.png" 
              width={180}
              height={200}
              />
              <Image 
              alt="img" 
              src="/images/9c_flipped.png" 
              width={180}
              height={200}
              />
          </motion.div>
          
          <motion.div 
          animate={{
            x: [-1300, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [0, 30, 15, 30, 0, 20, 0, 20, -10, 30, 35, 10, 0, 30, 0]
          }}
          transition={{
              duration: 7,
              ease: 'linear',
              repeat: Infinity
          }}
          className="absolute flex flex-row place-content-evenly top-96 w-full h-[35vh] ">

              <Image 
              alt="img" 
              src="/images/9c.png" 
              width={180}
              height={200}
              className="relative h-full mx-10"/>

          </motion.div> 
          </div>



        </div>
    );
};

export default Three;
