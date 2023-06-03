import { Instagram } from "@/modules/shared/modules/icons/components";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full px-20 flex justify-center py-5 bg-white fixed top-0">
      <div className="items-center flex w-full justify-between">
        <div className="flex gap-x-10 items-center">
          <h1 className="text-5xl uppercase font-CairoItalicBold font-bold">
            TCC
          </h1>

          <div className="flex flex-col text-2xl">
            <p className="font-CairoItalicBold">TCC</p>
            <p className="font-CairoItalicBold">+ TCC Co.</p>
          </div>
        </div>

        <div>
          <a
            className="stroke-black"
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
