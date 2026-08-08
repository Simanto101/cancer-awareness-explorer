"use client";

import React, { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "bn";

export type Trans = { en: string; bn: string };

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  return useContext(LanguageContext);
}

export function useT(): (t: Trans) => string {
  const { lang } = useLang();
  return (t) => t[lang];
}
