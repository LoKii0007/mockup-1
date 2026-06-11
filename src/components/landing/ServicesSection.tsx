"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { services } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function ServicesSection() {
  const [active, setActive] = useState<number | null>(2);

  return (
    <section id="services" className="bg-black pb-10 text-white">
      <div className="px-6 sm:px-8 md:px-12">
        <div className="w-full border-t border-white/10" />

        <ul className="divide-y divide-white/10">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="group relative"
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(2)}
              onFocus={() => setActive(index)}
              onBlur={() => setActive(2)}
            >
              <FadeIn isolateInView x="-100%">
                <a
                  href="#projects"
                  className="flex flex-col gap-4 py-8 transition-all duration-300 md:flex-row md:items-center md:justify-between md:gap-6 md:py-10"
                >
                  <div className="max-w-3xl flex-1">
                    <h3 className="text-xl font-light tracking-tight text-white transition-colors duration-300 group-hover:text-white sm:text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-xs font-light leading-relaxed text-zinc-400 transition-colors duration-300 sm:text-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-4 md:gap-8 lg:gap-12">
                    <div className="relative h-[72px] w-[112px] overflow-hidden border border-white/10 shadow-2xl md:hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                        sizes="140px"
                      />
                    </div>

                    <div className="relative hidden h-[100px] w-[160px] md:block">
                      <AnimatePresence mode="wait">
                        {active === index && (
                          <motion.div
                            className="absolute inset-0 overflow-hidden border border-white/10 shadow-2xl"
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 0.95, x: 10 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                          >
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              className="object-cover object-center"
                              sizes="300px"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <span className="shrink-0 select-none text-xl text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white md:text-2xl">
                      ↗
                    </span>
                  </div>
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>

        <div className="w-full border-t border-white/10" />
      </div>
    </section>
  );
}
