"use client"

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";
import Image from "next/image";

export const CarouselImages = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className=" overflow-hidden m-auto " ref={emblaRef}>
      <div className="flex ">
        {data?.map((item, index) => {
          return (
            <div key={index} className="flex-[0_0_100%] flex items-center  min-w-0">
              <Image
                src={item.image}
                width={500}
                height={500}
                className=" w-[100%] h-[100%] sm:w-[70%] sm:h-[95%] object-contain m-auto"
                alt="designs"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
