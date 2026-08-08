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

export type OrganData = {
  organs: Organ[];
};
