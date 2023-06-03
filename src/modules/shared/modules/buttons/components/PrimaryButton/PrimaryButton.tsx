import React from "react";
import { ButtonProps } from "../../interfaces/button.interface";
import clsx from "clsx";

export default function PrimaryButton({ size, text, onClick }: ButtonProps) {
  const buttonClass = clsx(
    "bg-black text-white font-InterSemiBold py-1.5 px-8 transition-all duration-300 hover:opacity-70",
    { "text-lg": size === "medium" }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
}
