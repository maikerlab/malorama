import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import "@picocss/pico";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Nav from "@components/Nav";
//import "styles/globals.css";
import "@styles/custom.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // require("myscripts.js");
  }, []);

  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>maloramas Blog</title>
      </Head>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
