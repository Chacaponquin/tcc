import React from "react";
import { Capsulels, Presentation } from "../containers/home/components";
import { AppLayout } from "@/containers/layout/components";

export default function Root() {
  return (
    <AppLayout
      title="The Crystal Chapel"
      description="Test website for The Crystal Chapel"
    >
      <Presentation />
      <Capsulels />
    </AppLayout>
  );
}
