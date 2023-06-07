import { PrimaryButton } from "@/modules/shared/modules/buttons/components";
import React from "react";

export default function ButtonsSection({
  handleSubmit,
}: {
  handleSubmit: () => void;
}) {
  return (
    <div className="flex justify-end gap-x-5">
      <PrimaryButton text="Guardar" size="medium" onClick={handleSubmit} />
    </div>
  );
}