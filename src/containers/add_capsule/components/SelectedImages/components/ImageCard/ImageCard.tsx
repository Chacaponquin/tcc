import { Delete } from "@/modules/shared/modules/icons/components";
import Image from "next/image";
import React from "react";

import "./imageCard.css";

interface ImageCardProps {
  checked: boolean;
  handleSelectImageCover: () => void;
  url: string;
  name: string;
  handleDeleteImage: () => void;
}

export default React.memo(function ImageCard({
  checked,
  handleSelectImageCover,
  url,
  name,
  handleDeleteImage,
}: ImageCardProps) {
  return (
    <div className="flex w-full items-center py-2 gap-x-8 esm:gap-x-5 px-5 shadow-md rounded-sm esm:py-3">
      <div className="flex items-center gap-x-4">
        <input
          type="radio"
          checked={checked}
          onChange={handleSelectImageCover}
          className=""
        />

        <Image
          width={60}
          height={45}
          className="object-contain w-[50px] h-[50px] esm:hidden"
          alt={name}
          src={url}
        />
      </div>

      <div className="flex flex-grow justify-between items-center image-card-name w-full">
        <p className="overflow-ellipsis whitespace-nowrap overflow-hidden">
          {name}
        </p>

        <button
          className="hover:stroke-red-500 transition-all duration-300 stroke-black"
          onClick={handleDeleteImage}
        >
          <Delete size={18} />
        </button>
      </div>
    </div>
  );
});
