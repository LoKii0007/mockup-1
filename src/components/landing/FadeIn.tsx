"use client";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: string;
  opacity?: number;
  viewMargin?: string;
  isolateInView?: boolean;
  scale?: number;
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  y = 0,
  x = "0%",
  viewMargin = "-80px",
  isolateInView = false,
  scale = 1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: viewMargin as any });
  const [visible, setVisible] = useState(false);
  const scrollDirRef = useRef<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      scrollDirRef.current = current < lastScrollY.current ? "up" : "down";
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      setVisible(true);
    } else {
      // only reverse if scrolling up (element left from top)
      if (scrollDirRef.current === "up") {
        setVisible(false);
      }
      // scrolling down and out of view — stay visible
    }
  }, [inView]);

  const motionProps = {
    initial: { opacity: 0, y, x, scale },
    animate: visible
      ? { opacity: 1, y: 0, x: "0%", scale: 1 }
      : { opacity: 0, y, x, scale },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  };

  if (isolateInView) {
    return (
      <div ref={ref} className={className}>
        <motion.div {...motionProps}>{children}</motion.div>
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}