import React from "react";

export default function ImageCover() {
  return (
    <div
      className="h-screen w-full flex items-end px-10 justify-center py-[80px]"
      style={{
        backgroundImage: `url("https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1600-c85.webp")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col max-w-[550px] gap-y-3 items-center">
        <h1 className="py-3 px-6 font-DrunkBold rounded esm:text-lg esm:py-2 esm:px-5 text-2xl text-white bg-black w-max text-center">
          Lorem, ipsum dolor.
        </h1>
        <div className="bg-black text-white text-base py-3 px-8 rounded esm:px-6 esm:py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          sapiente inventore beatae fuga sed doloremque ducimus atque? Pariatur
          odit modi sed non, ratione at repudiandae provident, aut quibusdam et
          voluptatem?
        </div>
      </div>
    </div>
  );
}
