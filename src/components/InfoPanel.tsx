"use client";

import React, { useState } from "react";
import type { Organ, CancerType } from "@/lib/types";
import { getCancersForOrgan } from "@/lib/loadData";
import { useT, type Trans } from "@/lib/i18n";

const hdrCancerTypes: Trans = {
  en: "Cancer types of this organ",
  bn: "এই অঙ্গের ক্যান্সারের ধরন",
};
const hdrSymptoms: Trans = {
  en: "Possible symptoms",
  bn: "সম্ভাব্য লক্ষণসমূহ",
};
const hdrWhenToSee: Trans = {
  en: "When to see a doctor (red flags)",
  bn: "কখন ডাক্তার দেখাবেন (লাল পতাকা)",
};
const hdrPrevention: Trans = {
  en: "Prevention tips",
  bn: "প্রতিরোধের পরামর্শ",
};
const hdrSources: Trans = {
  en: "Sources",
  bn: "সূত্র",
};
const noCancers: Trans = {
  en: "Detailed cancer data for this organ is coming soon.",
  bn: "এই অঙ্গের বিস্তারিত ক্যান্সার তথ্য শীঘ্রই আসছে।",
};
const closing: Trans = {
  en: "Close",
  bn: "বন্ধ করুন",
};

function InfoPanel({
  organ,
  onClose,
}: {
  organ: Organ;
  onClose: () => void;
}) {
  const t = useT();
  const cancers = getCancersForOrgan(organ.id);
  const [activeId, setActiveId] = useState<string | null>(
    cancers.length > 0 ? cancers[0].id : null
  );
  const active: CancerType | null = cancers.find((c) => c.id === activeId) ?? null;

  return (
    <div className="pointer-events-auto flex h-full w-full flex-col overflow-hidden rounded-t-2xl border-t border-slate-700 bg-slate-900/95 shadow-2xl backdrop-blur md:rounded-r-2xl md:rounded-t-none md:border-l md:border-t-0">
      <div className="flex items-start justify-between gap-3 border-b border-slate-700/70 px-4 py-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-50">
            {t({ en: organ.name_en, bn: organ.name_bn })}
          </h2>
          <p className="text-[11px] uppercase tracking-wider text-teal-400">
            {t(hdrCancerTypes)}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-slate-600"
        >
          {t(closing)}
        </button>
      </div>

      {cancers.length === 0 ? (
        <div className="p-4 text-sm text-slate-300">{t(noCancers)}</div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex gap-1.5 overflow-x-auto border-b border-slate-700/70 px-3 py-2">
            {cancers.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveId(c.id)}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeId === c.id
                    ? "bg-teal-500 text-slate-950"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {t({ en: c.name_en, bn: c.name_bn })}
              </button>
            ))}
          </div>

          {active && (
            <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4">
              <p className="text-sm leading-relaxed text-slate-200">
                {t({ en: active.description_en, bn: active.description_bn })}
              </p>

              <Section title={t(hdrSymptoms)}>
                <ul className="list-disc space-y-1 pl-4 text-sm text-slate-300">
                  {active.symptoms.map((s, i) => (
                    <li key={i}>{t({ en: s.text_en, bn: s.text_bn })}</li>
                  ))}
                </ul>
              </Section>

              <Section title={t(hdrWhenToSee)} accent>
                <ul className="list-disc space-y-1 pl-4 text-sm text-red-200">
                  {active.when_to_see_doctor.map((s, i) => (
                    <li key={i}>{t({ en: s.text_en, bn: s.text_bn })}</li>
                  ))}
                </ul>
              </Section>

              <Section title={t(hdrPrevention)}>
                <ul className="list-disc space-y-1 pl-4 text-sm text-slate-300">
                  {active.general_prevention_tips.map((s, i) => (
                    <li key={i}>{t({ en: s.text_en, bn: s.text_bn })}</li>
                  ))}
                </ul>
              </Section>

              <Section title={t(hdrSources)}>
                <ul className="space-y-1 text-xs text-slate-400">
                  {active.sources.map((s, i) => (
                    <li key={i}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-slate-500 underline-offset-2 hover:text-teal-300"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Section({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <section>
      <h3
        className={`mb-1.5 text-xs font-semibold uppercase tracking-wider ${
          accent ? "text-red-300" : "text-teal-300"
        }`}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

export default InfoPanel;
