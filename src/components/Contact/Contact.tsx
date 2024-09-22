import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Form from "./From";




const Contact: React.FC = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div className="h-auto w-full">

      <div className="text-white ">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" mt-24 max-h-28w-[100vw] flex flex-row place-content-center">
              <div className="flex basis-[38%] text-start text-xl text-[#868689] font-medium">
                CONTACT
              </div>
              <div className="relative flex basis-[51%]  flex-col gap-14 text-start content-between " >
                  <h1 className="text-[2rem] mb-6 flex">
                    Okay, we’ve shown (almost) everything.
                    <br />
                    Are you ready to chat about a new partnership?
                  </h1>
                  <p className="text-xl font-medium mb-10 text-[#868689]">
                    Fill out the form below or send us an email at
                    <br />
                    <motion.a href="mailto:hollaholla@gmail.com" className="underline text-white mr-1 "
                    initial={{ color: 'white' }} 
                    transition={{ duration: 0.5, ease:'linear' }}  
                    whileHover={{ color: '#868689' }} 
                    
                    >
                      Hollaholla@gmail.com
                    </motion.a>
                    to set up an introductory call.
                  </p>
              </div>
            </motion.div>
      </div>



      <motion.h1 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative flex text-7xl mx-14 mb-20 mt-36 ">
        Lets get started...
      </motion.h1>

      <Form />
      
      <div className="my-20 py-28 max-h-28w-[100vw] flex flex-row place-content-center bg-[#0c0e15]">
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={controls}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex basis-[38%] text-start text-7xl text-[#ffffff]"
        >
          What to 
          <br />
          hear us talk?
        </motion.div>

              <div className="relative flex basis-[51%]  flex-col gap-14 text-start content-between text-" >
                  <h1 className="text-2xl mb-6 flex text-[#969aa3]">
                  We not only excel in creating exceptional designs, but we are also deeply engaged in the global design community. 
                  </h1>

                  <h1 className="text-2xl mb-6 flex text-[#969aa3]">
                  We welcome opportunities to speak at your next event or to join panels on topics such as business, branding, design, or culture.
                  </h1>

                  <h1 className="text-2xl font-medium mb-10 text-[#969aa3]">
                  Send us an email at
                    <br />
                    <motion.a href="mailto:hollaholla@gmail.com" className="underlin "
                    initial={{ color: 'white' }}  
                    whileHover={{ color: '#969aa3' }} 
                    transition={{ duration: 0.5, ease:'linear' }} 
                    >
                      Hollaholla@gmail.com
                    </motion.a>
                  </h1>

              </div>
        </div>

    </div>
  );
};

export default Contact;