import { Html, Head, Main, NextScript } from "next/document";

// Marks the page as able to animate before first paint, so the hero signature
// can start hidden and resolve without a flash. Without JS, or with reduced
// motion, the class is never added and everything renders complete.
const motionFlag = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion')}catch(e){}`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0B2239" />
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
