"use client";

import { Button, FeaturedProjects } from "@/components";
import Image from "next/image";
import Scroll from "../scroll.json";
import Lottie from "lottie-react";
import { poppins } from "../../utils/fonts";
import projects from "../components/featuredProjectsdb.json";


export default function Home() {
  return (
    <main className="mt-20  bg-primary-white-100 ">
      <section className="  px-3 md:px-6 lg:px-9 pt-20 pb-20 md:pb-0  bg-primary-gray-100">
        <div className=" grid gap-10 md:gap-0 md:flex maxWidthSection items-center lg:items-end ">
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
            <Button text="Hire me" classN="bg-primary-black-100 text-primary-white-100" />
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

      {/* featured products */}
      <section className="px-3 md:px-6 lg:px-9 py-20 md:py-32 bg-gradient-black">
        <div className="maxWidthSection">
        <h1
          className={`text-left md:text-center font-bold text-2xl md:text-4xl mb-12 md:mb-20 text-primary-gray-80 ${poppins.className}`}
        >
          Featured Projects
        </h1>
        <div className="grid gap-24 md:gap-12 ">
          {projects.map((project, index) => {
            return (
              <div key={index}>
                <FeaturedProjects
                  name={project.title}
                  description={project.description}
                  role={project.role}
                  year={project.year}
                  status={project.status}
                  image={project.image}
                />
              </div>
            );
          })}
          </div>
          </div>
      </section>
    </main>
  );
}
