"use client";
import Script from "next/script";
import "./globals.css";
import Head from "next/head";

import { Poppins, Comfortaa } from "next/font/google";
import { Header, Footer } from "../components/index";
import { hotjar } from "react-hotjar";
import { useEffect } from "react";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className}`}>
        <Header />
        {children}
        <Footer />
        <Script
          id="hot-jar-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3606196,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </body>
    </html>
  );
}
