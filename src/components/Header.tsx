"use client";

import { useLang, useT, type Trans } from "@/lib/i18n";

const title: Trans = {
  en: "3D Full-Body Cancer Awareness Explorer",
  bn: "৩ডি ফুল-বডি ক্যান্সার সচেতনতা এক্সপ্লোরার",
};

const tagline: Trans = {
  en: "Explore where cancers form across the human body. Educational awareness tool.",
  bn: "মানবদেহের বিভিন্ন স্থানে ক্যান্সার কোথায় তৈরি হয় তা জানুন। শিক্ষামূলক সচেতনতা টুল।",
};

const disclaimer: Trans = {
  en: "This is an educational awareness tool. It is NOT medical advice, diagnosis, or a substitute for seeing a doctor.",
  bn: "এটি একটি শিক্ষামূলক সচেতনতা টুল। এটি চিকিৎসা পরামর্শ, রোগ নির্ণয় বা ডাক্তার দেখানোর বিকল্প নয়।",
};

export default function Header() {
  const { lang, setLang } = useLang();
  const t = useT();

  return (
    <header className="flex w-full items-center justify-between gap-4 px-4 py-3 md:px-6">
      <div className="flex flex-col">
        <h1 className="text-base font-semibold leading-tight md:text-lg">
          {t(title)}
        </h1>
        <p className="hidden text-xs text-slate-400 md:block">{t(tagline)}</p>
      </div>
      <div className="flex shrink-0 items-center gap-1 rounded-full bg-slate-800 p-1 text-xs font-medium">
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            lang === "en" ? "bg-teal-500 text-slate-950" : "text-slate-300 hover:text-white"
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLang("bn")}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            lang === "bn" ? "bg-teal-500 text-slate-950" : "text-slate-300 hover:text-white"
          }`}
        >
          বাংলা
        </button>
      </div>
      <div className="hidden max-w-xs text-right text-[11px] leading-snug text-amber-300/90 lg:block">
        {t(disclaimer)}
      </div>
    </header>
  );
}
