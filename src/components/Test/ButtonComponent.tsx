import React from 'react'
import  { RevealLinks } from './AnimatedButton'

const ButtonComponent = () => {
    const handleClick = () => {
        alert("Button clicked!");
      };
  return (
        <div className="flex justify-center items-center h-screen bg-black">
      

      <RevealLinks
  links={[
    { href: "#", label: "Twitter" }
  ]}
  textColor="text-white"
  duration={0.3}
  stagger={0.05}
  textSize="text-5xl sm:text-8xl"
/>


    </div>
  )
}

export default ButtonComponent

