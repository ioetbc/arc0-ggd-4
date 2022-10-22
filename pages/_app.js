import "../styles/globals.css";
import Head from "next/head";

import {Fonts} from "../components/Fonts";
function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <title>ARC-GGD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          as="image"
          href="/images/landing-page/landing-bg-dark.webp"
        ></link>
      </Head>
      <Fonts />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
