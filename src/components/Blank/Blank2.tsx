import React from 'react'
import Lan from './Lan'
import Frame from './Frame'
import Tools from './Tools'

const Blank2 = () => {
  return (
   <section >
            <div
        className="w-full cursor-none px-60 text-start text-6xl font-medium my-[10rem]">
       Languages and Frame works
        </div>
          <Lan />
          <div className="w-full h-[50vh] "/>
          {/* <Frame />
          <Tools /> */}
   </section>
  )
}

export default Blank2