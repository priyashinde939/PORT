import React from 'react';
import useCursor, { CursorProvider } from '../Test/cursor-provider';

const Blank = () => {
    const { setCursor, resetCursor } = useCursor();

    return (
        <CursorProvider accentColor={'#000000'}>
            <div className="flex flex-col h-[100vh] bg-[#000000] justify-center items-center text-[#e2592b] ">
                
                <h1 className="justify-center items-center text-[10rem] font-black text-[#fffcf890]"
                >
                    hola amigos
                </h1>

                <h1 
                    onMouseEnter={() =>
                        setCursor({
                            variant: "blurred", // Use the blurred variant here
                            content: "Contact", // Optional content
                            color: "#ede8e6", // Optional text color
                        })
                    }
                    onMouseLeave={resetCursor}
                    className='justify-center items-center text-[10rem] font-black'
                >
                    como estas
                </h1>

            </div>
        </CursorProvider>
    );
}

export default Blank;
