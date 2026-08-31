import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Points,
  PointMaterial,
  Torus,
  AdaptiveDpr,
  Preload,
} from "@react-three/drei";
import * as THREE from "three";

/**
 * PRNG deterministik (mulberry32). Dipakai agar posisi partikel/pecahan
 * selalu sama di setiap render — Math.random() tidak boleh dipanggil saat
 * render karena hasilnya tidak stabil.
 */
function createRandom(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SHARD_PALETTE = ["#818cf8", "#22d3ee", "#a855f7", "#e0e7ff"];

/** Data pecahan kristal, dihitung sekali di module scope. */
const SHARD_DATA = (() => {
  const rand = createRandom(20260214);
  return Array.from({ length: 14 }, (_, i) => ({
    key: i,
    position: [
      (rand() - 0.5) * 7.5,
      (rand() - 0.5) * 5.5,
      (rand() - 0.5) * 4 - 1,
    ],
    scale: 0.07 + rand() * 0.16,
    speed: 0.6 + rand() * 1.6,
    color: SHARD_PALETTE[i % SHARD_PALETTE.length],
  }));
})();

/** Membuat posisi partikel debu secara deterministik. */
function buildDustPositions(count) {
  const rand = createRandom(count * 7919 + 13);
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    arr[i * 3] = (rand() - 0.5) * 16;
    arr[i * 3 + 1] = (rand() - 0.5) * 11;
    arr[i * 3 + 2] = (rand() - 0.5) * 9 - 2;
  }
  return arr;
}

/**
 * Blob utama: sphere dengan distort material yang bereaksi ke posisi mouse.
 */
function DistortBlob() {
  const mesh = useRef();

  useFrame((state, delta) => {
    if (!mesh.current) return;
    const { x, y } = state.pointer;
    mesh.current.rotation.y += delta * 0.16;
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x,
      y * 0.25,
      0.05
    );
    mesh.current.position.x = THREE.MathUtils.lerp(
      mesh.current.position.x,
      x * 0.35,
      0.04
    );
  });

  return (
    <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh ref={mesh} scale={1.55}>
        <icosahedronGeometry args={[1, 28]} />
        <MeshDistortMaterial
          color="#4f46e5"
          emissive="#1e1b4b"
          emissiveIntensity={0.5}
          roughness={0.18}
          metalness={0.72}
          distort={0.42}
          speed={1.7}
        />
      </mesh>
    </Float>
  );
}

/** Cincin orbit tipis di sekitar blob. */
function OrbitRings() {
  const group = useRef();

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.z += delta * 0.09;
      group.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <group ref={group}>
      <Torus args={[2.55, 0.008, 16, 128]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.55} />
      </Torus>
      <Torus args={[3.05, 0.006, 16, 128]} rotation={[Math.PI / 1.7, 0.4, 0]}>
        <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
      </Torus>
    </group>
  );
}

/** Pecahan kristal kecil yang mengorbit. */
function Shards() {
  return SHARD_DATA.map((s) => (
    <Float
      key={s.key}
      speed={s.speed}
      rotationIntensity={2}
      floatIntensity={2.2}
    >
      <Icosahedron args={[1, 0]} position={s.position} scale={s.scale}>
        <meshStandardMaterial
          color={s.color}
          roughness={0.15}
          metalness={0.9}
          emissive={s.color}
          emissiveIntensity={0.35}
        />
      </Icosahedron>
    </Float>
  ));
}

/** Partikel bintang halus. */
function Dust({ count = 700 }) {
  const positions = useMemo(() => buildDustPositions(count), [count]);

  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#c7d2fe"
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#05050a"]} />
      <fog attach="fog" args={["#05050a", 7, 16]} />

      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 5, 5]} intensity={2.1} color="#a5b4fc" />
      <pointLight position={[-5, -3, 2]} intensity={22} color="#22d3ee" />
      <pointLight position={[5, 3, -3]} intensity={16} color="#a855f7" />

      <Suspense fallback={null}>
        <DistortBlob />
        <OrbitRings />
        <Shards />
        <Dust />
        <Preload all />
      </Suspense>

      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
