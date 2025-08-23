import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import "@/styles/uicons-regular-straight.css";
import "react-toastify/ReactToastify.css";

import type { AppProps } from "next/app";
import { Quicksand, Lato, Montserrat } from "next/font/google";
import { Layout } from "@/components";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

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
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchIntervalInBackground: false,
            retry: 0,
          },
        },
      }),
  );
  return (
    <>
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
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            autoClose={false}
            hideProgressBar={false}
            closeOnClick={true}
            draggable={false}
            theme="light"
            position="top-right"
          />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
