import React from 'react';
import { Group } from '../AnimatedGroup/Group';
import { useRef } from 'react';
import { useInView } from 'framer-motion';



const itemsTools = [
  { id: 1, src: '/images/logo/2.png', alt: 'Chrome logo', text: 'ReactJs' },
  { id: 2, src: '/images/logo/8.png', alt: 'Nintendo logo', text: 'Scss' },
  { id: 3, src: '/images/logo/bootstrap.svg', alt: 'Apple Music logo', text: 'Bootstrap' },
  { id: 4, src: '/images/logo/9.png', alt: 'Nintendo logo', text: 'Tailwind' },
  { id: 5, src: '/images/logo/css3.svg', alt: 'Apple Music logo', text: 'CSS3' },
  { id: 6, src: '/images/logo/nextjs.svg', alt: 'Chrome logo', text: 'NextJs' },
  { id: 7, src: '/images/logo/framer-motion.svg', alt: 'Strava logo', text: 'Framer-motion' },
];

    const Frame = () => {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { 
          once: true, 
       
        });
        return (
        <div ref={sectionRef} className="mt-28">
            {/* Section 1: Languages */}

            <div  className="flex flex-col justify-center items-center" >
            <h1 className="my-14 text-4xl font-bold text-[#efefef]">Libraries & Frameworks</h1>
            {isInView &&<Group items={itemsTools}  />} 
            </div>
    


        </div>
        );
    };
    
    export default Frame;