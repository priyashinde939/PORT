import { motion } from 'framer-motion';
import Image from 'next/image'

const Three: React.FC = () => {
return (
    <div className="relative h-[100vh] bg-white overscroll-x-none overflow-hidden rounded-[4rem] inset-0">

        <div className="absolute h-full w-full text-black text-left text-8xl m-10 p-10 font-extrabold flex flex-col gap-12">
            <h1>I help you</h1>
            <h1>shine in a crowded </h1>
            <h1>market.</h1>
        </div>


<motion.div 
// glow  <-------
animate={{
    x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
    delay:0,
    repeatDelay:6
    }}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto-10">
    <Image alt="img" src="/images/glow_l.png" width={260} height={80} className="relative h-full mx-10"/>
</motion.div> 

        
<motion.div 
// glow  ------->
animate={{
    x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
    delay:5,
    repeatDelay:6
    }}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto z-10">
    <Image alt="img" src="/images/glow_r.png" width={260} height={80} className="relative h-full mx-10"/>
</motion.div>   


<motion.div
//------->
    animate={{
    x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
    transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
    }}
    className="absolute flex justify-around bottom-0 w-full ">
        <Image alt="img" src="/images/8c.png" width={180} height={200} />
        <Image alt="img" src="/images/2c.png" width={180} height={200} className="mx-60" />
        <Image alt="img" src="/images/7c.png" width={180} height={200} />
</motion.div>


<motion.div 
// --------> 
animate={{
x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
y: [10, -20, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
}}
transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
    delay:6
}}
className="absolute flex flex-row place-content-around bottom-0 w-full h-auto ">
    <Image alt="img" src="/images/5c.png" width={240} height={200} className="relative h-full mx-10 "/>
    <Image alt="img" src="/images/4c.png" width={180} height={200} className="relative h-full mx-10"/>
</motion.div> 



<motion.div 
// <--------
animate={{
    x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
    delay:5,
    repeatDelay:5
}}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto ">
    <Image alt="img" src="/images/3c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/4c_flipped.png" width={180} height={200}/>
</motion.div> 


<motion.div 
// <---------- 2
animate={{
x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
}}
transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
    repeatDelay:2
}}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto">
    <Image alt="img" src="/images/9c_flipped.png" width={180} height={200} className="relative h-full mr-40"/>
    <Image alt="img" src="/images/2c_flipped.png" width={180} height={200} className="relative h-full ml-40"/>
</motion.div>  


<motion.div 
// <---------- 
animate={{
    x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 22,
    ease: 'linear',
    repeat: Infinity,
    repeatDelay:5
    
}}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto">
    <Image alt="img" src="/images/4c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/3c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/9c_flipped.png" width={180} height={200}/>
</motion.div>

<motion.div 
// <---------- 
animate={{
    x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 22,
    delay:6,
    ease: 'linear',
    repeat: Infinity,
    
}}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto">
    <Image alt="img" src="/images/4c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/3c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/9c_flipped.png" width={180} height={200}/>
</motion.div>
        
<motion.div 
// ---------->
animate={{
x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
y: [10, -20, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
}}
transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity
}}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto">
    <Image alt="img" src="/images/9c.png" width={180} height={200} className="relative h-full mx-10"/>
</motion.div> 


<motion.div 
// <---------- 
animate={{
    x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 22,
    ease: 'linear',
    repeat: Infinity,
    delay:8,
    repeatDelay:5   
    }}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto">
    <Image alt="img" src="/images/4c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/3c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/9c_flipped.png" width={180} height={200}/>
</motion.div>


<motion.div 
// ---------> 
animate={{
    x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
    y: [10, -20, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 22,
    ease: 'linear',
    repeat: Infinity,
    delay:3  
    }}
className="absolute flex flex-row place-content-around bottom-0 w-full h-auto">

    <Image alt="img" src="/images/8c.png" width={180} height={200}/>
    <Image alt="img" src="/images/2c.png" width={180} height={200} className='mx-60'/>
    <Image alt="img" src="/images/7c.png" width={180} height={200}/>
</motion.div>

<motion.div 
// ---------> 
animate={{
    x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
    y: [10, -20, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 22,
    ease: 'linear',
    repeat: Infinity,
    delay:5  
    }}
className="absolute flex flex-row place-content-around bottom-0 w-full h-auto">

    <Image alt="img" src="/images/8c.png" width={180} height={200}/>
    <Image alt="img" src="/images/2c.png" width={180} height={200} className='mx-60'/>
    <Image alt="img" src="/images/7c.png" width={180} height={200}/>
</motion.div>

<motion.div 
// ---------> 
animate={{
    x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
    y: [10, -20, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 28,
    ease: 'linear',
    repeat: Infinity,
    delay:6  
    }}
className="absolute flex flex-row place-content-around bottom-0 w-full h-auto">

    <Image alt="img" src="/images/8c.png" width={180} height={200}/>
    <Image alt="img" src="/images/2c.png" width={180} height={200} className='mx-60'/>
    <Image alt="img" src="/images/7c.png" width={180} height={200}/>
</motion.div>

<motion.div 
// <---------- 
animate={{
    x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 25,
    ease: 'linear',
    repeat: Infinity,
    delay:2,
    repeatDelay:3
    }}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto ">
    <Image alt="img" src="/images/9c_flipped.png" width={180} height={200} className="relative h-full mr-40"/>
    <Image alt="img" src="/images/2c_flipped.png" width={180} height={200} className="relative h-full ml-40"/>
</motion.div>

<motion.div
//------->
    animate={{
    x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
    transition={{
    duration: 23,
    delay:7,
    ease: 'linear',
    repeat: Infinity,
    }}
    className="absolute flex justify-around bottom-0 w-full">
        <Image alt="img" src="/images/8c.png" width={180} height={200} />
        <Image alt="img" src="/images/2c.png" width={180} height={200} className="mx-60" />
        <Image alt="img" src="/images/7c.png" width={180} height={200} />
</motion.div>

<motion.div
//------->
    animate={{
    x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
    transition={{
    duration: 25,
    delay:10,
    ease: 'linear',
    repeat: Infinity,
    }}
    className="absolute flex justify-around bottom-0 w-full">
        <Image alt="img" src="/images/8c.png" width={180} height={200} />
        <Image alt="img" src="/images/2c.png" width={180} height={200} className="mx-60" />
        <Image alt="img" src="/images/7c.png" width={180} height={200} />
</motion.div>

<motion.div 
// <---------- 
animate={{
    x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
    y: [10, 40, 10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 25,
    ease: 'linear',
    repeat: Infinity,
    delay:12,
    repeatDelay:5   
    }}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto">
    <Image alt="img" src="/images/4c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/3c_flipped.png" width={180} height={200}/>
    <Image alt="img" src="/images/9c_flipped.png" width={180} height={200}/>
</motion.div>

        </div>
    );
};

export default Three;
