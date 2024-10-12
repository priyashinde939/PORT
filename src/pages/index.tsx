import React from 'react'
// import  Curve from "@/common/Curve";
import Marquee from '@/components/Marquee/Marquee'
import Head from 'next/head'
import  { RevealText }  from '@/components/RevealText/RevealText'
import Sticky from '@/components/sticky-section/StickySection'
import FooterSection from '@/components/Footer/FooterSection'
import { HorizontalText } from '@/components/horizontal-Text/horizontal-Text'
import { RibbonMarquee2 } from '@/components/RibbonMarquee2/RibbonMarquee2'

import Contact from '@/components/Contact/Contact'
import { RibbonMarquee } from '@/components/RibbonMarquee/RibbonMarquee'
import Blank from '@/components/Blank/Blank'

import SectionTransition from '@/components/SectionTransition/SectionTransition'
import FlowerSection from '@/components/FlowerSection/FlowerSection'
import HowItWorks2 from '@/components/HowItWorks2/HowItWorks2'
import { InViewBasicMultiple } from '@/components/SideInView/SideInView'
import { SkillAccordion } from '@/components/Accordion/SkillAccordion'
import AboutMe from '@/components/AboutMe/AboutMe'




















const index = () => {
  return (
    <>
          {/* <Curve backgroundColor={"#000"}> */}
    <Head>
        <title>Hola</title>
        <meta
          name="PortFolio"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>

    <main className='min-h-screen w-[100%]  cursor-none'>

      <Sticky />
 
      {/* <Blank /> */}

      {/* <HowItWorks /> */}
      <InViewBasicMultiple />
      <AboutMe />
      <SkillAccordion />
  
      <FlowerSection />

      <HowItWorks2 />

      {/* <Blank /> */}
      <Blank />
      <SectionTransition />

      
      {/* <Clump /> */}

      {/* <RibbonMarquee /> */}
      {/* <Card /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Marquee /> */}

      {/* <Bubble />
      
      <PerspectiveSection2 /> 
            <PerspectiveSection1 />
            <Marquee />  
      <HorizontalText />




      */}
      <FooterSection /> 

    </main>
    {/* </Curve> */}
    </>
  )
}

export default index