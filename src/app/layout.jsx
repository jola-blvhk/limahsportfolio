"use client";

import "./globals.css";

import { Poppins, Comfortaa } from "next/font/google";
import { Header } from "../components/index";

const comfortaa = Comfortaa({ subsets: ["latin"] });



export const Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
