import "../styles/globals.css";
import Head from "next/head";

// import Hammer from "hammerjs";
// import dynamic from "next/dynamic";

// const Hammer = dynamic(() => import("hammerjs"), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          async
          src="https://hammerjs.github.io/dist/hammer.min.js"
        ></script>
        <script
          async
          src="https://unpkg.com/propagating-hammerjs@latest/propagating.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
