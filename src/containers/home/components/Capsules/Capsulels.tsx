import React from "react";
import { CapsulesHeader, CapsulesSection } from "./components";

import "./capsules.css";

export default function Capsulels() {
  return (
    <section className="py-12 flex w-full justify-center">
      <div className="w-full max-w-[1400px] px-10">
        <CapsulesHeader />
        <CapsulesSection />
      </div>
    </section>
  );
}
