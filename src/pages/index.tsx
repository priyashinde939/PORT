import React from 'react'
import Marquee from '@/components/Marquee/Marquee'
import Card from '@/components/Card/Card'
import Head from 'next/head'
import  { RevealText }  from '@/components/RevealText/RevealText'
import Sticky from '@/components/sticky-section/StickySection'
import FooterSection from '@/components/Footer/FooterSection'
import Contact from '@/components/Contact/Contact'
import { HorizontalText } from '@/components/horizontal-Text/horizontal-Text'
import { RibbonMarquee2 } from '@/components/RibbonMarquee2/RibbonMarquee2'
import PerspectiveSection1 from '@/components/PerspectiveSection/PerspectiveSection1'
import PerspectiveSection2 from '@/components/PerspectiveSection/PerspectiveSection2'
import Services from '@/components/Services/Services'
import Services2 from '@/components/Services/Services2'














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
      <RevealText /> 
      <Services />
      <Services2 />-
      <PerspectiveSection1 />
      <HorizontalText />
      <RibbonMarquee2 />
      <PerspectiveSection2 />
      <Marquee />
      <Contact />
      <FooterSection />
    </main>
    </>
  )
}

export default index