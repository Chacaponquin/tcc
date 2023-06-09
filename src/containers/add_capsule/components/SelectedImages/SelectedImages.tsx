import React from "react";
import { v4 as uuid } from "uuid";
import { ImageCard } from "./components";

export default React.memo(
  function SelectedImages({
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
            <ImageCard
              key={uuid()}
              name={image.name}
              url={image.url}
              checked={i === imageCover}
              handleDeleteImage={() => handleDeleteImage(i)}
              handleSelectImageCover={() => handleSelectImageCover(i)}
            />
          ))}
      </div>
    );
  },
  (oldProps, newProps) => {
    if (
      oldProps.images !== newProps.images ||
      oldProps.imageCover !== newProps.imageCover
    ) {
      return false;
    }

    return true;
  }
);
