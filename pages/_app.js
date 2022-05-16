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
          href="/videos/intro-video.mp4"
          as="introVideo"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
