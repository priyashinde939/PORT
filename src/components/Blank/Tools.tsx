import React from 'react';
import { Group } from '../AnimatedGroup/Group';
import { useRef } from 'react';
import { useInView } from 'framer-motion';



const items = [
    { id: 1, src: '/images/logo/1.png', alt: 'Apple Music logo', text: 'VSCode' },
    { id: 2, src: '/images/logo/github1.svg', alt: 'Chrome logo', text: 'GitHub' },
    { id: 3, src: '/images/logo/android-studio.svg', alt: 'Chrome logo', text: 'Android-Studio' },
    { id: 4, src: '/images/logo/git.svg', alt: 'Chrome logo', text: 'Git' },
    { id: 5, src: '/images/logo/npm.svg', alt: 'Chrome logo', text: 'NPM' },
    { id: 6, src: '/images/logo/ps.svg', alt: 'Chrome logo', text: 'Adobe Photoshop' },

];

    const Tools = () => {
        const sectionRef = useRef(null);
        const isInView = useInView(sectionRef, { 
          once: true, 
       
        });
        return (
        <div ref={sectionRef} className="mt-28">
            {/* Section 1: Toolsguages */}


            <div  className="flex flex-col justify-center items-center" >
            <h1 className="my-14 text-4xl font-bold text-[#efefef]">Tools</h1>
            {isInView &&<Group items={items}  />} 
            </div>


        </div>
        );
    };
    
    export default Tools;