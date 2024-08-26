import { motion } from 'framer-motion';
import Image from 'next/image'

const Three: React.FC = () => {
    return (
        <div className="relative h-[100vh] bg-white overscroll-x-none overflow-hidden rounded-[4rem] inset-0">

          <div className="absolute top-28 h-full w-[70vw] text-black text-left text-8xl font-extrabold flex flex-col gap-12">
              <p>I help you</p>
              <p>shine in a crowded </p>
              <p>market.</p>
          </div>
 
          <div className='relative top-20'>

          <motion.div 
          //glow  <------
          animate={{
            x: [1400, 1200, 1000, 800, 600, 400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1450],
            y: [-20, 20, -20, 20, -20, 20, -10, 20, -20, 10, 30, -20, 20, 20, -20]
          }}
          transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              delay:0,
              repeatDelay:6
          }}
          className="absolute flex flex-row place-content-evenly top-72 w-full h-[50vh] z-10">
              <Image 
              alt="img" 
              src="/images/glow_l.png" 
              width={260}
              height={80}
              className="relative h-full mx-10"/>

          </motion.div> 

          
          <motion.div 
          //glow  ------>
          animate={{
            x: [-1500,-1400, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [-20, 20, -20, 20, -20, 20, -10, 20, -20, 10, 30, -20, 20, 20, -20]
          }}
          transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              delay:5,
              repeatDelay:6
          }}
          className="absolute flex flex-row place-content-evenly top-72 w-full h-[50vh] z-10">
              <Image 
              alt="img" 
              src="/images/glow_r.png" 
              width={260}
              height={80}
              className="relative h-full mx-10"/>

          </motion.div>  


          <motion.div 
          // ---------> 3 //
          animate={{
            x: [-2000,-1900,-1800, -1700, -1600,-1500,-1400, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 30, 20, 25, 10, 0, 15, 30, 35]
          }}
          transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              
          }}
          className="absolute flex flex-row place-content-around top-96 w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/8c.png" 
              width={180}
              height={200}

              />
              <Image 
              alt="img" 
              src="/images/2c.png" 
              width={180}
              height={200}
              className='mx-60'

              />
              <Image 
              alt="img" 
              src="/images/7c.png" 
              width={180}
              height={200}
              />
          </motion.div>


          <motion.div 
          // 2 //
          animate={{
            x: [-1300, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [0, 30, 15, 30, 0, 20, 0, 20, -10, 30, 35, 10, 0, 30, 0]
          }}
          transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              delay:6
          }}
          className="absolute flex flex-row place-content-around top-96 w-full h-[35vh] ">

              <Image 
              alt="img" 
              src="/images/5c.png" 
              width={240}
              height={200}
              className="relative h-full mx-10 "/>
              <Image 
              alt="img" 
              src="/images/4c.png" 
              width={180}
              height={200}
              className="relative h-full mx-10"/>

          </motion.div> 


          ////////////////////////////////////


          <motion.div 
          animate={{
            x: [1400, 1300, 1200, 1000, 800, 600, 400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400],
            y: [0, 30, 15, 30, 0, 20, 0, 20, -10, 30, 35, 10, 0, 30, 0]
          }}
          transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              delay:5,
              repeatDelay:5
          }}
          className="absolute flex flex-row place-content-evenly top-96 w-full h-[35vh] ">

              <Image 
              alt="img" 
              src="/images/3c_flipped.png" 
              width={180}
              height={200}
              />
              <Image 
              alt="img" 
              src="/images/4c_flipped.png" 
              width={180}
              height={200}
              />

          </motion.div> 


          <motion.div 
          // <---------- 2
          animate={{
            x: [1400, 1200, 1000, 800, 600, 400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1450],
            y: [0, 20, 0, 30, -10, 30, 0, 30, -10, 30, 35, 0, 30, 10, 30]
          }}
          transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              repeatDelay:2
          }}
          className="absolute flex flex-row place-content-evenly top-96 w-full h-[35vh] ">
              <Image 
              alt="img" 
              src="/images/9c_flipped.png" 
              width={180}
              height={200}
              className="relative h-full mr-40"/>

              <Image 
              alt="img" 
              src="/images/2c_flipped.png" 
              width={180}
              height={200}
              className="relative h-full ml-40"/>

          </motion.div>  


          <motion.div 
          // reversed
          animate={{
            x: [1400, 1200, 1000, 800, 600, 400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1450],
            y: [0, 30, 0, 40, 0, 30, 0, 30, 0, 30, 35, 0, 40, 10, 40]
          }}
          transition={{
              duration: 12,
              ease: 'linear',
              repeat: Infinity,
              repeatDelay:5
              
          }}
          className="absolute flex flex-row place-content-evenly top-96 w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/4c_flipped.png" 
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
              duration: 10,
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

          // Extra // 

          <motion.div 
          // reversed
          animate={{
            x: [1400, 1200, 1000, 800, 600, 400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1450],
            y: [0, 30, 0, 40, 0, 30, 0, 30, 0, 30, 35, 0, 40, 10, 40]
          }}
          transition={{
              duration: 12,
              ease: 'linear',
              repeat: Infinity,
              delay:8,
              repeatDelay:5
              
          }}
          className="absolute flex flex-row place-content-evenly top-96 w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/4c_flipped.png" 
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
          // ---------> 3 //
          animate={{
            x: [-2000,-1900,-1800, -1700, -1600,-1500,-1400, -1200, -1000, -800, -600, -400, -200, 0, 200, 400, 600, 800, 1000, 1200, 1400],
            y: [0, 40, 0, 30, -20, 30, 0, -20, 0, 40, -10, 30, 0, 30, 20, 25, 10, 0, 15, 30, 35]
          }}
          transition={{
              duration: 12,
              ease: 'linear',
              repeat: Infinity,
              delay:3
              
          }}
          className="absolute flex flex-row place-content-around top-96 w-full h-[35vh]">

              <Image 
              alt="img" 
              src="/images/8c.png" 
              width={180}
              height={200}

              />
              <Image 
              alt="img" 
              src="/images/2c.png" 
              width={180}
              height={200}
              className='mx-60'

              />
              <Image 
              alt="img" 
              src="/images/7c.png" 
              width={180}
              height={200}
              />
          </motion.div>

          <motion.div 
          // <---------- 2
          animate={{
            x: [1400, 1200, 1000, 800, 600, 400, 200, 0, -200, -400, -600, -800, -1000, -1200, -1400, -1450],
            y: [0, 20, 0, 30, -10, 30, 0, 30, -10, 30, 35, 0, 30, 10, 30]
          }}
          transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              delay:2,
              repeatDelay:3
          }}
          className="absolute flex flex-row place-content-evenly top-96 w-full h-[35vh] ">
              <Image 
              alt="img" 
              src="/images/9c_flipped.png" 
              width={180}
              height={200}
              className="relative h-full mr-40"/>

              <Image 
              alt="img" 
              src="/images/2c_flipped.png" 
              width={180}
              height={200}
              className="relative h-full ml-40"/>

          </motion.div>  


          </div>



        </div>
    );
};

export default Three;
