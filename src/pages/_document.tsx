import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          {/* <svg width="0" height="0" style={{ position: 'absolute' }}>
            <filter id="grainy">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"  />
              <feColorMatrix type="saturate" values="1" />
            </filter>
          </svg> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
