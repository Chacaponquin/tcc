import { useUserServices } from "@/modules/user/services";
import { useRouter } from "next/router";
import React from "react";

export default function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();

  const { user } = useUserServices();

  if (!user) {
    route.replace("/");
  }

  return <React.Fragment>{children}</React.Fragment>;
}
