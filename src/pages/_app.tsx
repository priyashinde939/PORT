// import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { useRouter } from "next/router";
// import Header2 from "@/components/Header/Header2";
// import { CursorProvider } from "@/components/Cursor/cursor-provider";

// import React, { useState, useEffect } from 'react';
// import Preloader from '../components/Preloader/Preloader';



// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <> 
//         {loading && <Preloader />}
//         <main className="font-mont bg-dark bg-#000 w-full min-h-screen" >
//           <SmoothScroll>
//           <CursorProvider  accentColor={'#00ffffff'}>
//             <Header2 />
//             <Component key={router.asPath} {...pageProps}/>
//           </CursorProvider>
//           </SmoothScroll>
//         </main>
      

//       </>
//     );

// }




import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header2 from "@/components/Header/Header2";
import { CursorProvider } from "@/components/Cursor/cursor-provider";

import React, { useState, useEffect } from 'react';
import Preloader from '../components/Preloader/Preloader';
import Preloader2 from "@/components/Preloader2/Preloader2";



export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <> 
    <Preloader2/>
        <Preloader />
        <main className="font-mont bg-dark bg-#000 w-full min-h-screen" >
          <SmoothScroll>
          <CursorProvider  accentColor={'#00ffffff'}>
            <Header2 />
            <Component key={router.asPath} {...pageProps}/>
          </CursorProvider>
          </SmoothScroll>
        </main>
      

      </>
    );

}

