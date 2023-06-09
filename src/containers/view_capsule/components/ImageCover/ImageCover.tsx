import { Capsule } from "@/modules/capsules/interfaces/capsule.interface";
import React from "react";

export default function ImageCover({ capsule }: { capsule: Capsule }) {
  return (
    <div
      className="h-screen w-full flex items-end px-10 justify-center py-[80px]"
      style={{
        backgroundImage: `url("${capsule.image_cover}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col max-w-[550px] gap-y-3 items-center">
        <h1 className="py-3 px-6 font-DrunkBold rounded esm:text-lg esm:py-2 esm:px-5 text-2xl text-white bg-black w-max text-center">
          {capsule.title}
        </h1>
        <div className="bg-black text-white text-base py-3 px-8 rounded esm:px-6 esm:py-2">
          {capsule.description}
        </div>
      </div>
    </div>
  );
}
