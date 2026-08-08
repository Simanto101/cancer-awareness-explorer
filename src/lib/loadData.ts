import raw from "@/data/organs.json";
import type { OrganData, Organ, CancerType } from "./types";

export const organs: Organ[] = (raw as OrganData).organs;
export const cancerTypes: CancerType[] = (raw as OrganData).cancer_types;

export function getOrgan(id: string | null): Organ | null {
  if (!id) return null;
  return organs.find((o) => o.id === id) ?? null;
}

export function getCancersForOrgan(organId: string): CancerType[] {
  return cancerTypes.filter((c) => c.organ_id === organId);
}

export function getCancerType(id: string): CancerType | null {
  return cancerTypes.find((c) => c.id === id) ?? null;
}
