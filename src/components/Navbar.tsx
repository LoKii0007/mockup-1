"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLink } from "./landing/ArrowLink";

const topNav = ["Home", "Features", "Showcase", "Projects", "Portfolio"] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-fit bg-black/50 backdrop-blur-sm border-b border-white/10">
      <motion.header
        className="flex items-center justify-between px-4 py-3 md:px-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a href="#home" className="flex items-center text-white" aria-label="Homeflow Logo">
          <span className="text-3xl font-bold">H</span>
        </a>

        <nav className="hidden items-center gap-x-10 text-sm font-medium tracking-wide md:flex">
          {topNav.map((item) => (
            <a
              key={item}
              href={`#${item === "Home" ? "home" : item.toLowerCase()}`}
              className={`transition-colors hover:text-white ${
                item === "Home" ? "text-white font-semibold" : "text-white/60"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ArrowLink
            label="Sign in"
            href="#home"
            className="hidden text-3xl font-medium text-white/90 hover:text-white md:inline-flex"
          />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-black/90 md:hidden"
          >
            <ul className="flex flex-col px-4 py-4">
              {topNav.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === "Home" ? "home" : item.toLowerCase()}`}
                    className="block py-3 text-sm font-medium text-white/80 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="mt-2 border-t border-white/10 pt-4">
                <ArrowLink
                  label="Sign in"
                  href="#home"
                  className="text-sm text-white/90"
                />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
