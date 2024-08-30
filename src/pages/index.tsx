import React from 'react'
import Marquee from '@/components/Marquee/Marquee'
// import Text_Mask from '@/components/Text/Text_Mask'
// import Line from '@/components/Line/Line'
import Cards from '@/components/Card/Cards'
import Head from 'next/head'
import  Hero  from '@/components/Hero/Hero'
import Sticky from '@/components/sticky-section/StickySection'
import Test from '@/components/Marquee/Test'
import Test2 from '@/components/Marquee/Test2'
import GridItems from '@/components/Grid/GridItems'
import Section3D from '@/components/Section3D/Section3D'
import Section3D1 from '@/components/Section3D/Section3D1'










const index = () => {
  return (
    <>
    <Head>
        <title>Hola</title>
        <meta
          name="description"
          content="Welcome to our Gaming Community"
        />
    </Head>

    <main className='min-h-screen w-full '>
      <Sticky />
      <Marquee />
      <Hero /> 
      {/* <Test /> */}
  
      <Test2 />
      <GridItems />
      <Section3D />


      {/* <Text_Mask />
      <Line /> */}
      <Hero />
      <Cards />
      <Section3D1 />

    </main>
    </>
  )
}

export default index