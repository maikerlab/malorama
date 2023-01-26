import Head from "next/head";
import "styles/site.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
//import "styles/globals.css";
import "@picocss/pico";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Nav from "@components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // require("myscripts.js");
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>maloramas Blog</title>
      </Head>
      <Nav />
      <div className="container">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
