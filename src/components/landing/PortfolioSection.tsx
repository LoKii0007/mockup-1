"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CircleNav } from "./CircleNav";
import { FadeIn } from "./FadeIn";
import { portfolioSlides, testimonials } from "@/lib/data";

export function PortfolioSection() {
  const [slide, setSlide] = useState(0);
  const [testimonial, setTestimonial] = useState(0);
  
  const current = portfolioSlides[slide];
  const quote = testimonials[testimonial];

  const nextSlide = () =>
    setSlide((s) => (s + 1) % portfolioSlides.length);
  const prevSlide = () =>
    setSlide((s) => (s - 1 + portfolioSlides.length) % portfolioSlides.length);

  return (
    <section id="portfolio" className="bg-black text-white py-16 md:py-24">
      {/* Portfolio Container */}
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 md:px-12 pb-16 md:pb-24 border-b border-white/10">
        
        {/* Centered Portfolio Section Title */}
        <FadeIn className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-medium select-none">
            Our Portfolio
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white select-none">
            Creative Spaces, Powered by AI
          </h2>
        </FadeIn>

        {/* Portfolio Slides Layout — 50/50 columns per reference */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-stretch">
          {/* Left: tall feature image, sharp corners */}
          <FadeIn delay={0.1} className="h-full">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black lg:aspect-auto lg:min-h-[min(72vh,640px)] lg:h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.image}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>

          {/* Right: meta row → copy + thumb → footer (nav stays static) */}
          <div className="flex min-h-[min(72vh,640px)] flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="flex flex-1 flex-col"
              >
                {/* Top: location | slide index */}
                <div className="flex items-start justify-between gap-6 text-xs font-light text-zinc-400">
                  <span className="select-none">{current.location}</span>
                  <span className="shrink-0 select-none tabular-nums">
                    {String(slide + 1).padStart(2, "0")}/
                    {String(portfolioSlides.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Middle: title + body | thumb + caption */}
                <div className="mt-10 grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:mt-14 lg:gap-12">
                  <div className="max-w-sm">
                    <h3 className="text-xl font-light leading-snug text-white sm:text-2xl">
                      {current.title}
                    </h3>
                    <p className="mt-4 text-sm font-light leading-relaxed text-zinc-400">
                      {current.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:max-w-[200px] sm:justify-self-end">
                    <div className="relative aspect-square w-full max-w-[200px] overflow-hidden bg-black">
                      <Image
                        src={current.thumb}
                        alt="Style palette preview"
                        fill
                        className="object-cover object-center"
                        sizes="200px"
                      />
                    </div>
                    <p className="mt-4 max-w-[200px] text-xs font-light leading-relaxed text-zinc-400">
                      {current.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-end justify-between gap-6 lg:mt-14">
              <AnimatePresence mode="wait">
                <motion.p
                  key={current.footer}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-xs text-xs font-light text-zinc-400 select-none"
                >
                  {current.footer}
                </motion.p>
              </AnimatePresence>
              <CircleNav onPrev={prevSlide} onNext={nextSlide} />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials — ~1/3 header + nav | ~2/3 quote content */}
      <div
        id="testimonials"
        className="mx-auto max-w-[1400px] px-6 pt-16 sm:px-8 md:pt-24 md:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.55fr)] lg:gap-0">
          {/* Left: label, headline, static nav */}
          <div className="flex min-h-[200px] flex-col justify-between lg:min-h-[280px] lg:pr-14">
            <div>
              <p className="text-xs font-light text-white select-none">
                What Our Clients Say
              </p>
              <h2 className="mt-4 max-w-md text-2xl font-light leading-snug tracking-tight text-white sm:text-3xl lg:text-4xl select-none">
                Specific, high-trust headline using the location.
              </h2>
            </div>
            <div className="mt-10 lg:mt-0">
              <CircleNav
                onPrev={() =>
                  setTestimonial(
                    (t) => (t - 1 + testimonials.length) % testimonials.length,
                  )
                }
                onNext={() =>
                  setTestimonial((t) => (t + 1) % testimonials.length)
                }
              />
            </div>
          </div>

          {/* Right: divider, quote mark, sliding copy */}
          <div className="relative flex min-h-[260px] flex-col border-white/10 pt-10 lg:border-l lg:pt-0 lg:pl-14 xl:pl-16">
            <span
              className="pointer-events-none absolute left-0 top-0 select-none font-serif text-[5rem] leading-none text-zinc-800 sm:text-[6rem] lg:text-[7rem] lg:left-14 xl:left-16"
              aria-hidden
            >
              “
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 flex flex-1 flex-col justify-between"
              >
                <div className="pt-6 lg:pt-8">
                  <h3 className="max-w-xl text-xl font-light leading-snug text-white sm:text-2xl lg:text-[1.65rem]">
                    {quote.headline}
                  </h3>
                  <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-white/85 sm:text-[0.9375rem]">
                    {quote.quote}
                  </p>
                </div>

                <div className="mt-12 flex items-start gap-4 lg:mt-16">
                  <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-900">
                    <Image
                      src={quote.avatar}
                      alt={quote.name}
                      fill
                      className="object-cover object-center"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <p className="text-sm font-medium text-white">
                        {quote.name}
                      </p>
                      <span
                        className="text-[0.65rem] tracking-[0.2em] text-white select-none"
                        aria-label="5 stars"
                      >
                        ★★★★★
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-light text-zinc-500">
                      {quote.handle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
