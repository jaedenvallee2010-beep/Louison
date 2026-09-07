"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-char-950">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <Image
          src="https://images.unsplash.com/photo-1745448797901-2a4c9d9af1c1?q=80&w=2400&auto=format&fit=crop"
          alt="Welder mid-task with sparks flying, black and white"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-110 grayscale"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-char-950/70 via-char-950/60 to-char-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-magma-900/40 via-transparent to-transparent" />
      <div className="grain-overlay opacity-[0.06]" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl h-full px-5 sm:px-8 flex flex-col justify-center"
      >
        <motion.span
          variants={item}
          className="inline-flex w-fit items-center gap-2 border border-magma-500/50 text-magma-400 font-body font-bold text-xs uppercase tracking-[0.15em] px-3 py-1.5 mb-6"
        >
          SAIT — Autobody &amp; Fabrication
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display uppercase text-[15vw] sm:text-[10vw] md:text-[7.2vw] leading-[0.88] text-white"
        >
          Syris
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-magma-300 via-magma-500 to-magma-700">
            Louison
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl font-body text-base sm:text-lg text-steel-400">
          Autobody technician and welder in training — panel repair, frame work, and metal
          fabrication, built from the ground up in the shop and on the SAIT floor.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-magma-600 hover:bg-magma-500 text-white font-body font-bold uppercase tracking-wide text-sm px-6 py-3.5 transition-colors"
          >
            View the work
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-steel-600 hover:border-white text-white font-body font-bold uppercase tracking-wide text-sm px-6 py-3.5 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-steel-500"
      >
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.div>
    </section>
  );
}
