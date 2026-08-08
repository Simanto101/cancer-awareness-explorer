"use client";

import { useT, type Trans } from "@/lib/i18n";

const placeholder: Trans = {
  en: "3D body explorer coming next. Choose a language above.",
  bn: "তিন মাত্রিক বডি এক্সপ্লোরার শীঘ্রই আসছে। উপরে ভাষা নির্বাচন করুন।",
};

const disclaimer: Trans = {
  en: "Educational awareness tool - not medical advice.",
  bn: "শিক্ষামূলক সচেতনতা টুল - চিকিৎসা পরামর্শ নয়।",
};

export default function Home() {
  const t = useT();
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <h2 className="text-xl font-medium text-slate-200 md:text-2xl">
        {t(placeholder)}
      </h2>
      <p className="text-sm text-amber-300/80">{t(disclaimer)}</p>
    </div>
  );
}
