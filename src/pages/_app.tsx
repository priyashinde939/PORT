import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header2 from "@/components/Header/Header2";




export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <> 

        <main className="font-mont bg-dark w-full min-h-screen" >
          <SmoothScroll>
{/* navbar */}
{/* <Header /> */}
<Header2 />


            <Component key={router.asPath} {...pageProps} />
          </SmoothScroll>
        </main>
      

      </>
    );

}
