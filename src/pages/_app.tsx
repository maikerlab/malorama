import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute="class">
        <main className="bg-cultured dark:bg-black">
          <Navbar />
          <div className="pt-24">
            <Component {...pageProps} />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}
