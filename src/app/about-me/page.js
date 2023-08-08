import React from "react";
import { poppins } from "../../../utils/fonts";
import Image from "next/image";
import { CoreCompetence, ToolKit } from "@/components";
import afterEffects from "../../../public/toolKit/adobeAfterEffects.svg";
import adobeIllustrator from "../../../public/toolKit/adobeIllustrator.svg";
import figma from "../../../public/toolKit/figma.svg";
import spline from "../../../public/toolKit/spline.svg";
import competencies from "../../components/coreCompetencies.json"
import xdLogo from "../../../public/toolKit/xdLogo.svg";

const AboutMe = () => {
  return (
    <main className="pt-20">
      <section className="bg-gradient-black px-3 md:px-6 lg:px-9">
        <h1
          className={` text-primary-gray-90 ${poppins.className} maxWidthSection text-center text-3xl md:text-5xl py-10 border-b`}
        >
          Ojuolape Bello
        </h1>

        <div className="grid md:flex maxWidthSection gap-6 md:gap-0 py-4  md:py-16">
          <div className="md:w-[30%]">
            <h1
              className={` text-primary-gray-90 ${poppins.className} text-3xl md:text-5xl `}
            >
              Bio
            </h1>
          </div>
          <div className="md:w-[70%]">
            <p className=" text-[15px] md:text-lg">
              I am a multidisciplinary designer and researcher focused on
              building meaningful digital products and experiences. i am also a
              certified Product manager. <br />
              <br />
              As a designer with a background and degree in architecture, I
              bring a unique perspective and skill set to this role, with a
              diverse set of skills that includes 3D modeling, user research,
              interaction design, UI design, and animation.
              <br />
              <br /> My background in architecture has given me a keen eye for
              design and an appreciation for the importance of user experience.
              Through my experience, I am able to create visually stunning and
              immersive user interfaces that enhance the overall user
              experience. <br />
              <br /> My expertise in user research allows me to understand user
              behavior and design interfaces that are intuitive and easy to use.
              Additionally, I can build dynamic, captivating user interfaces
              that are both aesthetically beautiful and simple to use.
              <br />
              <br /> Last but not least, my background in animation adds an
              additional level of interaction and engagement, bringing concepts
              to life and creating a more engaging user experience. I have
              proven over my career that I can collaborate with crossfunctional
              teams to create creative and efficient design solutions that serve
              organizational goals. I'm dedicated to keeping up with the most
              recent design approaches and trends, and I'm constantly seeking
              for ways to sharpen my abilities.
            </p>
          </div>
        </div>

        <section className="py-8 md:py-20 lg:py-24">
          <h1
            className={`maxWidthSection text-primary-gray-90 text-left md:text-center ${poppins.className} text-3xl md:text-5xl `}
          >
            Tool Kit
          </h1>
          {/* <div className="flex justify-between maxWidthSection gap-10 md:gap-16 lg:gap-20 py-10 md:py-16">
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
          </div> */}
          <ToolKit />
        </section>

        {/* core competence */}
        <section className=" ">
          <div className="maxWidthSection  pb-20 md:pb-32">
            <h1
              className={`text-left md:text-center font-bold text-3xl md:text-5xl mb-12 md:mb-20 text-primary-gray-80 ${poppins.className}`}
            >
              Core Competencies
            </h1>
            <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-20 ">
              {competencies?.map((skill, index) => {
                return (
                  <div key={index}>
                    <CoreCompetence name={skill.name} image={skill.logo} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default AboutMe;
