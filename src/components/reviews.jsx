import Image from "next/image";
import React from "react";

export const Reviews = ({ name, image, description, role }) => {
  return (
    <div className="flex gap-10 items-center text-primary-black-100 bg-primary-white-100 py-10 px-8 rounded-xl text-center ">
      <div className="w-[30%] grid place-items-center text-center">
        <Image src={image} width={100} height={100} alt={name} className="" />
        <h3 className="font-bold mt-2 ">{name}</h3>
        <p className="text-secondary-orange-100 text-[10px]">{role}</p>
      </div>
      <div className="">
        <p className="font-bold text-xs md:text-base md:text-left">{description}</p>
      </div>
    </div>
  );
};
