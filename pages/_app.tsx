import { fontVariables } from "@/components/fonts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import { useEffect } from "react";

function sendToServer(payload: any) {
  // Prefer sendBeacon (non-blocking) for unload; fallback to fetch
  const url = '/api/monitor' // Next.js server-side proxy
  const body = JSON.stringify(payload)

  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' })
    navigator.sendBeacon(url, blob)
    return
  }

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true, // helps with background delivery
  }).catch((e) => {
    // optional: add a small retry/backoff or queue to localStorage
    console.error('Monitor client error:', e)
  })
}

function useMonitor() {
  useEffect(() => {
    const logPage = (path?: string) => {
      const payload = {
        method: 'GET',
        endpoint: path || window.location.pathname,
        response_code: 200,
        user_agent: navigator.userAgent,
        response_time: performance.now(),
        referrer: document.referrer || null,
        timestamp: new Date().toISOString(),
      }
      sendToServer(payload)
    }

    // initial page load
    logPage(window.location.pathname)

    // track client-side route changes (Next.js)
    const onRouteChange = (url: string) => logPage(url)
    Router.events.on('routeChangeComplete', onRouteChange)

    // also send on unload (close / refresh)
    const onBeforeUnload = () => {
      logPage(window.location.pathname)
    }
    window.addEventListener('beforeunload', onBeforeUnload)

    return () => {
      Router.events.off('routeChangeComplete', onRouteChange)
      window.removeEventListener('beforeunload', onBeforeUnload)
    }
  }, [])
}


export default function App({ Component, pageProps }: AppProps) {
  useMonitor()
  return(
        <div className={`${fontVariables} app`}>
          <Head>
            <title>Delight Adediran | Full-Stack Engineer</title>
            <meta name="description" content="Portfolio of Delight Adediran, a Lagos-based full-stack engineer with a B.Sc. in Cyber Security, building web, mobile, Web3 and AI products." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://de-elite.netlify.app/" />
            <meta property="og:title" content="Delight Adediran | Full-Stack Engineer" />
            <meta property="og:description" content="Web, mobile, Web3 and AI products built by a security-focused full-stack engineer in Lagos." />
            <meta property="og:image" content="https://de-elite.netlify.app/og.png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="icon" href="/favicon.ico" sizes="any" />
          </Head>
          <Component {...pageProps} />
        </div>
  );
}
