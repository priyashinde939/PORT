import React from 'react'
import Card from './Card'


function Cards() {
    const data =[
        {
            
            image2: '/images/2.jpeg',
            logo: '/images/git.svg',
            videoUrl: '/medias/pubg.mp4',
            desc: 'Pubg, FPS , Multiplayer, Battle Royale , Survival , Shooter',
            bg: '#0e0e27',
            heading: "Team up and win the prize money in the biggest battle royale game of all time. Play with your friends and win the chicken dinner. Do you have what it takes to be the winner winner chicken dinner? Join now and find out."
        },
        {
            
            image2: '/images/2.jpeg',
            logo: '/images/git.svg',
            videoUrl: '/medias/pubg.mp4',
            bg: '#0e0e27',
            desc: 'Pubg, FPS , Multiplayer, Battle Royale , Survival , Shooter',
            heading: "Team up and win the prize money in the biggest battle royale game of all time. Play with your friends and win the chicken dinner. Do you have what it takes to be the winner winner chicken dinner? Join now and find out."
        },
        {
            
            image2: '/images/2.jpeg',
            logo: '/images/git.svg',
            videoUrl: '/medias/pubg.mp4',
            bg: '#0e0e27',
            desc: 'Pubg, FPS , Multiplayer, Battle Royale , Survival , Shooter',
            heading: "Team up and win the prize money in the biggest battle royale game of all time. Play with your friends and win the chicken dinner. Do you have what it takes to be the winner winner chicken dinner? Join now and find out."
        },

    ]
  return (
    <div className='w-full py-[4vw] bg-black'>
        <div className='max-w-[1840px] mx-auto px-[5vw] xs:px-0'>
            <div className='flex flex-col gap-[8vw] xs:gap-[2vw]'>
                {data.map((elem, index) => (
                    <Card key={index} val={elem} />
                ))}
            </div>        
        </div>
    </div>
  )
}

export default Cards
