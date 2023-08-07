import Image from "next/image";
import React from "react";

export const CoreCompetence = ({ image, name }) => {
  return (
    <div className="flex p-2 rounded-[35px] text-primary-black-100 md font-bold items-center gap-4 bg-primary-white-100 cursor-pointer">
      <div className=" rounded-full bg-primary-black-100 w-14 h-14 grid place-items-center">
        <Image
          width={100}
          height={100}
          src={image}
          className="w-[60%] height=[60%] object-contain"
          alt={name}
        />
      </div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};
