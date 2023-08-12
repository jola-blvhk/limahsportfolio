"use client";
import Script from "next/script";
import "./globals.css";

import { Poppins, Comfortaa } from "next/font/google";
import { Header, Footer } from "../components/index";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    hotjar.initialize(3606196, 6);
  }, []);
  return (
    <html lang="en">
      <body className={`${comfortaa.className}`}>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
