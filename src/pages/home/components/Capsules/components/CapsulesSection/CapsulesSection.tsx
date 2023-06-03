import { CAPSULES } from "@/modules/capsules/constants/CAPSULES";
import Image from "next/image";
import React from "react";

export default function CapsulesSection() {
  return (
    <section className="capsules-section gap-y-4 gap-x-6">
      {CAPSULES.map((c, i) => (
        <div key={i} className="w-full flex-col flex">
          <Image
            width={400}
            height={200}
            src={c.image}
            alt={c.title}
            loading="lazy"
            style={{ objectFit: "cover" }}
          />

          <div>
            <p>Capsule</p>
            <h1 className="uppercase font-InterExtraBold">{c.title}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}
