import React from 'react'
import Marquee from './Marquee'

function SkillMarquees() {

    const skills = [
        [
           'React',
           'NextJs',      
           'Tailwind',      
           'Scss',      
           'Bootstrap',     
           'Typescript',     
           'JavaScript',     
           'Java',      
           'C++',
           'VsCode'
        ],
        [
          'React',
          'NextJs',      
          'Tailwind',      
          'Scss',      
          'Bootstrap',     
          'Typescript',     
          'JavaScript',     
          'Java',      
          'C++',
          'VsCode'     
        ]
    ]

  return (
    <div className='py-[18vw] sm:py-[8vw] sm:mt-[2vw]'>
      {skills.map((item, index) => 
        <Marquee key={index} skills={item} direction={index === 0 ? "left": "right"} />
      )}
    </div>
  )
}

export default SkillMarquees