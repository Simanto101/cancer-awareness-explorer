"use client";

import React from "react";

const BODY_MATERIAL = "#3f5468";
const ACCENT = "#14b8a6";

type Part = {
  shape: "box" | "sphere" | "cylinder" | "capsule";
  args?: number[];
  position: [number, number, number];
  scale?: number;
  material: string;
  rotation?: [number, number, number];
};

const PARTS: Part[] = [
  // Head
  { shape: "sphere", args: [0.14, 24, 24], position: [0, 1.74, 0], material: BODY_MATERIAL },
  // Neck
  { shape: "cylinder", args: [0.05, 0.06, 0.12, 16], position: [0, 1.55, 0], material: BODY_MATERIAL },
  // Chest / torso (upper)
  { shape: "capsule", args: [0.16, 0.5, 8, 16], position: [0, 1.28, 0], material: BODY_MATERIAL },
  // Abdomen (lower torso)
  { shape: "capsule", args: [0.15, 0.42, 8, 16], position: [0, 0.9, 0], material: BODY_MATERIAL },
  // Pelvis
  { shape: "capsule", args: [0.16, 0.2, 8, 16], position: [0, 0.62, 0], material: BODY_MATERIAL },
  // Shoulders
  { shape: "sphere", args: [0.09, 16, 16], position: [-0.22, 1.44, 0], material: BODY_MATERIAL },
  { shape: "sphere", args: [0.09, 16, 16], position: [0.22, 1.44, 0], material: BODY_MATERIAL },
  // Upper arms
  { shape: "cylinder", args: [0.055, 0.065, 0.4, 12], position: [-0.25, 1.2, 0], material: BODY_MATERIAL },
  { shape: "cylinder", args: [0.055, 0.065, 0.4, 12], position: [0.25, 1.2, 0], material: BODY_MATERIAL },
  // Forearms
  { shape: "cylinder", args: [0.05, 0.055, 0.38, 12], position: [-0.27, 0.82, 0], material: BODY_MATERIAL },
  { shape: "cylinder", args: [0.05, 0.055, 0.38, 12], position: [0.27, 0.82, 0], material: BODY_MATERIAL },
  // Hands
  { shape: "sphere", args: [0.055, 12, 12], position: [-0.28, 0.63, 0], material: BODY_MATERIAL },
  { shape: "sphere", args: [0.055, 12, 12], position: [0.28, 0.63, 0], material: BODY_MATERIAL },
  // Upper legs
  { shape: "cylinder", args: [0.09, 0.1, 0.42, 12], position: [-0.1, 0.42, 0], material: BODY_MATERIAL },
  { shape: "cylinder", args: [0.09, 0.1, 0.42, 12], position: [0.1, 0.42, 0], material: BODY_MATERIAL },
  // Lower legs
  { shape: "cylinder", args: [0.07, 0.08, 0.4, 12], position: [-0.1, 0.13, 0], material: BODY_MATERIAL },
  { shape: "cylinder", args: [0.07, 0.08, 0.4, 12], position: [0.1, 0.13, 0], material: BODY_MATERIAL },
  // Feet
  { shape: "sphere", args: [0.07, 12, 12], position: [-0.1, 0.02, 0.04], material: BODY_MATERIAL },
  { shape: "sphere", args: [0.07, 12, 12], position: [0.1, 0.02, 0.04], material: BODY_MATERIAL },
  // Collar accent strip (non-sexualized, purely cosmetic)
  { shape: "box", args: [0.3, 0.02, 0.3], position: [0, 1.46, 0.0], material: ACCENT },
];

function renderPart(part: Part, i: number) {
  const common = {
    key: i,
    position: part.position as unknown as [number, number, number],
    rotation: part.rotation,
  };
  switch (part.shape) {
    case "sphere":
      return (
        <mesh {...common}>
          <sphereGeometry args={part.args as [number, number, number]} />
          <meshStandardMaterial color={part.material} roughness={0.85} />
        </mesh>
      );
    case "cylinder":
      return (
        <mesh {...common}>
          <cylinderGeometry args={part.args as [number, number, number, number]} />
          <meshStandardMaterial color={part.material} roughness={0.85} />
        </mesh>
      );
    case "capsule":
      return (
        <mesh {...common}>
          <capsuleGeometry args={part.args as [number, number, number, number]} />
          <meshStandardMaterial color={part.material} roughness={0.85} />
        </mesh>
      );
    case "box":
      return (
        <mesh {...common}>
          <boxGeometry args={part.args as [number, number, number]} />
          <meshStandardMaterial color={part.material} roughness={0.6} />
        </mesh>
      );
  }
}

export default function BodyModel() {
  return <group>{PARTS.map((p, i) => renderPart(p, i))}</group>;
}
