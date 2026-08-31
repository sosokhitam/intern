import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import profile from "../../assets/profile.png";

/** Panjang tali dari kait sampai klip kartu (px). */
const ROPE_LENGTH = 132;
/** Jarak maksimal tarikan horizontal (px). */
const DRAG_LIMIT = 118;

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function LanyardCard() {
  const prefersReducedMotion = useReducedMotion();
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);

  // Sudut ayunan dari posisi horizontal kartu.
  const angle = useTransform(x, (value) =>
    Math.asin(clamp(value / ROPE_LENGTH, -0.92, 0.92)),
  );
  // Rotasi CSS positif = searah jarum jam (ujung bawah ke kiri) -> perlu negatif.
  const rotate = useTransform(angle, (a) => -(a * 180) / Math.PI);
  // Kartu ikut terangkat saat mengayun keluar.
  const lift = useTransform(
    angle,
    (a) => ROPE_LENGTH * Math.cos(a) - ROPE_LENGTH,
  );

  // Goyangan halus saat tidak disentuh.
  useEffect(() => {
    if (isDragging || prefersReducedMotion) return;

    const controls = animate(x, [0, 22, -18, 12, 0], {
      duration: 11,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    });

    return () => controls.stop();
  }, [x, isDragging, prefersReducedMotion]);

  return (
    <div className="relative mx-auto w-full max-w-[360px] select-none">
      {/* Glow latar */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-indigo-500/25 blur-[90px]" />

      <div className="relative h-[700px]">
        {/* Kait / gantungan atas */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20">
          <div className="h-2.5 w-28 rounded-full border border-white/12 bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700 shadow-lg shadow-black/40" />
          <div className="mx-auto mt-1 h-3 w-3 rounded-full border-2 border-zinc-400/70 bg-transparent" />
        </div>

        {/* Tali Lanyard Fabric Realistis */}
        <div className="absolute left-1/2 top-[18px] -translate-x-1/2 z-10">
          <motion.div
            style={{ rotate, transformOrigin: "top center" }}
            className="relative w-7 overflow-hidden rounded-b-sm shadow-md shadow-black/60"
          >
            {/* Base Kain (Gradien 3D + Tekstur Serat Anyaman) */}
            <div
              className="relative w-full"
              style={{
                height: ROPE_LENGTH,
                backgroundImage: `
                  linear-gradient(90deg, #312e81 0%, #4338ca 25%, #6366f1 50%, #4338ca 75%, #312e81 100%),
                  repeating-linear-gradient(45deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 2px, transparent 2px, transparent 4px)
                `,
                backgroundBlendMode: "overlay",
              }}
            >
              {/* Garis Jahitan Putus-Putus (Stitching) */}
              <div className="absolute inset-y-0 left-[3px] w-[1px] border-r border-dashed border-white/35" />
              <div className="absolute inset-y-0 right-[3px] w-[1px] border-r border-dashed border-white/35" />

              {/* Garis Lipatan Tengah Kain */}
              <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-black/35" />

              {/* Shading Gelap Samping untuk efek Kedalaman Kain */}
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Kartu yang bisa ditarik */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 18 + ROPE_LENGTH }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ left: -DRAG_LIMIT, right: DRAG_LIMIT }}
            dragElastic={0.12}
            dragSnapToOrigin
            dragTransition={{ bounceStiffness: 260, bounceDamping: 11 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            whileDrag={{ cursor: "grabbing", scale: 1.02 }}
            style={{ x, y: lift, rotate, transformOrigin: "top center" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="w-[258px] cursor-grab active:cursor-grabbing sm:w-[276px]"
            role="group"
            aria-label="Kartu nametag Agus Subekti — bisa ditarik dan diayunkan"
          >
            {/* Klip logam penjepit */}
            <div className="relative z-10 mx-auto -mb-2 h-7 w-14">
              <div className="h-4 w-full rounded-t-md border border-white/15 bg-gradient-to-b from-zinc-300 via-zinc-400 to-zinc-600 shadow-sm" />
              <div className="mx-auto h-3 w-8 rounded-b-md border border-t-0 border-white/15 bg-gradient-to-b from-zinc-500 to-zinc-700" />
            </div>

            <div className="glass relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[#0a0a14]/85 p-4 shadow-2xl shadow-black/60 backdrop-blur-xl">
              {/* Lubang tali */}
              <div className="mx-auto mb-3 h-2 w-16 rounded-full border border-white/12 bg-black/60" />

              <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10">
                <img
                  src={profile}
                  alt="Agus Subekti"
                  draggable={false}
                  className="pointer-events-none aspect-[3/4] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent opacity-75" />
                <span className="absolute left-3 top-3 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2.5 py-1 text-[10px] font-medium text-emerald-300 backdrop-blur">
                  ACTIVE
                </span>
              </div>

              <div className="mt-4 px-1">
                <p className="font-mono-alt text-[10px] uppercase tracking-[0.28em] text-indigo-300">
                  Full Stack Developer
                </p>
                <h3 className="font-display mt-1 text-lg font-bold leading-tight text-white">
                  Agus Subekti
                </h3>
                <p className="mt-0.5 text-[11px] text-zinc-500">
                  Informatics Engineering · ITERA
                </p>

                <div className="mt-3 flex items-end justify-between gap-3 border-t border-white/8 pt-3">
                  <div
                    aria-hidden
                    className="h-7 flex-1 rounded-sm opacity-70"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(90deg, #e4e4e7 0 1px, transparent 1px 3px, #e4e4e7 3px 5px, transparent 5px 8px)",
                    }}
                  />
                  <span className="font-mono-alt text-[10px] text-zinc-500">
                    ID·2026
                  </span>
                </div>
              </div>

              {/* Kilau kartu */}
              <div className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Hint interaksi */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="font-mono-alt absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] text-zinc-500"
        >
        </motion.p>
      </div>
    </div>
  );
}