import React from "react";

export const Button = ({ text, classN, rounded, ...rest }) => {
  return (
    <button
      className={`flex gap-3 items-center  py-[.8em] px-[4em]  hover:cursor-pointer transition ease-in-out delay-150 rounded-xl font-semibold  tracking-widest border text-center hover:border-secondary-peach-90"
      } 
    ${classN} `}
      {...rest}
    >
      {text}
    </button>
  );
};
