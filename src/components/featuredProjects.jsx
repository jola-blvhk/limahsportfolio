import Image from "next/image";
import React from "react";

export const FeaturedProjects = ({
  image,
  name,
  status,
  role,
  description,
  year,
}) => {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <Image src={image} width={100} height={100} alt={name} className="w-[100%] h-[100%] object-contain" />
      </div>
      <div className="space-y-4">
        <p
          className={`w-36 text-center border text-xs font-bold  py-[3px] rounded-xl text-primary-black-100  ${
            status === "Ongoing"
              ? "bg-secondary-blue-100 border-secondary-blue-100"
              : "bg-secondary-green-100 border-secondary-green-100"
          }`}
        >
          {status}
        </p>
        <h2 className="font-bold text-lg md:text-2xl">{name}</h2>
        <p className="text-base">{year}</p>
        <p className="text-sm md:text-base">
          Role: <span>{role}</span>
        </p>
        <p className="text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};
