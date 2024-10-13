import React from 'react';
import { Group } from '../AnimatedGroup/Group';
import { useRef } from 'react';
import { useInView } from 'framer-motion';



const items = [
    { id: 1, src: '/images/logo/3.png', alt: 'Strava logo', text: 'C++' },
    { id: 2, src: '/images/logo/10.png', alt: 'Nintendo logo', text: 'HTML 5' },
    { id: 3, src: '/images/logo/5.png', alt: 'Apple Music logo', text: 'TypeScript' },
    { id: 4, src: '/images/logo/6.png', alt: 'Chrome logo', text: 'Java' },
    { id: 5, src: '/images/logo/7.png', alt: 'Strava logo', text: 'JavaScript' },
    { id: 6, src: '/images/logo/mysql.svg', alt: 'Strava logo', text: 'SQL-database' },




];

    const Lan = () => {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { 
          once: true, 
       
        });
        return (
        <div ref={sectionRef} className="mt-28">
            {/* Section 1: Languages */}


            <div  className="flex flex-col justify-center items-center" >
            <h1 className="my-14 text-4xl font-bold text-[#efefef]">Languages</h1>
            {isInView &&<Group items={items}  />} 
            </div>
  

        </div>
        );
    };
    
    export default Lan;