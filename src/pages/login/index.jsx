import Image from "next/image";
import React from "react";
import { IMAGES } from "../../app/constants/IMAGES";
import { useLogin } from "../../containers/login/hooks";

export default function Login() {
  const { handleChange, handleSubmit, loginForm } = useLogin();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="shadow-xl px-14 py-6 rounded-sm border-2">
        <Image
          src={IMAGES.FLOWER_WITH_TEXT.src}
          alt={IMAGES.FLOWER_WITH_TEXT.alt}
          width={400}
          height={300}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />

        <form action="" onSubmit={handleSubmit}>
          <div className="flex flex-col py-7 gap-y-4">
            <div className="gap-y-2 flex flex-col">
              <label htmlFor="" className="font-InterBold text-xl">
                Email:
              </label>
              <input
                value={loginForm.email}
                name="email"
                type="email"
                className="bg-slate-200 px-4 py-1.5 w-full outline-none focus:outline-2 focus:outline-black"
                placeholder="Email..."
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>

            <div className="gap-y-2 flex flex-col">
              <label htmlFor="" className="font-InterBold text-xl">
                Contraseña:
              </label>
              <input
                value={loginForm.password}
                name="password"
                type="password"
                className="bg-slate-200 px-4 py-1.5 w-full outline-none focus:outline-2 focus:outline-black"
                placeholder="Contraseña..."
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-lg px-6 py-1.5 bg-black text-white font-InterSemiBold transition-all duration-300 hover:opacity-70 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
