import type { ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { SupabaseProvider } from "@/app/context";
import { UserProvider } from "@/modules/user/context";
import { Toaster } from "react-hot-toast";

import "../app/globals.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <SupabaseProvider>
      <UserProvider>
        <Toaster />
        <Component {...pageProps} />
      </UserProvider>
    </SupabaseProvider>
  );
}
