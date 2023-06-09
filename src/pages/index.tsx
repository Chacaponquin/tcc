import React from "react";
import { Capsulels, Presentation } from "../containers/home/components";
import { AppLayout } from "@/containers/layout/components";
import { useHome } from "@/containers/home/hooks";

export default function Root() {
  const { capsules } = useHome();

  return (
    <AppLayout
      title="The Crystal Chapel"
      description="Test website for The Crystal Chapel"
    >
      <Presentation />
      <Capsulels capsules={capsules} />
    </AppLayout>
  );
}
