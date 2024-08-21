import React from 'react'
import Marquee from '@/components/Marquee/Marquee'
import Text_Mask from '@/components/Text/Text_Mask'
import Line from '@/components/Line/Line'
import Cards from '@/components/Card/Cards'
import Head from 'next/head'
import  Hero  from '@/components/Hero/Hero'






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
      <Hero /> 
      <Text_Mask />
      <Line />
      <Cards />
      <Marquee />
      <Hero />
      

    </main>
    </>
  )
}

export default index