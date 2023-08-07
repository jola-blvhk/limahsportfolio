"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Header = () => {
  const [dropNav, setDropNav] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);
  const [showHoverHome, setShowHoverHome] = useState(false);
  const [showHoverAbout, setShowHoverAbout] = useState(false);
  const [showHoverResume, setShowHoverResume] = useState(false);
  const navlist = ["About me", "Resumè"];

  return (
    <div className="">
      <div className="bg-primary-black-100 px-3 md:px-6 lg:px-9  pt-4 h-20 items-center fixed z-[1000000] top-0 w-full">
        <div
          className="flex justify-between items-center maxWidthSection text-primary-white-100
        "
        >
          <div>
            <Image
              src="/portfolioLogo.svg"
              width={50}
              height={50}
              alt="portfolio-logo"
              className="w-10 h-10"
            />
          </div>
          <div className="hidden md:block ">
            <ul className="flex gap-20 ">
              <Link
                href="/"
                className={`grid place-items-center 
              `}
                onMouseEnter={() => setShowHoverHome(true)}
                onMouseLeave={() => setShowHoverHome(false)}
              >
                <li className="  hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 font-medium  ">
                  Home
                </li>
                {showHoverHome ? (
                  <div className="w-12 h-[3px] bg-secondary-orange-100"></div>
                ) : (
                  ""
                )}
              </Link>

              <Link
                href="/"
                className={`grid place-items-center 
              `}
                onMouseEnter={() => setShowHoverAbout(true)}
                onMouseLeave={() => setShowHoverAbout(false)}
              >
                <li className=" hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 font-medium">
                  About me
                </li>
                {showHoverAbout ? (
                  <div className="w-12 h-[3px] bg-secondary-orange-100"></div>
                ) : (
                  ""
                )}
              </Link>
              <Link
                href="/"
                className={`grid place-items-center 
              `}
                onMouseEnter={() => setShowHoverResume(true)}
                onMouseLeave={() => setShowHoverResume(false)}
              >
                <li className=" hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 font-medium">
                  Resumè
                </li>
                {showHoverResume ? (
                  <div className="w-12 h-[3px] bg-secondary-orange-100"></div>
                ) : (
                  ""
                )}
              </Link>
            </ul>
          </div>
          <div className=" hidden md:block">
            <Image
              src="/mail.svg"
              width={50}
              height={50}
              alt="mail"
              className="w-8 h-8"
              onClick={() => {
                setDropNav(!dropNav);
              }}
            />
          </div>
          {/* Mobile Nav */}
          <div className="md:hidden">
            <Image
              src="/toggleNav.svg"
              width={50}
              height={50}
              alt="toggle-nav"
              className="w-8 h-8 "
              onClick={() => {
                setDropNav(!dropNav);
              }}
            />
          </div>
        </div>
      </div>
      {dropNav ? (
        <div className="bg-primary-white-100  top-full mt-16 shadow-md md:hidden ">
          <ul>
            <Link href="/">
              <li className="text-primary-black-100 hover:text-secondary-orange-100 hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 font-medium border-b border-[#C3C3C366]">
                Home
              </li>
            </Link>
            {navlist.map((li, index) => (
              <Link key={index + 1} href={`/${li}`}>
                <li className="text-primary-black-100 hover:text-secondary-orange-100  hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 border-b border-[#C3C3C366] font-medium">
                  {li}
                </li>
              </Link>
            ))}
            <Link href="/">
              <li className="text-primary-black-100 hover:text-secondary-orange-100 hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 font-medium">
                Mail me
              </li>
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
