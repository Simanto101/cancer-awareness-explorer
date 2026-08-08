"use client";

import { useState } from "react";
import BodyCanvas from "@/components/body/BodyCanvas";
import { useT, useLang, type Trans } from "@/lib/i18n";
import { organs, getOrgan } from "@/lib/loadData";

const hint: Trans = {
  en: "Click a glowing marker to explore an organ.",
  bn: "একটি অঙ্গ অন্বেষণ করতে চকচকে মার্কারে ক্লিক করুন।",
};

const selectedHint: Trans = {
  en: "selected - information panel coming next.",
  bn: "নির্বাচিত - তথ্য প্যানেল শীঘ্রই আসছে।",
};

export default function Home() {
  const t = useT();
  const { lang } = useLang();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = getOrgan(selectedId);

  return (
    <div className="relative flex-1 overflow-hidden">
      <BodyCanvas
        organs={organs}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center px-4">
        <div className="rounded-full bg-slate-900/80 px-4 py-2 text-center text-xs text-teal-100 shadow-lg md:text-sm">
          {selected
            ? `${lang === "en" ? selected.name_en : selected.name_bn} ${t(selectedHint)}`
            : t(hint)}
        </div>
      </div>
    </div>
  );
}
