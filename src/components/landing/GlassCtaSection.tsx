"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowLink } from "./ArrowLink";
import { FadeIn } from "./FadeIn";
import { images } from "@/lib/images";

export function GlassCtaSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.glass}
          alt="Luxury modern living room"
          fill
          className="object-cover object-center brightness-95"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-between px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-8">
        <div className="mt-20 flex flex-1 flex-col justify-center md:mt-0">
          <FadeIn>
            <h1 className="text-3xl font-light leading-[1.1] tracking-tight text-white select-none sm:text-5xl md:text-6xl lg:text-[72px]">
              Design Your Dream Home
              <br />
              with Homelyflow.ai
            </h1>
            <p className="mt-4 max-w-xl text-sm font-light leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
              Formalia gives you effortless visualization, smart furniture pairing,
              and expert guidance—all in one place.
            </p>
            <div className="mt-6 flex sm:mt-8">
              <motion.a
                href="#projects"
                className="inline-flex rounded-xl bg-white/90 px-6 py-3 text-sm font-medium text-zinc-950 shadow-lg transition-all hover:scale-[1.02] hover:bg-white hover:shadow-xl sm:px-8 sm:py-3.5"
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s explore now
              </motion.a>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 grid w-full gap-4 pt-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-[1.2fr_1.3fr]">
          <motion.div
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/40 p-4 backdrop-blur-xl shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-20">
              <Image
                src={images.diningKitchen}
                alt="Popular styles preview"
                fill
                className="object-cover object-center"
                sizes="80px"
              />
            </div>
            <div>
              <p className="text-sm font-medium leading-snug text-white/90 sm:text-base">
                Top 10 popular styles in
                <br />
                interior design
              </p>
              <p className="mt-1.5 text-xs font-light text-white/50">
                Modern loft style designs
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-zinc-950/40 p-4 backdrop-blur-xl shadow-2xl sm:gap-5 sm:p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2 text-xs">
                {["Design", "Interior", "Calculate"].map((tab, i) => (
                  <span
                    key={tab}
                    className={`rounded-full px-3 py-1 font-medium tracking-wide ${
                      i === 0 ? "bg-white/15 text-white" : "text-white/40"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>
              <a
                href="#projects"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                ↗
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base font-medium text-white/90 sm:text-lg">
                Create Interior
                <br />
                Design Seamlessly
              </p>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <Image
                  src={images.portfolio}
                  alt="Interior preview showing modern room design"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 400px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
