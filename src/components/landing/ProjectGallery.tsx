"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { ArrowLink } from "./ArrowLink";
import { FadeIn } from "./FadeIn";
import { projects } from "@/lib/data";

const CARD_SCALE = 1.2;

const galleryVars = {
  "--card-scale": CARD_SCALE,
} as CSSProperties;

export function ProjectGallery() {
  return (
    <section id="projects" className="overflow-x-hidden bg-black text-white py-16 md:py-24">
      <div className="px-6 sm:px-8 md:px-12">
        <div className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between lg:mb-16">
          <FadeIn x="-100%" isolateInView className="text-2xl font-light leading-[1.15] tracking-tight text-white select-none sm:text-4xl md:text-5xl">
            Transforming Daily
            <br />
            Life Through Design
          </FadeIn>
          <FadeIn x="100%" isolateInView className="shrink-0 self-start text-sm font-medium md:self-auto">
            <ArrowLink
              label="View Project"
              href="#showcase"
              className=""
            />
          </FadeIn>
        </div>

        <div
          style={galleryVars}
          className="flex items-start gap-3 overflow-x-auto pt-2 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [--card-width:min(72vw,220px)] sm:[--card-width:240px] md:[--card-width:260px]"
        >
          {projects.map((project, i) => (
            <motion.article
              key={`${project.name}-${project.location}-${i}`}
              layout
              className="group shrink-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                layout: { duration: 0.5, ease: "easeOut" },
              }}
            >
              <div className="w-[var(--card-width)] transition-[width] duration-500 ease-out group-hover:w-[calc(var(--card-width)*var(--card-scale))]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 72vw, 260px"
                  />
                </div>
              </div>

              <div className="w-[var(--card-width)]">
                <div className="mt-3 flex items-center justify-between text-[11px] tracking-wide text-white/50 uppercase">
                  <span>Scope</span>
                  <span>2025</span>
                </div>

                <div className="mt-1.5 flex items-end justify-between gap-3">
                  <h3 className="max-w-[65%] text-sm font-medium leading-snug text-white">
                    {project.name}
                  </h3>
                  <span className="shrink-0 pb-0.5 text-sm text-white/70">
                    {project.location}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
