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
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto-10 z-10">
    <Image alt="img" src="/images/L/glow_l.png" width={260} height={80} className="relative h-full mx-10"/>
</motion.div> 


<motion.div 
// glow  <-------
animate={{
    x: ['420%','400%','380%','360%','340%','320%','300%','280%','260%','240%','220%','200%', '180%', '160%', '140%', '120%', '100%', '80%', '60%', '40%', '20%', '0%','-20%','-40%','-60%','-80%','-90%','-100%'],
    y: [0, 30, -10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
    delay:6,
    repeatDelay:6
    }}
className="absolute flex flex-row place-content-evenly bottom-0 w-full h-auto-10 z-20">
    <Image alt="img" src="/images/L/glow_l.png" width={260} height={80} className="relative h-full mx-10"/>
</motion.div> 
        
{/* <motion.div 
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
    <Image alt="img" src="/images/R/glow_r.png" width={260} height={80} className="relative h-full mx-10"/>
</motion.div>    */}


<motion.div
//------->
    animate={{
    x: ['-420%','-400%','-380%','-360%','-340%','-320%','-300%','-280%','-260%','-240%','-220%','-200%', '-180%', '-160%', '-140%', '-120%', '-100%', '-80%', '-60%', '-40%', '-20%', '0%','20%','40%','60%','80%','90%','100%'],
    y: [10, 30, -10, 0, 20, 0, 20, 0, 0, 20, 0, 20, 0, 30, 0, 20, 0, 30, 0, 30, -10, 30, 0, 10, 30, 0, 20, 30]
    }}
    transition={{
    duration: 20,
    ease: 'linear',
    repeat: Infinity,
    }}
    className="absolute flex justify-around bottom-0 w-full">
        <Image alt="img" src="/images/R/30r.png" width={180} height={200} />
        <Image alt="img" src="/images/R/25r.png" width={180} height={200} className="mx-60" />
        <Image alt="img" src="/images/R/1r.png" width={180} height={200} />
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
    <Image alt="img" src="/images/R/4r.png" width={180} height={200} className="relative h-full mx-10 "/>
    <Image alt="img" src="/images/R/5r.png" width={180} height={200} className="relative h-full mx-10"/>
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
    <Image alt="img" src="/images/L/1l.png" width={180} height={200}/>
    <Image alt="img" src="/images/L/30l.png" width={180} height={200}/>
</motion.div> 


<motion.div 
// <---------- 
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
    <Image alt="img" src="/images/L/15l.png" width={180} height={200} className="relative h-full mr-40"/>
    <Image alt="img" src="/images/L/4l.png" width={180} height={200} className="relative h-full ml-40"/>
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
    <Image alt="img" src="/images/L/28l.png" width={180} height={200}/>
    <Image alt="img" src="/images/L/6l.png" width={180} height={200}/>
    <Image alt="img" src="/images/L/7l.png" width={180} height={200}/>
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
    <Image alt="img" src="/images/L/8l.png" width={250} height={180}/>
    <Image alt="img" src="/images/L/27l.png" width={180} height={200}/>
    <Image alt="img" src="/images/L/10l.png" width={180} height={200}/>
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
    <Image alt="img" src="/images/R/6r.png" width={180} height={200} className="relative h-full mx-10"/>
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
    <Image alt="img" src="/images/L/11l.png" width={180} height={200}/>
    <Image alt="img" src="/images/L/26l.png" width={180} height={200}/>
    <Image alt="img" src="/images/L/13l.png" width={180} height={200}/>
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

    <Image alt="img" src="/images/R/7r.png" width={180} height={200}/>
    <Image alt="img" src="/images/R/8r.png" width={180} height={200} className='mx-60'/>
    <Image alt="img" src="/images/R/9r.png" width={180} height={200}/>
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
className="absolute flex flex-row place-content-around bottom-0 w-full h-auto ">

    <Image alt="img" src="/images/R/10r.png" width={180} height={200}/>
    <Image alt="img" src="/images/R/11r.png" width={180} height={200} className='mx-60'/>
    <Image alt="img" src="/images/R/12r.png" width={180} height={200}/>
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

    <Image alt="img" src="/images/R/13r.png" width={180} height={200}/>
    <Image alt="img" src="/images/R/14r.png" width={180} height={200} className='mx-60'/>
    <Image alt="img" src="/images/R/15r.png" width={180} height={200}/>
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
    <Image alt="img" src="/images/L/14l.png" width={180} height={200} className="relative h-full mr-40"/>
    <Image alt="img" src="/images/L/25l.png" width={180} height={200} className="relative h-full ml-40"/>
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
        <Image alt="img" src="/images/R/16r.png" width={250} height={180} />
        <Image alt="img" src="/images/R/17r.png" width={180} height={200} className="mx-60" />
        <Image alt="img" src="/images/R/18r.png" width={180} height={200} />
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
        <Image alt="img" src="/images/R/19r.png" width={180} height={200} />
        <Image alt="img" src="/images/R/20r.png" width={180} height={200} className="mx-60" />
        <Image alt="img" src="/images/R/21r.png" width={180} height={200} />
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
    <Image alt="img" src="/images/L/23l.png" width={180} height={200}/>
    <Image alt="img" src="/images/L/17l.png" width={180} height={200}/>
    <Image alt="img" src="/images/L/18l.png" width={180} height={200}/>
</motion.div>

        </div>
    );
};

export default Three;
