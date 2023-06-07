import { UploadImage } from "@/modules/shared/modules/icons/components";
import { ChangeEvent, RefObject } from "react";

export default function ImagePicker({
  handleSelectImages,
  imageInputRef,
  handleChangeImages,
}: {
  handleSelectImages: () => void;
  imageInputRef: RefObject<HTMLInputElement>;
  handleChangeImages: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div
      className="border-dashed border-[3px] border-slate-300 flex justify-center items-center w-full p-7 h-[250px] hover:border-black cursor-pointer hover:bg-slate-200 transition-all duration-150 fill-black"
      onClick={handleSelectImages}
    >
      <input
        type="file"
        multiple
        className="hidden"
        ref={imageInputRef}
        accept="image/*"
        onChange={handleChangeImages}
      />

      <div className="flex flex-col items-center gap-y-2">
        <UploadImage size={43} />
        <p className="text-xl font-InterSemiBold">Elegir Imagen</p>
      </div>
    </div>
  );
}
