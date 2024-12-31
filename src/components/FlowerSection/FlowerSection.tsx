import React from 'react';


const FlowerSection = () => {
  return (
    <section className="cursor-none">
      <div className="relative h-screen  flex flex-col lg:md:flex-row mx-20">


        {/* Background Image */}
        <div
          style={{
            // backgroundImage: 'url(/images/2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="absolute xl:lg:border border-dashed border-[#053bff4e] w-[70%] xl:lg:h-[40%] md:h-[40vh] h-[40vh] rounded-lg"
        ></div>

        {/* Heading Text */}
        <div
          className={`relative flex flex-col text-nowrap font-bold font-day lg:md:w-[100%] w-[80%] h-full lg:text-8xl md:text-7xl text-3xl text-[#e1dbe0] mix-blend-hard-light z-40`}
        >
          <span>BRINGING</span>
          <span>YOUR</span>
          <span>VISION TO LIFE</span>
        </div>

        {/* Description Text */}
        <div className="relative lg:md:w-[1/2%] w-full h-full p-5 mt-10 pb-32 font-thin text-end xl:lg:text-2xl md:text-lg text-sm text-slate-400 place-content-end z-20 overflow-visible">
          I create dynamic, interactive websites using Framer Motion animations
          and a focus on web performance. <br />
          If you’re ready for a website that vibes with your vision and sets you
          apart, lets make some magic happen...!
        </div>
      </div>
    </section>
  );
};

export default FlowerSection;
