import React from "react";
import { Button } from ".";
import { poppins } from "../../utils/fonts";
import {
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoBehance,
  BiLogoLinkedin,
} from "react-icons/bi";

export const Footer = () => {
  return (
    <section className="bg-primary-gray-100 py-28 p-3 md:px-6 lg:px-9">
      <div className="text-center  m-auto max-w-lg space-y-10">
        <h1
          className={`text-primary-black-100 ${poppins.className} text-3xl md:text-5xl`}
        >
          Let&apos;s get to work
        </h1>
        <p className="text-primary-black-90">
          Thanks for taking the time to check out my portfolio. I am more than
          happy to answer any questions or discuss new opportunities so please
          feel free to reach out to me any time.
        </p>
        <Button
          text="Send me an Email"
          classN=" text-sm bg-secondary-orange-100 border-secondary-orange-100 text-primary-white-100 m-auto"
        />
        <div className="flex items-center justify-between min-w-[250px]max-w-sm m-auto mt-20 ">
          <BiLogoTwitter className="text-primary-black-100 text-3xl md:text-5xl" />
          <BiLogoInstagram className="text-primary-black-100 text-3xl md:text-5xl" />
          <BiLogoBehance className="text-primary-black-100 text-3xl md:text-5xl" />
          <BiLogoLinkedin className="text-primary-black-100 text-3xl md:text-5xl" />
        </div>
      </div>
    </section>
  );
};
