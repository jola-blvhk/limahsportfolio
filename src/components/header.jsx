"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import path from "path";

export const Header = () => {
  const pathName = usePathname();

  const [dropNav, setDropNav] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [showHoverHome, setShowHoverHome] = useState(false);
  const [showHoverAbout, setShowHoverAbout] = useState(false);
  const [showHoverResume, setShowHoverResume] = useState(false);

  return (
    <div className="relative z-50">
      <div className="fixed w-full h-20 bg-primary-black-100  ">
        <div className="h-20 px-3 md:px-6 lg:px-9 md:h-auto pt-4 absolute items-center z-[10000000000000] top-0 w-full ">
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
                priority
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
                  <div className="relative">
                    <li className="  hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 font-medium  ">
                      Home
                    </li>
                    {showHoverHome || pathName === "/" ? (
                      <div className=" absolute top-[calc(100%-3px)] left-0 right-0 h-[3px] bg-secondary-orange-100"></div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>

                <Link
                  href="/about-me"
                  className={`grid place-items-center 
              `}
                  onMouseEnter={() => setShowHoverAbout(true)}
                  onMouseLeave={() => setShowHoverAbout(false)}
                >
                  <div className="relative">
                    <li className="  hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 font-medium  ">
                      About Me
                    </li>
                    {showHoverAbout || pathName === "/about-me" ? (
                      <div className=" absolute top-[calc(100%-3px)] left-0 right-0 h-[3px] bg-secondary-orange-100"></div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1xn4aT3ZYuNkPEe2CPhBWX3GetiIq5wTt/view?usp=drive_link"
                  className={`grid place-items-center 
              `}
                  onMouseEnter={() => setShowHoverResume(true)}
                  onMouseLeave={() => setShowHoverResume(false)}
                >
                  <div className="relative grid ">
                    <li className="  hover:cursor-pointer transition ease-in-out delay-150 text-center py-5 font-medium  ">
                      Resumè
                    </li>
                    {showHoverResume ? (
                      <div className=" absolute top-[calc(100%-3px)] left-0 right-0 h-[3px] bg-secondary-orange-100"></div>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
              </ul>
            </div>
            <div className=" hidden md:block">
              <a href="mailto:ojuolapebello99@gmail.com">
                <Image
                  src="/mail.svg"
                  width={50}
                  height={50}
                  alt="mail"
                  className="w-8 h-8 hover:text-secondary-orange-100"
                  onClick={() => {
                    setDropNav(!dropNav);
                  }}
                />
              </a>
            </div>
            {/* Mobile Nav */}

            <div className="md:hidden">
              {dropNav ? (
                <IoMdClose
                  className="text-4xl"
                  onClick={() => {
                    setDropNav(false);
                  }}
                />
              ) : (
                <Image
                  src="/toggleNav.svg"
                  width={50}
                  height={50}
                  alt="toggle-nav"
                  className="w-8 h-8 "
                  onClick={() => {
                    setDropNav(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {dropNav ? (
          <div className="bg-primary-white-100 top-full shadow-md md:hidden w-full overflow-hidden">
            <ul className=" absolute top-full w-full bg-primary-white-100 z-[10000000000]">
              <Link
                href="/"
                onClick={() => {
                  setDropNav(false);
                }}
              >
                <li className="text-primary-black-100 hover:text-secondary-orange-100 hover:cursor-pointer transition ease-in-out delay-150 text-center py-8 font-medium border-b border-[#C3C3C366]">
                  Home
                </li>
              </Link>
              <Link
                href="/about-me"
                onClick={() => {
                  setDropNav(false);
                }}
              >
                <li className="text-primary-black-100 hover:text-secondary-orange-100 hover:cursor-pointer transition ease-in-out delay-150 text-center py-8 font-medium border-b border-[#C3C3C366]">
                  About me
                </li>
              </Link>
              <Link
                href="https://drive.google.com/file/d/1xn4aT3ZYuNkPEe2CPhBWX3GetiIq5wTt/view?usp=drive_link"
                onClick={() => {
                  setDropNav(false);
                }}
              >
                <li className="text-primary-black-100 hover:text-secondary-orange-100 hover:cursor-pointer transition ease-in-out delay-150 text-center py-8 font-medium border-b border-[#C3C3C366]">
                  Resumè
                </li>
              </Link>

              <a
                href="mailto:ojuolapebello99@gmail.com"
                onClick={() => {
                  setDropNav(false);
                }}
              >
                <li className="text-primary-black-100 hover:text-secondary-orange-100 hover:cursor-pointer transition ease-in-out delay-150 text-center py-8 font-medium">
                  Mail me
                </li>
              </a>
            </ul>
            <div
              className="fixed top-[20%] bottom-0 left-0 right-0 z-[1000000000] bg-primary-black-100 opacity-60"
              onClick={() => {
                setDropNav(false);
              }}
            ></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
