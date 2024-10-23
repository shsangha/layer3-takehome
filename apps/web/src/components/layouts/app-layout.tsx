"use client";

import { ReactNode } from "react";
import { Layout } from "@repo/ui/components";
import { useDisclosure } from "@repo/hooks";
import Header from "@/components/layouts/header";
import Navbar from "@/components/layouts/navbar";

export default function AppLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();

  const setClose = () => {
    close();
  };

  return (
    <Layout
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <Navbar setClose={setClose} />
      <Layout.Main p="lg" mt={60}>
        {children}
      </Layout.Main>
    </Layout>
  );
}
