import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'

const Section1 = () => {
  return (
<section className="mx-16 mt-44">
    <h1
    className="text-6xl font-red_hat w-[50%] ">
        SHAPING NEW THOUGHTS AND IDEAS
    </h1>
<div className="relative h-[100vh] flex flex-row my-32 gap-9">

<div className=" group relative flex flex-col basis-1/4  ">
    <div className="relative flex h-[40%]">
    <Image
        src="/images/awards.jpg"
        width={500}
        height={500}
        alt="img"
        className='relative overflow-hidden '
        />
    </div>
    <span className="relative border w-fit content-start font-semibold -scale-x-100 group-hover:scale-x-100 rounded-3xl mt-5 px-3 hover:bg-white hover:text-black ">
        CONTACT
    </span>
    <div className="text-2xl my-2 font-sans ">
        WEVE BEEN SHORTLISTED AS THE MARRIAGE THOUGHT PROVOKING STORIES 
    </div>
    <p className="text-slate-500">
    WEVE BEEN SHORTLISTED AS THE MARRI AGE THOU GHT PROV OKING STOR IES 
    </p>
</div>

<div className="group flex flex-col basis-3/4 ">
<div className="relative flex h-[60%]">
    <Image
        src="/images/mid.jpg"
        width={900}
        height={900}
        alt="img"
        className='relative overflow-hidden '
        />
    </div>
    <span className="relative border w-fit content-start font-semibold rounded-3xl my-5 px-3 hover:bg-white hover:text-black -scale-x-100 group-hover:scale-x-100 ">
        DESIGN
    </span>
    <div className="text-2xl my-2 font-sans ">
        WEVE BEEN SHORTLISTED AS THE MARRIAGE THOUGHT PROVOKING STORIES 
    </div>
    <p className="text-slate-500">
    WEVE BEEN SHORTLISTED AS THE MARRI AGE THOU GHT PROV OKING STOR IES 
    </p>
</div>

<div className="group relative flex flex-col basis-1/4  ">
    <div className="relative flex h-[40%]">
    <Image
        src="/images/awards.jpg"
        width={500}
        height={500}
        alt="img"
        className='relative overflow-hidden '
        />
    </div>
    <span className="relative border w-fit content-start font-semibold rounded-3xl my-5 px-3 hover:bg-white hover:text-black -scale-x-100 group-hover:scale-x-100 ">
        SEE MORE
    </span>
    <div className="text-2xl my-2 font-sans ">
        WEVE BEEN SHORTLISTED AS THE MARRIAGE THOUGHT PROVOKING STORIES 
    </div>
    <p className="text-slate-500">
    WEVE BEEN SHORTLISTED AS THE MARRI AGE THOU GHT PROV OKING STOR IES 
    </p>
</div>

</div>

</section>
  )
}

export default Section1