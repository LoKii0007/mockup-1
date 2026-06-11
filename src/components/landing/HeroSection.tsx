"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { images } from "@/lib/images";

const HERO_CARD_TABS = [
  {
    label: "Plan",
    image: "/images/img-1.jpg",
    title: ["Craft Interior", "Styles Effortlessly"],
    alt: "Interior styling workspace preview",
  },
  {
    label: "Style",
    image: "/images/img-3.jpg",
    title: ["Preview Your", "Ideal Living Space"],
    alt: "Modern living room interior preview",
  },
  {
    label: "Budget",
    image: "/images/img-4.jpg",
    title: ["Plan Budgets", "With Full Clarity"],
    alt: "Room layout with furniture budget planning",
  },
] as const;

function HeroDesignCard({ className = "" }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(1);

  const selectTab = (index: number) => {
    if (index === activeTab) return;
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  const { image, title, alt } = HERO_CARD_TABS[activeTab];

  return (
    <motion.div
      className={`rounded-2xl border border-white/10 bg-zinc-950/40 p-5 shadow-2xl flex flex-col justify-between gap-5 w-full sm:w-80 ${className}`}
      initial={{ backdropFilter: "blur(0px)", opacity: 0, x: "100%" }}
      animate={{ backdropFilter: "blur(10px)", opacity: 1, x: "0%" }}
      transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="relative flex gap-1 text-xs">
          {HERO_CARD_TABS.map((tab, i) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => selectTab(i)}
              className={`relative z-10 rounded-full px-3 py-1 font-medium tracking-wide transition-colors duration-200 ${activeTab === i
                ? "text-white"
                : "text-white/40 hover:text-white/65"
                }`}
            >
              {activeTab === i && (
                <motion.span
                  layoutId="hero-card-tab-pill"
                  className="absolute inset-0 rounded-full bg-white/15"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
        <a
          href="#projects"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-colors text-sm"
        >
          ↗
        </a>
      </div>

      <div className="flex flex-col gap-4">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={activeTab}
            className="text-base sm:text-lg font-medium text-white/90"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {title[0]}
            <br />
            {title[1]}
          </motion.p>
        </AnimatePresence>

        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={activeTab}
              custom={direction}
              className="absolute inset-0"
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d * 48, scale: 1.04 }),
                center: { opacity: 1, x: 0, scale: 1 },
                exit: (d: number) => ({ opacity: 0, x: d * -48, scale: 0.98 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover object-center"
                sizes="400px"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>

  );
}

function PopularStylesCard({ className = "" }: { className?: string }) {
  return (

    <motion.div
      initial={{ backdropFilter: "blur(0px)", opacity: 0, x: "-100%" }}
      animate={{ backdropFilter: "blur(10px)", opacity: 1, x: "0%" }}
      transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
      className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/40  p-4 ${className}`}
    >
      <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={images.diningKitchen}
          alt="Popular styles preview"
          fill
          className="object-cover object-center"
          sizes="80px"
        />
      </div>
      <div>
        <p className="text-sm sm:text-base font-medium leading-snug text-white/90">
          Top 10 trending styles in
          <br />
          home design
        </p>
        <p className="mt-1.5 text-xs text-white/50 font-light">
          Scandinavian home layouts
        </p>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-zinc-950 text-white flex flex-col justify-between"
    >
      <motion.div initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 1, scale: 1 }}
        // transition={{
        //   opacity: { duration: 1, ease: "easeInOut" },
        //   scale: { duration: 2, ease: "easeInOut", delay: 0 }
        // }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0">
        <Image
          src={images.hero}
          alt="Luxury modern living room with wood slat paneling"
          fill
          className="object-cover object-center brightness-95"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </motion.div>

      {/* Desktop — original absolute layout */}
      <div className="relative hidden min-h-dvh w-full items-center p-12 lg:flex">
        <div className="mt-20 md:mt-0 flex flex-1 flex-col justify-center">
          <FadeIn opacity={0}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-light leading-[1.1] tracking-[-2px] text-white select-none">
              Build Your Perfect Space
              <br />
              with Dwello.ai
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-xl font-light">
              Dwello gives you seamless visualization, smart décor pairing,
              and expert guidance—all in one place.
            </p>
            <div className="mt-8 flex">
              <motion.button
                type="button"
                className="inline-flex cursor-pointer rounded-xl bg-white/90 hover:bg-white text-zinc-950 px-8 py-3.5 text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
                whileTap={{ scale: 0.98 }}
              >
                Start designing today
              </motion.button>
            </div>
          </FadeIn>
        </div>

        <PopularStylesCard className="absolute bottom-12 left-12" />

        <HeroDesignCard className="absolute bottom-12 right-12 w-[min(100%,22rem)]" />

      </div>

      {/* Mobile / tablet — stacked layout */}
      <div className="relative z-10 flex min-h-dvh w-full flex-col px-4 pb-8 pt-24 sm:px-6 sm:pb-10 lg:hidden">
        <div className="flex flex-1 flex-col justify-center">
          <FadeIn>
            <h1 className="text-3xl font-light leading-[1.1] tracking-tight text-white select-none sm:text-5xl">
              Build Your Perfect Space
              <br />
              with Dwello.ai
            </h1>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
              Dwello gives you seamless visualization, smart décor pairing,
              and expert guidance—all in one place.
            </p>
            <div className="mt-6 flex sm:mt-8">
              <motion.button
                type="button"
                className="inline-flex cursor-pointer rounded-xl bg-white/90 px-6 py-3 text-sm font-medium text-zinc-950 shadow-lg transition-all hover:scale-[1.02] hover:bg-white hover:shadow-xl sm:px-8 sm:py-3.5"
                whileTap={{ scale: 0.98 }}
              >
                Start designing today
              </motion.button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          >
            <PopularStylesCard />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          >
            <HeroDesignCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
