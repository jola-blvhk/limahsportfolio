import React from "react";
import { Button } from ".";
import { poppins } from "../../utils/fonts";

import Image from "next/image";
import Instagram from "../../public/socialMedia/instagram.svg";
import linkedin from "../../public/socialMedia/linkedin.svg";
import twitter from "../../public/socialMedia/twitter.svg";
import behance from "../../public/socialMedia/behance.svg";
import dribbble from "../../public/socialMedia/dribbble.svg";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary-gray-100 pt-20 px-3 md:px-6 lg:px-9 pb-6">
      <div className="text-center  m-auto max-w-lg space-y-14  md:pt-16 ">
        <h1
          className={`text-primary-black-100 ${poppins.className} text-3xl md:text-5xl `}
        >
          Let&apos;s get to work
        </h1>
        <p className="text-primary-black-90 leading-8">
          Thanks for taking the time to check out my portfolio. I am more than
          happy to answer any questions or discuss new opportunities so please
          feel free to reach out to me any time.
        </p>
        <Button
          text="Send me an Email"
          classN=" text-sm md:text-base bg-secondary-orange-100 border-secondary-orange-100 text-primary-white-100 m-auto"
        />
        <div className="flex items-center justify-center space-x-8 m-auto md:pt-8 ">
          <Link href="https://www.instagram.com/_ojuolape_/">
            <Image src={Instagram} width={40} height={40} alt="instagram" />
          </Link>
          <Link href="https://www.instagram.com/_ojuolape_/">
            <Image src={twitter} width={40} height={40} alt="twitter"/>
          </Link>
          <Link href="https://www.instagram.com/_ojuolape_/">
            <Image src={behance} width={40} height={40} alt="behance"/>
          </Link>
          <Link href="https://www.instagram.com/_ojuolape_/">
            <Image src={dribbble} width={40} height={40} alt="dribble"/>
          </Link>
          <Link href="https://www.instagram.com/_ojuolape_/">
            <Image src={linkedin} width={40} height={40} alt="linkedin"/>
          </Link>
          {/* <BiLogoTwitter className="text-primary-black-100 text-3xl md:text-5xl" />
          <BiLogoInstagram className="text-primary-black-100 text-3xl md:text-5xl" />
          <BiLogoBehance className="text-primary-black-100 text-3xl md:text-5xl" />
          <BiLogoLinkedin className="text-primary-black-100 text-3xl md:text-5xl" /> */}
        </div>
      </div>
      <div className="text-center pt-28 md:pt-16 font-bold">
        <p className="text-primary-black-100 text-xs ">
          © 2021 All rights reserved. – Designed by me Ojuolape Bello
        </p>
      </div>
    </footer>
  );
};
