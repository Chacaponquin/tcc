import React from "react";
import { Footer, Navbar, Presentation } from "./home/components";

export default function Root() {
  return (
    <main>
      <Navbar />
      <Presentation />
      <Footer />
    </main>
  );
}
