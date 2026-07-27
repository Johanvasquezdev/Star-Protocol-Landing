"use client";

import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function Core() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.18;
    ref.current.rotation.y += delta * 0.28;
  });

  return (
    <Float speed={2.4} rotationIntensity={0.8} floatIntensity={1.6}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.6, 5]} />
        <MeshDistortMaterial color="#25d6ff" emissive="#446cff" emissiveIntensity={0.8} roughness={0.15} metalness={0.7} distort={0.28} speed={2.2} />
      </mesh>
      <mesh>
        <torusGeometry args={[2.25, 0.012, 16, 160]} />
        <meshBasicMaterial color="#8d4dff" />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0.5, 0.2]}>
        <torusGeometry args={[2.55, 0.01, 16, 160]} />
        <meshBasicMaterial color="#e244ff" />
      </mesh>
    </Float>
  );
}

export function ThreeHeroObject() {
  return (
    <div className="h-[300px] w-full sm:h-[390px] lg:h-[440px] xl:h-[480px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 46 }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 2, 4]} intensity={28} color="#25d6ff" />
        <pointLight position={[-3, -2, 3]} intensity={15} color="#8d4dff" />
        <Sparkles count={90} scale={7} size={1.6} speed={0.32} color="#9eefff" />
        <Core />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  );
}
