
import Head from 'next/head'
import Sticky from '@/components/sticky-section/StickySection'
import FooterSection from '@/components/Footer/FooterSection'
import FlowerSection from '@/components/FlowerSection/FlowerSection'
import HowItWorks2 from '@/components/HowItWorks2/HowItWorks2'
// import { HorizontalText } from '@/components/horizontal-Text/horizontal-Text'
import Blank2 from '@/components/Blank/Blank2'
// import SvgSection from '@/components/FlowerSection/SvgSection'
import AnimatedSVG from '@/components/Line/AnimatedSVG'









const index = () => {
  return (
    <>
      <Head>
          <title>PORT</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main className='min-h-screen w-[100%]  cursor-none'>


          <Sticky />
          <AnimatedSVG />
      
          
          {/* <SideInView /> */}
          <Blank2 />
          <FlowerSection />

          {/* <HorizontalText /> */}
          <HowItWorks2 />

          {/* <AboutMe /> */}


          {/* <RibbonMarquee2 /> */}
 
          <FooterSection /> 
      </main>
    </>
  )
}

export default index