import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Kartu dengan efek tilt 3D mengikuti kursor + spotlight glow.
 *
 * Props:
 * - intensity: seberapa besar rotasi (derajat)
 * - glare: aktifkan highlight cahaya
 */
export default function TiltCard({
  children,
  className = "",
  intensity = 10,
  glare = true,
  ...rest
}) {
  const ref = useRef(null);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const springCfg = { stiffness: 220, damping: 22, mass: 0.4 };
  const sx = useSpring(mx, springCfg);
  const sy = useSpring(my, springCfg);

  const rotateY = useTransform(sx, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(sy, [0, 1], [intensity, -intensity]);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    mx.set(px);
    my.set(py);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className="tilt-scene" {...rest}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ z: 30 }}
        className={`spotlight glow-border ${className}`}
      >
        {glare && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 hover:opacity-100"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.14), transparent 45%)",
            }}
          />
        )}
        {children}
      </motion.div>
    </div>
  );
}
