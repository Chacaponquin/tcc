import { IMAGES } from "@/app/constants/IMAGES";
import React from "react";
import Image from "next/image";

const TEXT = "(DEJA QUE FLOREZCA PORQUE HAY BELLEZA EN LO SIMPLE)";

export default function Presentation() {
  return (
    <section className="h-screen bg-white flex justify-center">
      <div className="w-full max-w-[1400px] justify-between flex items-center px-20">
        <Image
          src={IMAGES.FLOWER.src}
          alt={IMAGES.FLOWER.alt}
          width={520}
          height={430}
        />

        <div className="flex items-center flex-col">
          <Image
            src={IMAGES.PRESENTATION_TEXT.src}
            alt={IMAGES.PRESENTATION_TEXT.alt}
            width={650}
            height={500}
          />

          <p className="mt-6 text-lg">{TEXT}</p>
        </div>
      </div>
    </section>
  );
}
