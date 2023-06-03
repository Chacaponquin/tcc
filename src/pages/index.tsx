import React from "react";
import {
  Capsulels,
  Footer,
  Navbar,
  Presentation,
} from "../containers/home/components";

export default function Root() {
  return (
    <main>
      <Navbar />
      <Presentation />
      <Capsulels />
      <Footer />
    </main>
  );
}
