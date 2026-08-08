"use client";

import { STAGE_LEVELS, STAGE_VISUALS, type StageLevel } from "@/lib/stages";
import { useLang, type Trans } from "@/lib/i18n";

const hdr: Trans = {
  en: "What it might look like (abstract visualization)",
  bn: "এটি কেমন দেখতে হতে পারে (বিমূর্ত চিত্রায়ণ)",
};

export default function StageControl({
  stage,
  onChange,
}: {
  stage: StageLevel;
  onChange: (s: StageLevel) => void;
}) {
  const { lang } = useLang();
  return (
    <div className="rounded-xl border border-slate-700/70 bg-slate-800/60 px-3 py-2.5">
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
        {lang === "en" ? hdr.en : hdr.bn}
      </p>
      <div className="grid grid-cols-5 gap-1">
        {STAGE_LEVELS.map((level) => {
          const v = STAGE_VISUALS[level];
          const active = stage === level;
          return (
            <button
              key={level}
              type="button"
              onClick={() => onChange(level)}
              className={`flex flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-medium transition-colors ${
                active ? "text-slate-950" : "text-slate-300 hover:bg-slate-700/60"
              }`}
              style={active ? { backgroundColor: v.color } : undefined}
            >
              <span>{lang === "en" ? v.label_en : v.label_bn}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
