"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import BodyModel from "./BodyModel";
import OrganMarkers from "./OrganMarkers";
import type { Organ } from "@/lib/types";

type Props = {
  organs: Organ[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function RotatingGroup({
  children,
  selectedId,
}: {
  children: React.ReactNode;
  selectedId: string | null;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      const rotating = selectedId === null;
      if (rotating) {
        ref.current.rotation.y += delta * 0.25;
      }
    }
  });
  return (
    <group ref={ref} position={[0, -0.85, 0]}>
      {children}
    </group>
  );
}

export default function BodyCanvas({ organs, selectedId, onSelect }: Props) {
  return (
    <Canvas
      camera={{ position: [0.6, 0.7, 3.4], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <directionalLight position={[-3, 1, -2]} intensity={0.35} color="#7dd3fc" />
      <RotatingGroup selectedId={selectedId}>
        <BodyModel />
        <OrganMarkers organs={organs} selectedId={selectedId} onSelect={onSelect} />
      </RotatingGroup>
      <OrbitControls
        enablePan={false}
        minDistance={1.6}
        maxDistance={5}
        autoRotate={selectedId === null}
        autoRotateSpeed={0.8}
      />
    </Canvas>
  );
}
