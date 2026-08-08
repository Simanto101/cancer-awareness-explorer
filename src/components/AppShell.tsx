"use client";

import { LanguageProvider } from "@/lib/i18n";
import Header from "./Header";
import { useT, type Trans } from "@/lib/i18n";

const disclaimer: Trans = {
  en: "Educational awareness tool - NOT medical advice or diagnosis. See a qualified doctor for any health concerns.",
  bn: "শিক্ষামূলক সচেতনতা টুল - চিকিৎসা পরামর্শ বা রোগ নির্ণয় নয়। যেকোনো স্বাস্থ্য সমস্যায় যোগ্য চিকিৎসকের পরামর্শ নিন।",
};

function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-slate-800 bg-slate-900/95 px-4 py-2 text-center text-[11px] text-amber-300/90">
      {t(disclaimer)}
    </footer>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="flex min-h-dvh flex-col">
        <Header />
        <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
