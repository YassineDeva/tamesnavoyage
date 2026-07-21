"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/** Warm drifting dust/stars — evokes a desert night sky behind the hero. */
function DustField({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    const p = ref.current;
    if (!p) return;
    p.rotation.y += delta * 0.015;
    p.position.x = THREE.MathUtils.lerp(p.position.x, state.pointer.x * 0.5, 0.04);
    p.position.y = THREE.MathUtils.lerp(p.position.y, state.pointer.y * 0.3, 0.04);
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#e3c576"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** A faint, slowly-spinning eight-point wireframe echoing the zellige star. */
function StarWire() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });
  return (
    <mesh ref={ref} position={[2.4, 0.4, -1]} scale={2.6}>
      <torusGeometry args={[1, 0.006, 8, 8]} />
      <meshBasicMaterial color="#d0694a" transparent opacity={0.28} wireframe />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 62 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
      aria-hidden
    >
      <DustField />
      <StarWire />
    </Canvas>
  );
}
