"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    id: "01",
    label: "Visualize",
    title: "See your vision come alive",
    body: "Turn concepts into lifelike spaces in moments.",
    image: "/images/img-7.png",
    imageAlt: "Modern interior visualization",
    featured: true,
  },
  {
    id: "02",
    label: "About",
    title: "Design made simple",
    body: "Homeflow blends creativity with intelligent tech so you can visualize rooms in stunning detail.",
    image: "/images/img-6.png",
    imageAlt: "Living room with natural light",
  },
  {
    id: "03",
    label: "Platform",
    title: "All your ideas, one place",
    body: "From mood boards to floor plans — everything stays connected.",
    image: "/images/img-8.png",
    imageAlt: "Styled interior detail",
  },
] as const;

export function BentoSectionMobile() {
  return (
    <div className="border-t border-white/10 lg:hidden">
      <div className="px-4 pb-10 pt-8 sm:px-6">
        <FadeIn>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-500">
            How it works
          </p>
          <h2 className="mt-3 max-w-[12ch] text-[2.35rem] font-light leading-[0.95] tracking-tight text-white">
            Instant
            <br />
            Interior Magic
          </h2>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-8">
          <div className="grid grid-cols-2 grid-rows-[auto_auto] gap-2">
            <div className="relative col-span-2 aspect-[5/4] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
              <Image
                src="/images/img-7.png"
                alt="Modern interior visualization"
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-4">
                <div>
                  <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-medium tracking-widest text-white/90 backdrop-blur-sm">
                    STEP 01
                  </span>
                  <p className="mt-2 text-sm font-light leading-snug text-white/90">
                    Lifelike spaces in moments
                  </p>
                </div>
                <span className="text-5xl font-light leading-none text-white/15">01</span>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/img-6.png"
                alt="Living room detail"
                fill
                className="object-cover object-center"
                sizes="45vw"
              />
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/img-8.png"
                alt="Interior styling detail"
                fill
                className="object-cover object-center"
                sizes="45vw"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="mt-3">
          <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3.5">
            <p className="text-xs font-light leading-relaxed text-zinc-300">
              Turn concepts into spaces. See your{" "}
              <span className="text-white">vision</span> come alive.
            </p>
            <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-white/70" />
          </div>
        </FadeIn>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6">
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
          Explore
        </p>
        <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6">
          {steps.map((step, i) => (
            <FadeIn
              key={step.id}
              delay={0.06 * i}
              className="w-[min(82vw,300px)] shrink-0 snap-center"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
                <div className="relative aspect-[16/10] w-full border-b border-white/10">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="300px"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium tracking-widest text-white backdrop-blur-md">
                    {step.id}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-3 p-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {step.label}
                    </p>
                    <h3 className="mt-1.5 text-base font-light leading-snug text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs font-light leading-relaxed text-zinc-400">
                    {step.body}
                  </p>
                  {step.featured && (
                    <div className="flex justify-end">
                      <ArrowUpRightIcon className="h-5 w-5 text-white/50" />
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn className="mx-4 mb-10 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5 sm:mx-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">Homeflow</p>
            <h3 className="mt-2 text-lg font-light leading-snug text-white">
              One platform for every room you imagine
            </h3>
          </div>
          <span className="text-3xl font-light text-white/20">∞</span>
        </div>
        <p className="mt-3 text-xs font-light leading-relaxed text-zinc-400">
          Mood boards, layouts, and AI styling — stay in flow from first sketch to final look.
        </p>
      </FadeIn>
    </div>
  );
}
