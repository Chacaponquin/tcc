import { CAPSULES } from "@/modules/capsules/constants/CAPSULES";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CapsulesSection() {
  return (
    <section className="capsules-section gap-y-12 gap-x-6">
      {CAPSULES.map((c, i) => (
        <Link
          className="w-full flex-col flex transition-all duration-300 hover:scale-105 cursor-pointer"
          key={i}
          href={`/view/${i}`}
        >
          <Image
            width={400}
            height={200}
            src={c.image}
            alt={c.title}
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
          <div className="text-xl mt-2">
            <p className="font-InterSemiBold">Capsule</p>
            <h1 className="uppercase font-InterExtraBold">{c.title}</h1>
          </div>
        </Link>
      ))}
    </section>
  );
}
