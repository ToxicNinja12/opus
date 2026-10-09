import { Geist, Montserrat, Nunito } from "next/font/google";
import clsx from "clsx";

import Footer from "@/components/layout/Footer";

import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-nunito",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-montserrat",
});

// Only backs the `font-footer` utility, which nothing uses yet.
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  preload: false,
});

export const metadata = {
  title: "opus",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        "scroll-smooth",
        nunito.variable,
        montserrat.variable,
        geist.variable,
      )}
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
