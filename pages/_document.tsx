import { Html, Head, Main, NextScript } from "next/document";

// Satoshi's licence (ITF Free Font License) does not allow the font files to
// sit in a public repository, so it loads from Fontshare's own CDN.
const FONT_CSS = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap";

// Hides data-reveal elements before first paint so they can animate in. If the
// app never starts (script error, slow bundle), they are shown again after 4s.
const REVEAL_SCRIPT = `(function(){var d=document.documentElement;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("js-reveal");setTimeout(function(){if(!window.__revealReady)d.classList.remove("js-reveal")},4000)})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONT_CSS} />
        <script dangerouslySetInnerHTML={{ __html: REVEAL_SCRIPT }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
