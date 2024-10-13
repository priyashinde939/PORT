
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    } from './Accordion';
    import { ChevronRight } from 'lucide-react';
    import useCursor from '../Test/cursor-provider'; 
    
    export function SkillAccordion() {
    const { setCursor, resetCursor } = useCursor(); 
    return (
    <section id='About' className="flex flex-col gap-20 items-center justify-center px-36 my-[20vh]">
        <div 
        onMouseEnter={() => {
        setCursor({ variant: "blurred", content: "" }); 
        }}
        onMouseLeave={resetCursor} 
        className="font-black text-center xl:lg:text-[4rem] md:text-[3rem] text-[2rem]  ">
            Technical Skills
        </div>
{/* ----------------------- */}



        <div className="w-full">
            
            <Accordion
                className='flex w-full flex-col gap-10 '
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                variants={{
                expanded: {
                    opacity: 1,
                    scale: 1,
                },
                collapsed: {
                    opacity: 0,
                    scale: 0.7,
                },
                }}
            >
                <AccordionItem value='getting-started' className='py-2'>
                <AccordionTrigger className='w-full py-0.5 text-left text-zinc-50 '>
                    <div className='flex items-center'>
                    <ChevronRight className='h-4 w-4 transition-transform duration-200 group-data-[expanded]:rotate-90text-zinc-50' />
                    <div className='ml-2 text-zinc-50 font-bold lg:md:text-[2rem] text-[1rem]'>
                    Languages
                    </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='origin-left'>
                    <div className='pl-10 pr-2 flex flex-col gap-1 text-zinc-500 dark:text-zinc-400 lg:md:text-[1.5rem] sm:text-[1rem]'>
                        <h1>HTML</h1>
                        <h1>CSS</h1>
                        <h1>JavaScript</h1>
                        <h1>SASS</h1>
                        <h1>Python</h1>
                        <h1>C++</h1>
                        <h1>SQL</h1>
                    </div>
                </AccordionContent>
                </AccordionItem>


                <AccordionItem value='animation-properties' className='py-2'>
                <AccordionTrigger className='w-full py-0.5 text-left text-zinc-50'>
                    <div className='flex items-center '>
                    <ChevronRight className='h-4 w-4  transition-transform duration-200 group-data-[expanded]:rotate-90 text-zinc-50' />
                    <div className='ml-2 text-zinc-50 font-bold  lg:md:text-[2rem] text-[1rem]'>
                    Libraries & Frameworks
                    </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='origin-left'>
                <div className='pl-10 pr-2 gap-1 flex flex-col text-zinc-500 dark:text-zinc-400  lg:md:text-[1.5rem] sm:text-[1rem]'>
                        <h1>React</h1>
                        <h1>NodeJS</h1>
                        <h1>NextJS</h1>
                        <h1>React Native</h1>
                    </div>
                </AccordionContent>
                </AccordionItem>


                <AccordionItem value='advanced-features' className='py-2'>
                <AccordionTrigger className='w-full py-0.5 text-left text-zinc-50'>
                    <div className='flex items-center'>
                    <ChevronRight className='h-4 w-4  transition-transform duration-200 group-data-[expanded]:rotate-90 text-zinc-50' />
                    <div className='ml-2 text-zinc-50 font-bold  lg:md:text-[2rem] text-[1rem]'>
                    Tools
                    </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className='origin-left'>
                <div className='pl-10 pr-2 flex flex-col gap-1 text-zinc-500 dark:text-zinc-400 lg:md:text-[1.5rem] sm:text-[1rem]'>
                        <h1 className="">Git & GitHub</h1>
                        <h1>VS Code</h1>
                        <h1>Jupyter Notebook</h1>
                        <h1>Android Studio</h1>
                    </div>
                </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>



    </section>
    );
}