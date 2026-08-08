"use client";

import { LanguageProvider } from "@/lib/i18n";
import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
      </div>
    </LanguageProvider>
  );
}
