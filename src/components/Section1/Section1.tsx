import React from 'react'
import Image from 'next/image'
import RoundedButton from '@/common/RoundedButton'

const Section1 = () => {
  return (
<div className="relative h-[100vh] flex flex-row mx-16 gap-9">

    <div className="relative flex flex-col basis-1/4  ">
        <div className="relative flex h-[40%]">
        <Image
            src="/images/3.jpg"
            width={500}
            height={500}
            alt="img"
            className='relative overflow-hidden '
            />
        </div>
        <div className="flex text-xl border rounded-3xl place-content-center my-5 mx-40  ">
            CLICK
        </div>
    </div>

    <div className="flex basis-3/4 bg-gray-600">
        
    </div>

    <div className="relative flex flex-col basis-1/4  ">
        <div className="relative flex h-[40%]">
        <Image
            src="/images/3.jpg"
            width={500}
            height={500}
            alt="img"
            className='relative overflow-hidden '
            />
        </div>
        <div className="flex text-xl border rounded-3xl place-content-center my-5 mx-40  ">
            CLICK
        </div>
    </div>

</div>
)
}

export default Section1