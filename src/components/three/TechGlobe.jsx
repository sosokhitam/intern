import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

/** Wireframe globe + titik-titik "node" yang berputar perlahan. */
function Globe() {
  const group = useRef();

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.3,
      0.04
    );
  });

  const nodes = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    const radius = 1.72;
    for (let i = 0; i < count; i += 1) {
      // distribusi fibonacci sphere agar merata
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.cos(phi);
      arr[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, []);

  return (
    <group ref={group}>
      <Sphere args={[1.62, 32, 32]}>
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.22}
        />
      </Sphere>

      <Sphere args={[1.5, 48, 48]}>
        <meshStandardMaterial
          color="#0b0b18"
          roughness={0.25}
          metalness={0.85}
          emissive="#1e1b4b"
          emissiveIntensity={0.45}
        />
      </Sphere>

      <Points positions={nodes} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22d3ee"
          size={0.05}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function TechGlobe() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 5 ], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.8} color="#a5b4fc" />
      <pointLight position={[-4, -2, 2]} intensity={16} color="#22d3ee" />

      <Suspense fallback={null}>
        <Globe />
      </Suspense>
    </Canvas>
  );
}
