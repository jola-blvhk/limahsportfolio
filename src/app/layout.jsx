"use client";
import Script from "next/script";
import "./globals.css";

import { Poppins, Comfortaa } from "next/font/google";
import { Header, Footer, HotjarAnalytics } from "../components/index";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className}`}>
        <Header />
        {children}
        <Script
          id="hotjar"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: <HotjarAnalytics />,
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
