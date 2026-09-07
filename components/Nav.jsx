"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-char-950/90 backdrop-blur border-b border-char-700" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="flex h-8 w-8 items-center justify-center border border-magma-500/60 text-magma-500">
            <Flame size={16} strokeWidth={2.2} />
          </span>
          <span className="font-display text-xl md:text-2xl tracking-wide leading-none text-white">
            LOUISON
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9 font-body text-sm font-semibold text-steel-400">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="uppercase tracking-wide hover:text-white transition-colors border-b border-transparent hover:border-magma-500 pb-1"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-magma-600 hover:bg-magma-500 text-white font-body font-bold text-sm uppercase tracking-wide px-5 py-2.5 transition-colors"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-char-950 border-b border-char-700"
          >
            <div className="flex flex-col px-5 py-4 gap-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body font-semibold uppercase tracking-wide text-steel-400 hover:text-white text-base"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center bg-magma-600 text-white font-bold uppercase tracking-wide px-5 py-3 mt-1"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
