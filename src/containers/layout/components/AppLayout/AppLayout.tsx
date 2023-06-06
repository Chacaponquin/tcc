import React from "react";
import HeaderLayout from "../HeaderLayout/HeaderLayout";
import { Footer, Navbar } from "./components";

export default function AppLayout({
  children,
  description,
  title,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <React.Fragment>
      <HeaderLayout title={title} description={description}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </HeaderLayout>
    </React.Fragment>
  );
}
