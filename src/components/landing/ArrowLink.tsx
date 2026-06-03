"use client";

import { motion, HTMLMotionProps } from "motion/react";

type ArrowLinkProps = HTMLMotionProps<"a"> & {
  label: string;
};


export function ArrowLink({ label, className = "", ...props }: ArrowLinkProps) {
  return (
    <motion.a
      href={props.href ?? "#"}
      className={`group inline-flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white ${className}`}
      whileHover={{ x: 2, y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        ↗
      </span>
    </motion.a>
  );
}
