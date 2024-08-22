import React from 'react'
import Marquee from '@/components/Marquee/Marquee'
import Text_Mask from '@/components/Text/Text_Mask'
import Line from '@/components/Line/Line'
import Cards from '@/components/Card/Cards'
import Head from 'next/head'
import  Hero  from '@/components/Hero/Hero'
import Sticky from '@/components/sticky-section/StickySection'






const index = () => {
  return (
    <>
    <Head>
        <title>Gaming Community Website</title>
        <meta
          name="description"
          content="Welcome to our Gaming Community"
        />
    </Head>
    <main className='min-h-screen w-full '>
      <Sticky />
      <Hero /> 
      <Cards />
      <Text_Mask />
      <Line />
      <Marquee />
      <Hero />
    </main>
    </>
  )
}

export default index