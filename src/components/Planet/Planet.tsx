import React from 'react';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Planet/Scene'), { ssr: false });

const Hologram = () => {
    return (
        <section className=" h-screen w-full bg-black mix-blend-difference flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl text-white-300 font-black text-center p-5 sm:p-10">
                SED CONDIMENTUM MUS AUGUE LUCTUS
            </h1>
            <div 
                className="pt-8 sm:pt-20 w-full max-w-[600px] text-lg sm:text-xl text-center p-5 sm:p-10 text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, ipsa quae abeaque ipsa quae ab illo ipsa quae abeaque inventore veritatis.
            </div>
            <div className="absolute inset-0">
                <Scene />
            
            </div>
        </section>
    );
};

export default Hologram