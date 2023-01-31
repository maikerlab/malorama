import Navbar from "@/components/Navbar";
import "@styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider attribute="class">
        <main>
          <Navbar />
          <div className="pt-24">
            <Component {...pageProps} />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
