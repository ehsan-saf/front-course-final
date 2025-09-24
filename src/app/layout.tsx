import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/autoplay";
import "@/styles/uicons-regular-straight.css";
import "react-toastify/ReactToastify.css";

import { Quicksand, Lato, Montserrat } from "next/font/google";
import { Layout } from "@/components";
import { Providers } from "./providers";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${quicksand.variable} ${lato.variable} ${montserrat.variable}`}
    >
      <body className="font-quicksand">
        <Providers>
          <div id="portal"></div>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
