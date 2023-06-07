import { Delete } from "@/modules/shared/modules/icons/components";
import Image from "next/image";
import React from "react";
import { v4 as uuid } from "uuid";

export default function SelectedImages({
  images,
  imageCover,
  handleSelectImageCover,
  handleDeleteImage,
}: {
  images: Array<File>;
  imageCover: number;
  handleSelectImageCover: (index: number) => void;
  handleDeleteImage: (index: number) => void;
}) {
  return (
    <div className="flex flex-col w-full gap-y-2">
      {images
        .map((i) => ({ name: i.name, url: URL.createObjectURL(i) }))
        .map((image, i) => (
          <div
            key={uuid()}
            className="flex items-center py-2 px-5 gap-x-8 shadow-md rounded-sm"
          >
            <div className="flex items-center gap-x-4">
              <input
                type="radio"
                checked={i === imageCover}
                onChange={() => handleSelectImageCover(i)}
              />

              <Image
                width={60}
                height={45}
                className="object-contain w-[60px] h-[60px]"
                alt={`image${i}`}
                src={image.url}
              />
            </div>

            <div className="flex flex-grow justify-between items-center gap-x-4">
              <p>{image.name}</p>

              <button
                className="hover:stroke-red-500 transition-all duration-300"
                onClick={() => handleDeleteImage(i)}
              >
                <Delete size={20} />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
