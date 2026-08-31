import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Loader singkat saat pertama kali web dibuka, supaya scene 3D
 * punya waktu inisialisasi dan kesan "premium" langsung terasa.
 */
export default function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#05050a]"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-20 w-20"
          >
            <span className="absolute inset-0 animate-spin rounded-2xl border-2 border-transparent border-t-indigo-500 border-r-cyan-400" />
            <span className="absolute inset-2 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-20 blur-md" />
            <span className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold tracking-tight">
              AS
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono-alt mt-6 text-xs uppercase tracking-[0.35em] text-zinc-500"
          >
            Loading portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
