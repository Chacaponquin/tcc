import { ROUTES } from "@/app/constants/ROUTES";
import { PrimaryButton } from "@/modules/shared/modules/buttons/components";
import { Instagram } from "@/modules/shared/modules/icons/components";
import { useUserServices } from "@/modules/user/services";
import Link from "next/link";
import React from "react";
import { UserOptions } from "./components";
import { Loader } from "@/app/components";

export default function Navbar() {
  const { user, initFetchUserLoading } = useUserServices();

  return (
    <nav className="w-full px-20 flex justify-center py-2 bg-white fixed top-0 esm:px-6 shadow-md z-50">
      <div className="items-center flex w-full justify-between">
        <Link href={ROUTES.ROOT} className="flex gap-x-6 items-center">
          <h1 className="text-3xl uppercase font-CairoItalicBold font-bold esm:text-2xl">
            TCC
          </h1>

          <div className="flex flex-col text-lg">
            <p className="font-CairoItalicBold">TCC</p>
            <p className="font-CairoItalicBold">+ TCC Co.</p>
          </div>
        </Link>

        <div className="flex gap-x-6 items-center">
          <a
            className="stroke-black hover:stroke-instagramColor transition-all duration-300  exsm:hidden"
            href="https://instagram.com/esteban_fndez?igshid=ZDc4ODBmNjlmNQ=="
            rel="noreferrer"
            target="_blank"
          >
            <Instagram size={30} />
          </a>

          {!initFetchUserLoading ? (
            !user ? (
              <Link href={ROUTES.LOGIN}>
                <PrimaryButton text="Login" size="medium" />
              </Link>
            ) : (
              <UserOptions />
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </nav>
  );
}
