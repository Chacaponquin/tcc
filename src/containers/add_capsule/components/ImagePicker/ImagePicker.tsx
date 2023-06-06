import { UploadImage } from "@/modules/shared/modules/icons/components";
import React, { useRef } from "react";

export default function ImagePicker() {
  const imageInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="border-dashed border-[3px] border-slate-300 flex justify-center items-center w-full p-7 h-[250px] hover:border-black cursor-pointer hover:bg-slate-200 transition-all duration-150 fill-black">
      <input type="file" multiple className="hidden" ref={imageInputRef} />

      <div className="flex flex-col items-center gap-y-2">
        <UploadImage size={43} />
        <p className="text-xl font-InterSemiBold">Elegir Imagen</p>
      </div>
    </div>
  );
}
