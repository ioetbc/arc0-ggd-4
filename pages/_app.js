import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ARC-GGD</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="preload"
          href="/images/landing-page/landing-bg.webp"
          as="image"
        ></link>
        <link
          rel="preload"
          href="/images/landing-page/landing-bg-dark.webp"
          as="image"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
