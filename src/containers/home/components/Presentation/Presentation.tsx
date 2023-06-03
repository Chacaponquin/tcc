import { IMAGES } from "@/app/constants/IMAGES";
import React from "react";
import Image from "next/image";

const TEXT = "(DEJA QUE FLOREZCA PORQUE HAY BELLEZA EN LO SIMPLE)";

export default function Presentation() {
  return (
    <section className="min-h-screen bg-white flex justify-center py-[100px]">
      <div className="w-full max-w-[1400px] flex justify-center items-center px-20 xl:flex-row flex-col gap-20 esm:px-10">
        <Image
          src={IMAGES.FLOWER.src}
          alt={IMAGES.FLOWER.alt}
          width={520}
          height={400}
          className="2xl:w-[520px] w-[350px]"
        />

        <div className="flex items-center flex-col">
          <Image
            src={IMAGES.PRESENTATION_TEXT.src}
            alt={IMAGES.PRESENTATION_TEXT.alt}
            width={650}
            height={500}
            className="2xl:w-[650px] w-[470px]"
          />

          <p className="mt-6 text-base text-center">{TEXT}</p>
        </div>
      </div>
    </section>
  );
}
