"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { StageVisual } from "@/lib/stages";

export default function StageOverlay({
  position,
  baseScale,
  visual,
}: {
  position: [number, number, number];
  baseScale: number;
  visual: StageVisual;
}) {
  const glowRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const pulse = 1 + Math.sin(time * 2) * 0.06 * Math.max(visual.intensity, 0.1);
    if (glowRef.current) {
      glowRef.current.scale.setScalar(baseScale * visual.scale * pulse);
      const mat = glowRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.08 + visual.intensity * 0.4;
    }
    if (wireRef.current) {
      wireRef.current.scale.setScalar(baseScale * visual.scale * (1.35 + pulse * 0.12));
      wireRef.current.rotation.y += 0.008;
      wireRef.current.rotation.x += 0.004;
      const mat = wireRef.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.15 + visual.intensity * 0.7;
    }
  });

  if (visual.intensity === 0) {
    return (
      <mesh position={position}>
        <sphereGeometry args={[baseScale * 1.05, 20, 20]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.15} />
      </mesh>
    );
  }

  return (
    <group position={position}>
      <mesh>
        <sphereGeometry args={[baseScale * 1.1, 24, 24]} />
        <meshBasicMaterial color={visual.color} transparent opacity={0.35} />
      </mesh>
      <mesh ref={glowRef}>
        <sphereGeometry args={[baseScale, 24, 24]} />
        <meshBasicMaterial color={visual.color} transparent opacity={0.2} />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[baseScale * 1.4, 1]} />
        <meshBasicMaterial color={visual.color} wireframe transparent opacity={0.5} />
      </mesh>
    </group>
  );
}
