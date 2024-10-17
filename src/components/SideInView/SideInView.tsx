import { InView } from './InView';
import useCursor from '../Cursor/cursor-provider'; 


export function SideInView() {
  const { setCursor, resetCursor } = useCursor(); 
  return (
    <div className='max-h-full w-full overflow-y-auto overflow-x-hidden'>

      <div className="h-[20vh]" />


      <div className=" flex xl:lg:text-[4rem] md:text-[3rem] text-[2rem] font-black py-36 xl:lg:mx-[20vw]  md:px-10 px-10 text-center justify-center" >
        <div
        onMouseEnter={() => setCursor({ variant: "blurred", content: "", color: "#e4e6f1fc" })} // Set blurred cursor
        onMouseLeave={resetCursor} 
        className="w-full cursor-none text-gradient3">
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
          <div className='flex w-[70vw] h-[12rem]  bg-[#7a7af8] p-10 justify-center rounded-2xl border border-[#cf2e2e9e]'>
          <div className=' flex flex-col text-black  xl:lg:text-[1.5rem] md:text-[1.2rem] text-[0.6rem] p-3'>
              <strong className='flex justify-center font-black text-[#e7dfdf]'>Responsive Design</strong>
              <div className="flex py-5 justify-center text-center font-medium">
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
          <div className='flex w-[70vw] h-[12rem] bg-[#aa98f8]  border border-[#cf2e2e9e] p-10 items-center justify-center rounded-2xl'>
          <div className=' flex flex-col text-black  xl:lg:text-[1.5rem] md:text-[1.2rem] text-[0.6rem] p-3'>
              <strong className='flex justify-center font-bold text-[#e7dfdf] '>Web Design</strong>
              <div className="flex py-5 justify-center text-center font-medium">
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
          <div className='flex w-[70vw] h-[12rem] bg-[#7a7af8] border border-[#cf2e2ebd] p-10 items-center justify-center rounded-2xl'>
          <div className=' flex flex-col text-black  xl:lg:text-[1.5rem] md:text-[1.2rem] text-[0.6rem] p-3'>
              <strong className='flex justify-center font-black text-[#e7dfdf]'>Debugging</strong>
              <div className="flex py-5 justify-center text-center font-medium">
              After countless sleepless nights troubleshooting bugs and errors, Ive developed a strong skill set for resolving them and documenting solutions for future reference.
              </div>
            </div>
          </div>
        </InView>
      </div>

          <div className="h-[30vh]" />
    </div>
  );
}