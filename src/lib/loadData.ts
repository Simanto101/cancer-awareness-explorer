import raw from "@/data/organs.json";
import type { OrganData, Organ } from "./types";

export const organs: Organ[] = (raw as OrganData).organs;

export function getOrgan(id: string | null): Organ | null {
  if (!id) return null;
  return organs.find((o) => o.id === id) ?? null;
}
