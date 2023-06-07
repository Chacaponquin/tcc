import React from "react";
import { ButtonProps } from "../../interfaces/button.interface";
import clsx from "clsx";
import { RaceBy } from "@uiball/loaders";

export default function PrimaryButton({
  size,
  text,
  onClick,
  loading = false,
}: ButtonProps) {
  const buttonClass = clsx(
    "bg-black text-white font-InterSemiBold py-1.5 px-8 transition-all duration-300 hover:opacity-70",
    { "text-lg": size === "medium" }
  );

  return (
    <React.Fragment>
      {loading ? (
        <div className="h-[35px] w-[118px] flex justify-end items-center">
          <RaceBy size={80} lineWeight={5} speed={1.4} color="black" />
        </div>
      ) : (
        <button className={buttonClass} onClick={onClick}>
          {text}
        </button>
      )}
    </React.Fragment>
  );
}
