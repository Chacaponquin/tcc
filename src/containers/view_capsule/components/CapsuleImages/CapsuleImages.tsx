import { IMAGES } from "@/app/constants/IMAGES";
import Image from "next/image";
import React from "react";

import "./capsuleImages.css";
import { CapsuleImage } from "@/modules/capsules/interfaces/capsule.interface";

export default function CapsuleImages({
  images,
}: {
  images: Array<CapsuleImage>;
}) {
  return (
    <section className="w-full pb-20 pt-5 px-10 flex justify-center esm:pb-10">
      <div className="grid grid-cols-2 esm:grid-cols-1 gap-2 xl:grid-cols-3">
        {images.map((image) => (
          <div key={image.id} className="flex justify-center">
            <Image
              src={image.image_url}
              alt={image.image_url}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
