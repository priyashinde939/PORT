import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <> 

      <SmoothScroll>
        <main className="font-mont bg-light dark:bg-dark w-full min-h-screen" >
          <Component key={router.asPath} {...pageProps} />
        </main>
      </SmoothScroll>

      </>
    );

}
