import Head from "next/head";
import Nav from "src/components/Nav";
import "bootstrap/dist/css/bootstrap.css";
//import "styles/globals.css";
import "styles/site.css";
import "styles/flatly.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
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
