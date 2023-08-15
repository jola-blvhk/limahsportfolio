"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import { BiCaretRightCircle, BiCaretLeftCircle } from "react-icons/bi";
export const CarouselImages = ({ data, activeIndex }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, startIndex: activeIndex },
    [Autoplay()]
  );
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex">
      <button className="text-3xl md:text-4xl" onClick={scrollPrev}>
        <BiCaretLeftCircle />
      </button>
      <div className=" overflow-hidden m-auto  " ref={emblaRef}>
        <div className="flex ">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-[0_0_100%] lg:flex-[0_0_100%] flex items-center  min-w-0"
              >
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  className=" w-[100%] h-[100%] sm:w-[90%] sm:h-[95%] object-contain m-auto"
                  alt="designs"
                />
              </div>
            );
          })}
        </div>
      </div>

      <button className="text-3xl md:text-4xl" onClick={scrollNext}>
        <BiCaretRightCircle />
      </button>
    </div>
  );
};
