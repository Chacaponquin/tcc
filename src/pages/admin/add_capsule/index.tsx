import {
  ButtonsSection,
  FormSection,
  ImagePicker,
} from "@/containers/add_capsule/components";
import { AppLayout } from "@/containers/layout/components";
import { AdminRoute } from "@/modules/shared/routes/components";
import React from "react";

export default function AddCapsule() {
  return (
    <AppLayout title="Add Capsule" description="Add Capsule">
      <AdminRoute>
        <div className="w-full min-h-screen flex justify-center items-center px-10 flex-col">
          <div className="shadow-lg px-8 py-5 flex flex-col w-[550px] gap-y-3 border-2 border-slate-300 rounded-sm">
            <ImagePicker />
            <FormSection />
            <ButtonsSection />
          </div>
        </div>
      </AdminRoute>
    </AppLayout>
  );
}
