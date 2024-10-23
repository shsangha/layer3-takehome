import { ReactNode } from "react";
import { ThemeProvider } from "@repo/ui/components";
import DocumentInitialization from "@/app/document-init";
import AppLayout from "@/components/layouts/app-layout";
import ReactQueryProvider from "@/app/react-query-provider";

export const metadata = {
  title: "Layer3 Takehome",
  description: "Takehome assignment for Layer3 engineering",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <DocumentInitialization>
      <ThemeProvider defaultColorScheme="light">
        <ReactQueryProvider>
          <AppLayout>{children}</AppLayout>
        </ReactQueryProvider>
      </ThemeProvider>
    </DocumentInitialization>
  );
}
