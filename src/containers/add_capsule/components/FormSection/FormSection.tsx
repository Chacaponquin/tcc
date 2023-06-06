import React from "react";

export default function FormSection() {
  return (
    <React.Fragment>
      <div className="w-full">
        <input
          type="text"
          placeholder="Título de Capsula"
          className="px-4 py-1 bg-salte-300 text-lg outline-none border-slate-300 border-2 focus:border-black w-full"
        />
      </div>

      <div className="w-full">
        <textarea
          placeholder="Descripción de la Cápsula"
          className="px-4 py-1 bg-salte-300 text-lg outline-none border-slate-300 border-2 focus:border-black w-full resize-none h-[250px]"
        ></textarea>
      </div>
    </React.Fragment>
  );
}
