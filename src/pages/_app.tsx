import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header2 from "@/components/Header/Header2";
import { CursorProvider } from "@/components/Test/cursor-provider";





export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <> 
        <main className="font-mont bg-dark w-full min-h-screen" >
          <SmoothScroll>
          <CursorProvider accentColor={'#9eb2f5a9'}>
            <Header2 />
            <Component key={router.asPath} {...pageProps} />
          </CursorProvider>
          </SmoothScroll>
        </main>
      

      </>
    );

}
