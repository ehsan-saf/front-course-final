import { Layout } from "@/components";
import "@/styles/globals.css";
import "@/styles/uicons-regular-straight.css";
import type { AppProps } from "next/app";
import { Quicksand, Lato, Montserrat } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-quicksand",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${quicksand.style.fontFamily}, sans-serif;
          --font-quicksand: ${quicksand.style.fontFamily}, sans-serif;
          --font-lato: ${lato.style.fontFamily};
          --font-montserrat: ${montserrat.style.fontFamily};
        }

        p {
          font-family: "montserrat";
        }
      `}</style>
      <Component {...pageProps} />;
    </Layout>
  );
}
