"use client"

import { Button } from "@/components";
import Image from "next/image";
import Scroll from "../scroll.json";
import Lottie from "lottie-react";
import { poppins } from "./layout";
export default function Home() {

  return (
    <main className="mt-20  bg-primary-white-100 ">
      <section className="  px-3 md:px-6 lg:px-9 pt-20 bg-primary-gray-100">
        <div className=" grid md:flex maxWidthSection items-end">
          <div className="space-y-6 order-last md:order-first md:w-[50%] ">
            <h1
              className={` ${poppins.className} text-primary-black-100 font-extrabold text-3xl md:text-5xl `}
            >
              Hi, I am <br />
              <span className="text-secondary-orange-100 leading-loose">
                Ojuolape Bello
              </span>
            </h1>

            <p className="text-primary-black-90">
              A Product Designer with 4 years + experience creating 3d models,
              user interfaces, graphics presentations etc, with a background in
              architecture. I am also a certified Product manager
            </p>
            <Button text="Hire me" classN="bg-primary-black-100" />
            <Lottie
              animationData={Scroll}
              loop={true}
              className="hidden md:block w-60"
            />
          </div>
          <div className="border  ">
            <Image
              src="/leader-image.svg"
              width={500}
              height={500}
              alt="image"
              className="w-[100%] h-[100%] sm:w-[80%] sm:h-[80%] md:w-[130%] md:h-[110%] m-auto object-contain "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
