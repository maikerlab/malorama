import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import Nav from "@components/Nav";
import "styles/globals.css";
import Sidebar from "@src/components/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // require("myscripts.js");
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maiks Portfolio</title>
      </Head>
      <main className="relative min-h-screen bg-white px-10 dark:bg-raisin-black dark:text-white md:px-20 lg:px-40">
        {/* <Nav /> */}
        <Sidebar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
