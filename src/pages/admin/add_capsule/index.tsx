import { AppLayout } from "@/containers/layout/components";
import { AdminRoute } from "@/modules/shared/routes/components";
import React from "react";

export default function AddCapsule() {
  return (
    <AppLayout title="Add Capsule" description="Add Capsule">
      <AdminRoute>
        <div>AddCapsule</div>
      </AdminRoute>
    </AppLayout>
  );
}
