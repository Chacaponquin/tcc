import type { ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import RootLayout from "./layout";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: () => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
