"use client";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import Image from "next/image";
import afterEffects from "../../public/toolKit/adobeAfterEffects.svg";
import adobeIllustrator from "../../public/toolKit/adobeIllustrator.svg";
import figma from "../../public/toolKit/figma.svg";
import spline from "../../public/toolKit/spline.svg";

import xdLogo from "../../public/toolKit/xdLogo.svg";

export const ToolKit = () => {
  const [logosPerPage, setLogosPerPage] = useState(3);
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
    };
  }, []);
  useEffect(() => {
    if (windowWidth < 768) {
      setLogosPerPage(3);
    } else if (windowWidth < 1024) {
      setLogosPerPage(4);
    } else {
      setLogosPerPage(5);
    }
  }, [windowWidth]);

  SwiperCore.use([Autoplay]);

  return (
    <div className="  maxWidthSection  md:gap-16 lg:gap-20 py-10 md:py-16 text-white-100">
      <Swiper
        spaceBetween={30}
        slidesPerView={logosPerPage}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
      >
        <SwiperSlide>
          <div className="grid place-items-center text-xs md:text-base ">
            <Image
              src={figma}
              width={100}
              height={100}
              alt="figma"
              className="w-[100%] h-[100%] object-contain"
            />
            <p>Figma</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid place-items-center text-xs md:text-base">
            <Image
              src={afterEffects}
              width={100}
              height={100}
              alt="after Effect"
              className="w-[100%] h-[100%] object-contain"
            />
            <p>After Effect</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid place-items-center text-xs md:text-base">
            <Image
              src={xdLogo}
              width={100}
              height={100}
              alt="adobe xd"
              className="w-[100%] h-[100%] object-contain"
            />
            <p>Adobe Xd</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid place-items-center text-xs md:text-base">
            <Image
              src={adobeIllustrator}
              width={100}
              height={100}
              alt="adobe Illustrator"
              className="w-[100%] h-[100%] object-contain"
            />
            <p>Adobe Illustrator</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center">
          <div className="grid place-items-center text-xs md:text-base">
            <Image
              src={spline}
              width={100}
              height={100}
              alt="spline"
              className="w-[100%] h-[100%] object-contain"
            />
            <p>Spline 3D</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
