export type StageLevel = 0 | 1 | 2 | 3 | 4;

export type StageVisual = {
  color: string;
  intensity: number;
  scale: number;
  label_en: string;
  label_bn: string;
};

export const STAGE_VISUALS: Record<StageLevel, StageVisual> = {
  0: { color: "#22d3ee", intensity: 0, scale: 1, label_en: "Healthy", label_bn: "স্বাস্থ্যকর" },
  1: { color: "#fbbf24", intensity: 0.35, scale: 1.15, label_en: "Stage 1", label_bn: "ধাপ ১" },
  2: { color: "#f97316", intensity: 0.55, scale: 1.3, label_en: "Stage 2", label_bn: "ধাপ ২" },
  3: { color: "#ef4444", intensity: 0.75, scale: 1.45, label_en: "Stage 3", label_bn: "ধাপ ৩" },
  4: { color: "#991b1b", intensity: 1, scale: 1.6, label_en: "Stage 4", label_bn: "ধাপ ৪" },
};

export const STAGE_LEVELS: StageLevel[] = [0, 1, 2, 3, 4];
