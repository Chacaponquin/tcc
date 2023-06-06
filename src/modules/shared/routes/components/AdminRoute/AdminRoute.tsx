import { ROUTES } from "@/app/constants/ROUTES";
import { useUserServices } from "@/modules/user/services";
import { useRouter } from "next/navigation";
import React from "react";

export default function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const { user } = useUserServices();

  if (!user) {
    console.log(route);
    route.replace(ROUTES.ROOT);
  }

  return <React.Fragment>{children}</React.Fragment>;
}
