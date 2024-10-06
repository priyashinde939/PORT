import { InView } from './InView';

export function InViewBasicMultiple() {
  return (
    <div className='max-h-full w-full overflow-y-auto overflow-x-hidden'>

      <div className="h-[20vh]" />


      <div className=" flex xl:lg:text-[4rem] md:text-[3rem] text-[2rem] font-black py-36 xl:lg:mx-[20vw] md:px-10 px-4 text-center justify-center" >
        <div className="w-full">
        These are the cool things i can do for you
        </div>
      </div>
      

      <div className='flex items-center justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <div className='flex w-[70vw] h-[12rem] bg-[#8eb16b] p-10 justify-center rounded-2xl'>
          <div className=' flex flex-col text-black  xl:lg:text-[1.5rem] md:text-[1.2rem] text-[0.6rem] p-3'>
              <strong className='flex justify-center font-bold text-zinc-50'>Responsive Design</strong>
              <div className="flex py-5 justify-center text-center">
                  Go on and Resize the window, see for yourself.
              </div>
            </div>
          </div>
        </InView>
      </div>
      


      <div className='flex items-center justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: -100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <div className='flex w-[70vw] h-[12rem] bg-[#8eb16b] p-10 items-center justify-center rounded-2xl'>
          <div className=' flex flex-col text-black  xl:lg:text-[1.5rem] md:text-[1.2rem] text-[0.6rem] p-3'>
              <strong className='flex justify-center font-bold text-zinc-50'>Web Design</strong>
              <div className="flex py-5 justify-center text-center">
              I love creating fun and engaging web experiences! With my passion for creative design and animations, I aim to make every interface shine.
              </div>
            </div>
          </div>
        </InView>
      </div>
      


      <div className='flex items-center justify-center px-4 pb-24'>
        <InView
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          viewOptions={{ margin: '0px 0px -50px 0px' }}
        >
          <div className='flex w-[70vw] h-[12rem] bg-[#8eb16b] p-10 items-center justify-center rounded-2xl'>
          <div className=' flex flex-col text-black  xl:lg:text-[1.5rem] md:text-[1.2rem] text-[0.6rem] p-3'>
              <strong className='flex justify-center font-bold text-zinc-50'>Debugging</strong>
              <div className="flex py-5 justify-center text-center">
              After countless sleepless nights troubleshooting bugs and errors, Ive developed a strong skill set for resolving them and documenting solutions for future reference.
              </div>
            </div>
          </div>
        </InView>
      </div>

          <div className="h-[20vh]" />
    </div>
  );
}