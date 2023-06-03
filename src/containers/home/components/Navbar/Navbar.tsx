import { Instagram } from "@/modules/shared/modules/icons/components";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full px-20 flex justify-center esm:py-3 py-4 bg-white fixed top-0 esm:px-6 shadow-md">
      <div className="items-center flex w-full justify-between">
        <div className="flex gap-x-10 esm:gap-x-6 items-center">
          <h1 className="text-5xl uppercase font-CairoItalicBold font-bold esm:text-3xl">
            TCC
          </h1>

          <div className="flex flex-col text-2xl esm:text-lg">
            <p className="font-CairoItalicBold">TCC</p>
            <p className="font-CairoItalicBold">+ TCC Co.</p>
          </div>
        </div>

        <div>
          <a
            className="stroke-black hover:stroke-instagramColor transition-all duration-300"
            href="https://instagram.com/esteban_fndez?igshid=ZDc4ODBmNjlmNQ=="
            rel="noreferrer"
            target="_blank"
          >
            <Instagram size={32} />
          </a>
        </div>
      </div>
    </nav>
  );
}
