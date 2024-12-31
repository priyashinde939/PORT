import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header2 from "@/components/Header/Header2";
import { CursorProvider } from "@/components/Cursor/cursor-provider";






export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <> 
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
