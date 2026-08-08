"use client";

import { useState } from "react";
import BodyCanvas from "@/components/body/BodyCanvas";
import InfoPanel from "@/components/InfoPanel";
import { useT, type Trans } from "@/lib/i18n";
import { organs, getOrgan } from "@/lib/loadData";
import type { StageLevel } from "@/lib/stages";

const hint: Trans = {
  en: "Click a glowing marker to explore an organ.",
  bn: "একটি অঙ্গ অন্বেষণ করতে চকচকে মার্কারে ক্লিক করুন।",
};

export default function Home() {
  const t = useT();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [stage, setStage] = useState<StageLevel>(0);
  const selected = getOrgan(selectedId);

  const handleSelect = (id: string) => {
    if (id !== selectedId) setStage(0);
    setSelectedId(id);
  };

  return (
    <div className="relative flex-1 overflow-hidden">
      <BodyCanvas
        organs={organs}
        selectedId={selectedId}
        stage={stage}
        onSelect={handleSelect}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-center px-4">
        <div className="rounded-full bg-slate-900/80 px-4 py-2 text-center text-xs text-teal-100 shadow-lg md:text-sm">
          {t(hint)}
        </div>
      </div>
      {selected && (
        <div className="pointer-events-none absolute inset-0 flex items-end md:items-stretch md:justify-end">
          <div className="pointer-events-auto w-full md:w-[400px] md:max-w-[90vw]">
            <InfoPanel
              organ={selected}
              stage={stage}
              onStageChange={setStage}
              onClose={() => setSelectedId(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
