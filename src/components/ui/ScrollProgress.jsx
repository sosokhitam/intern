import { motion, useScroll, useSpring } from "framer-motion";

/** Progress bar tipis di paling atas halaman. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-indigo-500 via-cyan-400 to-fuchsia-500"
    />
  );
}
