"use client";

import { motion } from "motion/react";

type CircleNavProps = {
  onPrev: () => void;
  onNext: () => void;
};

export function CircleNav({ onPrev, onNext }: CircleNavProps) {
  return (
    <div className="flex gap-3">
      {[
        { label: "Previous", action: onPrev },
        { label: "Next", action: onNext },
      ].map(({ label, action }, i) => (
        <motion.button
          key={label}
          type="button"
          aria-label={label}
          onClick={action}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white hover:text-white"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
        >
          <span className="text-lg leading-none">{i === 0 ? "←" : "→"}</span>
        </motion.button>
      ))}
    </div>
  );
}
