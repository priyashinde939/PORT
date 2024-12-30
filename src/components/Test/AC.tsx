import React from 'react'
import { FlipButton} from './AB'

const AC = () => {
    const handleClick = () => {
        alert("Button clicked!");
      };
  return (
    <div className="h-screen flex items-center justify-center bg-slate-900">
    <FlipButton onClick={() => alert("Clicked!")} className="text-white">
      Hover Me
    </FlipButton>
  </div>
  )
}

export default AC