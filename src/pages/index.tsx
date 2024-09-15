import React from 'react'
import Marquee from '@/components/Marquee/Marquee'
import Card from '@/components/Card/Card'
import Head from 'next/head'
import  { RevealText }  from '@/components/RevealText/RevealText'
import Sticky from '@/components/sticky-section/StickySection'
import FooterSection from '@/components/Footer/FooterSection'
import { HorizontalText } from '@/components/horizontal-Text/horizontal-Text'
import { RibbonMarquee2 } from '@/components/RibbonMarquee2/RibbonMarquee2'
import PerspectiveSection1 from '@/components/PerspectiveSection/PerspectiveSection1'
import PerspectiveSection2 from '@/components/PerspectiveSection/PerspectiveSection2'
import Stack from '@/components/StackCard2/Stack'
import Bubble from '@/components/Bubble/Bubble'
// import Contact from '@/components/Contact/Contact'
import CircleCards from '@/components/CircleCards/CircleCards'
import Test from '@/components/Test/Test'


















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
      <Card />   
      <Test /> 
      <RevealText /> 

      {/* 
      <Services2 />
      <C1 />
      <C2 />
      <C3 />  
      <Contact />
      */}

      <Stack />
      <Bubble /> 
      <CircleCards />
      <PerspectiveSection1 />
      <HorizontalText />
      <RibbonMarquee2 />
      <PerspectiveSection2 />
      <Marquee />
      <FooterSection />
    </main>
    </>
  )
}

export default index