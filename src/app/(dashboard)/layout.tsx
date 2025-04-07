import type { Metadata } from "next";
import QueryProvider from "@/providers/QueryProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "LOSLC Competition - Linux & Open Source Lovers",
  description:
    "Join the Linux & Open Source Lovers Competition in collaboration with ETHIX community. Showcase your development and cybersecurity skills!",
  keywords: [
    "Linux",
    "Open Source",
    "Competition",
    "Development",
    "Cybersecurity",
    "ETHIX",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" className="mt-14" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
