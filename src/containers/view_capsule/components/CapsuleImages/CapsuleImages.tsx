import { IMAGES } from "@/app/constants/IMAGES";
import Image from "next/image";
import React from "react";

import "./capsuleImages.css";

export default function CapsuleImages() {
  return (
    <section className="w-full pb-20 pt-5 px-10 flex justify-center esm:pb-10">
      <div className="grid grid-cols-2 esm:grid-cols-1 gap-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5].map((image, i) => (
          <div key={i} className="flex justify-center">
            <Image
              src={IMAGES.TEST.src}
              alt={IMAGES.TEST.alt}
              width={350}
              height={400}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
