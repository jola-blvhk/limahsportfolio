import React from "react";
import { Button } from ".";
import Image from "next/image";
import Link from "next/link";

export const ViewDetailsDescription = ({
  image,
  name,
  status,
  role,
  description,
  year,
  text,
  link,
}) => {
  return (
    <div className="">
      <div className="grid gap-10 md:grid-cols-2 text-primary-white-100">
        <div>
          <Image
            src={image}
            width={100}
            height={100}
            alt={name}
            className="w-[100%] h-[100%] object-contain"
          />
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

          <p className="text-base md:text-lg">{description}</p>
          <p className="text-sm md:text-base mt-10">
            Role: <span>{role}</span>
          </p>

          <div
            className={`pt-5  cursor-pointer w-full ${text === "" && "hidden"}`}
          >
            <a href={link}>
              <Button
                text={text}
                classN=" text-sm w-full sm:w-fit flex justify-center sm:block text-center border  md:text-base bg-secondary-orange-100 border-secondary-orange-100 text-primary-white-100 hover:bg-primary-white-100 hover:text-secondary-orange-100  hover:font-bold"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
