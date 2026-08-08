export type Vec3 = { x: number; y: number; z: number };

export type OrganModel = {
  type: "sphere" | "ring";
  position: Vec3;
  scale: number;
};

export type Organ = {
  id: string;
  name_en: string;
  name_bn: string;
  model_mesh_id: string;
  model: OrganModel;
  cancers: string[];
};

export type Bilingual = { text_en: string; text_bn: string };

export type CancerStage = {
  stage: 0 | 1 | 2 | 3 | 4;
  label_en: string;
  label_bn: string;
  overlay_color: string;
  overlay_intensity: number;
  description_en: string;
  description_bn: string;
};

export type Source = { label: string; url: string };

export type CancerType = {
  id: string;
  name_en: string;
  name_bn: string;
  organ_id: string;
  description_en: string;
  description_bn: string;
  stages: CancerStage[];
  symptoms: Bilingual[];
  general_prevention_tips: Bilingual[];
  when_to_see_doctor: Bilingual[];
  sources: Source[];
};

export type OrganData = {
  organs: Organ[];
  cancer_types: CancerType[];
};
