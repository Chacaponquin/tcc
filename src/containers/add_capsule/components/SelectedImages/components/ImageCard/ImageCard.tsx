import { Delete } from "@/modules/shared/modules/icons/components";
import Image from "next/image";
import React from "react";

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
    <div className="flex items-center py-2 px-5 gap-x-8 shadow-md rounded-sm">
      <div className="flex items-center gap-x-4">
        <input
          type="radio"
          checked={checked}
          onChange={handleSelectImageCover}
        />

        <Image
          width={60}
          height={45}
          className="object-contain w-[60px] h-[60px]"
          alt={name}
          src={url}
        />
      </div>

      <div className="flex flex-grow justify-between items-center gap-x-4">
        <p>{name}</p>

        <button
          className="hover:stroke-red-500 transition-all duration-300 stroke-black"
          onClick={handleDeleteImage}
        >
          <Delete size={20} />
        </button>
      </div>
    </div>
  );
});
