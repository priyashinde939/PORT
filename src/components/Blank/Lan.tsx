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



    { id: 1, src: '/images/logo/2.png', alt: 'Chrome logo', text: 'ReactJs' },
    { id: 2, src: '/images/logo/8.png', alt: 'Nintendo logo', text: 'Scss' },
    // { id: 3, src: '/images/logo/bootstrap.svg', alt: 'Apple Music logo', text: 'Bootstrap' },
    { id: 4, src: '/images/logo/9.png', alt: 'Nintendo logo', text: 'Tailwind' },
    { id: 5, src: '/images/logo/css3.svg', alt: 'Apple Music logo', text: 'CSS3' },
    { id: 6, src: '/images/logo/nextjs.svg', alt: 'Chrome logo', text: 'NextJs' },
    { id: 7, src: '/images/logo/framer-motion.svg', alt: 'Strava logo', text: 'Framer-motion' },

    // { id: 1, src: '/images/logo/1.png', alt: 'Apple Music logo', text: 'VSCode' },
    // { id: 2, src: '/images/logo/github1.svg', alt: 'Chrome logo', text: 'GitHub' },
    // { id: 3, src: '/images/logo/android-studio.svg', alt: 'Chrome logo', text: 'Android-Studio' },
    // { id: 4, src: '/images/logo/git.svg', alt: 'Chrome logo', text: 'Git' },
    // { id: 5, src: '/images/logo/npm.svg', alt: 'Chrome logo', text: 'NPM' },
    // { id: 6, src: '/images/logo/ps.svg', alt: 'Chrome logo', text: 'Adobe Photoshop' },


];

    const Lan = () => {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { 
          once: true, 
       
        });
        return (
        <div ref={sectionRef} >
            {/* Section 1: Languages */}


            <div  className="flex flex-col justify-center items-center" >
            {/* <h1 className="my-14 text-4xl font-bold text-[#efefef]">Languages</h1> */}
            {isInView &&<Group items={items}  />} 
            </div>
  

        </div>
        );
    };
    
    export default Lan;