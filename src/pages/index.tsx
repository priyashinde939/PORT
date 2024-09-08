import React from 'react'
import Marquee from '@/components/Marquee/Marquee'
import Cards from '@/components/Card/Cards'
import Head from 'next/head'
import  { RevealText }  from '@/components/RevealText/RevealText'
import Sticky from '@/components/sticky-section/StickySection'
import Test2 from '@/components/Marquee/Test2'
import GridItems from '@/components/Grid/GridItems'
import Section3D from '@/components/Section3D/Section3D'
import Section3D1 from '@/components/Section3D/Section3D1'
import Section1 from '@/components/Section1/Section1'
import FooterSection from '@/components/Footer/FooterSection'
import Contact from '@/components/Contact/Contact'
import VerticalMarquee from '@/components/Marquee/VerticalMarquee'
import AnimatedGrid from '@/components/services/AnimatedGrid'
import Services from '@/components/services/Services'
import ExpandableGrid from '@/components/services/Services'
import { HorizontalMarquee } from '@/components/horizontal-marquee/HorizontalMarquee'
import { RibbonMarquee } from '@/components/RibbonMarquee.tsx/RibbonMarquee'













const index = () => {
  return (
    <>
    <Head>
        <title>Hola</title>
        <meta
          name="description"
          content="Welcome to our hola hola Community"
        />
    </Head>

    <main className='min-h-screen w-full '>
      <Sticky />
      {/* <AnimatedGrid />
      <ExpandableGrid /> */}

      <Cards />
      <Marquee />
      <RevealText /> 
      {/* <VerticalMarquee /> */}
      {/* <GridItems /> */}
      <HorizontalMarquee />
      <RibbonMarquee />
      {/* <Test2 /> */}
      <Section3D />
      <Section1 />
      <Section3D1 />
      <Contact />
      <FooterSection />

    </main>
    </>
  )
}

export default index