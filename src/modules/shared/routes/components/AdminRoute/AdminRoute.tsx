import { ROUTES } from "@/app/constants/ROUTES";
import { useUserServices } from "@/modules/user/services";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const route = useRouter();
  const { user, initFetchUserLoading } = useUserServices();

  useEffect(() => {
    if (!user && !initFetchUserLoading) {
      route.replace(ROUTES.ROOT);
    }
  }, [route, user, initFetchUserLoading]);

  return <React.Fragment>{children}</React.Fragment>;
}
