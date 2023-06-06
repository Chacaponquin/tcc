import type { ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import RootLayout from "./layout";
import { SupabaseProvider } from "@/app/context";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <SupabaseProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SupabaseProvider>
  );
}
