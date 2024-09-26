import Products from './Projects'
import React from 'react'
import {motion} from 'framer-motion'

const Index= () => {
  return (
    <main className='w-full min-h-[100vh] relative overflow-hidden'>

       <div className="text-white ">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className=" mt-40 max-h-28w-[100vw] flex flex-row place-content-center">
              <div className="flex basis-[38%] text-start text-5xl text-[#868689] font-medium">
                Recent Works
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
                    <motion.a href="priya.shinde9390@gmail.com" className="underline text-white mr-1 "
                    initial={{ color: 'white' }} 
                    transition={{ duration: 0.5, ease:'linear' }}  
                    whileHover={{ color: '#868689' }} 
                    
                    >
                      priya.shinde9390@gmail.com
                    </motion.a>
                    to set up an introductory call.
                  </p>
              </div>
            </motion.div>
            </div>

    {/* Project Section */}
    <Products />
    
    <div className="h-screen bg-black">
    </div>
    </main>
  )
}

export default Index