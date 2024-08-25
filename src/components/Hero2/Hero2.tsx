import React from 'react'
import Slide from '../ANIMATION/One'

const Hero2 = () => {
    const items = ['jsajnandka', 'sbhbsjfaf']
  return (
    <div className="relative flex h-auto items-center justify-center ">
        {items.map((item,i) => (
            <Slide key={i} text={item} index={i} />
        ))}
    </div>
  )
}

export default Hero2


