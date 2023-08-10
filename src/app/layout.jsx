"use client";
import Script from "next/script";
import "./globals.css";

import { Poppins, Comfortaa } from "next/font/google";
import { Header, Footer } from "../components/index";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className}`}>
        <Header />
        {children}
      \
        <Footer />
      </body>
    </html>
  );
}
