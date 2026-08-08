"use client";

import React, { useState } from "react";
import { Html } from "@react-three/drei";
import type { Organ } from "@/lib/types";
import { useLang } from "@/lib/i18n";

type Props = {
  organs: Organ[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

const MARKER_COLOR = "#22d3ee";
const MARKER_HOVER = "#f59e0b";

export default function OrganMarkers({ organs, selectedId, onSelect }: Props) {
  const { lang } = useLang();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {organs.map((organ) => {
        const p = organ.model.position;
        const hovered = hoveredId === organ.id;
        const selected = selectedId === organ.id;
        return (
          <group key={organ.id}>
            <mesh
              position={[p.x, p.y, p.z]}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(organ.id);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredId(organ.id);
              }}
              onPointerOut={() => setHoveredId(null)}
            >
              <sphereGeometry args={[organ.model.scale, 16, 16]} />
              <meshBasicMaterial
                color={selected ? MARKER_HOVER : hovered ? MARKER_HOVER : MARKER_COLOR}
                transparent
                opacity={0.9}
              />
            </mesh>
            <mesh position={[p.x, p.y, p.z]} scale={1.6}>
              <sphereGeometry args={[organ.model.scale, 8, 8]} />
              <meshBasicMaterial color={MARKER_COLOR} transparent opacity={0.12} />
            </mesh>
            <Html
              position={[p.x, p.y + organ.model.scale + 0.09, p.z]}
              center
              distanceFactor={8}
              style={{ pointerEvents: "none" }}
            >
              <div
                className={`whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors ${
                  hovered || selected
                    ? "bg-amber-400 text-slate-950"
                    : "bg-slate-800/90 text-teal-200"
                }`}
              >
                {lang === "en" ? organ.name_en : organ.name_bn}
              </div>
            </Html>
          </group>
        );
      })}
    </>
  );
}
