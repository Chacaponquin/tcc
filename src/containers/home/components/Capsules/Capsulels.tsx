import React from "react";
import { CapsulesHeader, CapsulesSection } from "./components";

import "./capsules.css";
import { Capsule } from "@/modules/capsules/interfaces/capsule.interface";

export default function Capsulels({ capsules }: { capsules: Array<Capsule> }) {
  return (
    <section className="py-12 flex w-full justify-center">
      <div className="w-full max-w-[1400px] px-10">
        <CapsulesHeader />
        <CapsulesSection capsules={capsules} />
      </div>
    </section>
  );
}
