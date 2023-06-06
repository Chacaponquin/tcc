import { IMAGES } from "@/app/constants/IMAGES";
import Image from "next/image";
import React from "react";

export default function CapsuleImages() {
  return (
    <section className="w-full py-20 px-10 flex justify-center">
      <div className="grid grid-cols-3 gap-3">
        {[1, 2, 3, 4, 5].map((image, i) => (
          <div key={i}>
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
