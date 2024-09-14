import React from 'react'
import Footer from './Footer'

const FooterSection = () => {
  return (
    <div 
      className='relative min-h-screen '
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 min-h-screen w-full'>
          <Footer />
      </div>
    </div>
  )
}

export default FooterSection