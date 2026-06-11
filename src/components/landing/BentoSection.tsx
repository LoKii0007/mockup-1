"use client";

import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { BentoSectionMobile } from "./BentoSectionMobile";
import { motion } from "framer-motion";
import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import { Pill } from "./Pill";
import { FadeIn } from "./FadeIn";

export function BentoSection() {


  return (
    <section id="features" className="bg-black text-white pt-4">
      {/* Desktop — original 12-column grid */}
      <div className="hidden border-t border-white/10 lg:flex lg:flex-col">
        <div className="grid grid-cols-12">
          <Pill className="col-span-3 group relative overflow-hidden ">
          </Pill>
          <Pill
            className="col-span-6 [&>div:first-child]:mix-blend-difference border-l border-r overflow-hidden border-white/10 p-12 text-right text-6xl font-light leading-none tracking-tight text-white select-none [&>div:first-child]:relative [&>div:first-child]:z-20">
            <FadeIn x="100%">
              Instant Room <br /> Makeovers
            </FadeIn>

          </Pill>
          <Pill className="col-span-3" />
        </div>

        <div className="grid grid-cols-12 border-t border-white/10">
          <Pill className="col-span-3 flex justify-center overflow-hidden ">
            <Image
              src="/images/img-6.png"
              alt="Instant Room Makeovers"
              width={500}
              height={500}
              className="h-auto w-[500px] max-w-none shrink-0 -translate-x-1/2 relative z-20"
            />
          </Pill>
          <Pill className="relative col-span-6 flex justify-center border-l border-r border-white/10 px-12">
            <div className="absolute left-1 top-0 text-6xl font-normal leading-[1.1] tracking-tight text-white opacity-20 select-none z-20 mix-blend-difference">
              01
            </div>
            <Image
              src="/images/img-7.png"
              alt="Instant Room Makeovers"
              width={500}
              height={500}
              className="shrink-0 relative z-20"
            />
          </Pill>
          <Pill className="col-span-3 flex justify-center overflow-hidden">
            <Image
              src="/images/img-8.png"
              alt="Instant Room Makeovers"
              width={500}
              height={500}
              className="h-auto w-[500px] max-w-none shrink-0 translate-x-1/2 relative z-20"
            />
          </Pill>
        </div>

        <div className="grid grid-cols-12 border-t border-white/10">
          <Pill className="col-span-3" />
          <Pill className="col-span-6 flex items-end justify-between border-l border-r border-white/10 p-12 text-base font-light leading-none tracking-tight">
            <FadeIn x="-100%" className="relative z-20 mix-blend-difference">
              <h5 >
                Turn your sketches into <br /> realistic rooms in moments. <br /> see your{" "}
                <span>vision</span> come alive.
              </h5>
            </FadeIn>
            <FadeIn x="100%" className="relative z-20 mix-blend-difference">
              <ArrowUpRightIcon className="h-6 w-6" />
            </FadeIn>
          </Pill>
          <Pill className="col-span-3" />
        </div>

        <div className="grid grid-cols-12 border-t border-white/10">
          <Pill className="col-span-3 flex flex-col justify-between p-12">
            <div className="flex flex-col gap-6 text-base font-light leading-none tracking-tight relative z-20 mix-blend-difference">
              <h5>About Dwello</h5>
              <ArrowUpRightIcon className="h-6 w-6 relative z-20 mix-blend-difference" />
            </div>
            <div className="text-right text-6xl font-light leading-none tracking-tight text-white opacity-20 select-none relative z-20 mix-blend-difference">
              02
            </div>
          </Pill>
          <Pill className="relative col-span-9 border-l border-white/10 p-12 text-6xl font-light leading-[1.1] tracking-tight">
            <FadeIn x="-100%" className="relative z-20 mix-blend-difference">
              Dwello combines creativity with intelligent technology to make design
              simple. Preview your rooms in stunning detail. Create personalized spaces
              with ease and confidence.
            </FadeIn>
            <div className="absolute right-1/3 top-0 h-full border-r border-white/10" />
          </Pill>
        </div>

        <div className="grid grid-cols-12 border-t border-white/10">
          <Pill className="col-span-3 p-12">
            <div className="text-right text-6xl font-light leading-none tracking-tight text-white opacity-20 select-none relative z-20 mix-blend-difference">
              03
            </div>
          </Pill>
          <Pill className="col-span-9 flex flex-col items-end justify-between gap-8 p-12">
            <FadeIn x="100%" viewMargin="0px" isolateInView className="relative z-20 mix-blend-difference space-y-8">
              <h5 className="text-right text-6xl font-light leading-none tracking-tight ">
                Every concept, <br /> in one workspace
              </h5>
              <h6 className="text-right text-base font-light leading-[1.1] tracking-tight ">
                From mood boards to <br /> detailed floor plans, Dwello has you <br />{" "}
                covered.
              </h6>
            </FadeIn>
          </Pill>
        </div>
      </div>

      <BentoSectionMobile />
    </section>
  );
}
