import Image from "next/image";
import { ImagePlus } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?q=80&w=1400&auto=format&fit=crop",
    alt: "Sparks from an angle grinder cutting metal",
    caption: "Grinding & prep",
  },
  {
    src: "https://images.unsplash.com/photo-1727823065187-7b11ee08c1d8?q=80&w=1400&auto=format&fit=crop",
    alt: "Wall of shop tools and equipment",
    caption: "The shop",
  },
];

function PlaceholderTile({ label }) {
  return (
    <div className="relative aspect-[4/3] bg-char-800 border border-char-600 flex flex-col items-center justify-center gap-2 overflow-hidden">
      <div className="grain-overlay opacity-[0.08]" />
      <ImagePlus size={22} className="relative text-steel-600" strokeWidth={1.6} />
      <span className="relative font-body font-semibold text-[11px] uppercase tracking-[0.15em] text-steel-600 text-center px-4">
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="work" className="relative bg-char-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RevealOnScroll className="max-w-2xl flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="font-body font-bold text-xs uppercase tracking-[0.2em] text-magma-500">
              Work
            </span>
            <h2 className="font-display uppercase text-4xl sm:text-5xl text-white mt-3 leading-[0.95]">
              Project gallery
            </h2>
          </div>
        </RevealOnScroll>

        <p className="mt-4 max-w-xl font-body text-steel-500 text-sm">
          Placeholder tiles are marked and ready for real project photos — before / after
          panel work, welds, and fabrication builds.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHOTOS.map((p, i) => (
            <RevealOnScroll key={p.src} delay={i * 0.08} y={18} className="lg:col-span-2 first:lg:col-span-2">
              <div className="relative aspect-[4/3] overflow-hidden border border-char-600 group">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-char-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 font-body font-bold text-xs uppercase tracking-wide text-white">
                  {p.caption}
                </span>
              </div>
            </RevealOnScroll>
          ))}

          {["Before / after — panel repair", "Weld detail", "Fabrication build", "Current project"].map(
            (label, i) => (
              <RevealOnScroll key={label} delay={(i + 2) * 0.08} y={18}>
                <PlaceholderTile label={label} />
              </RevealOnScroll>
            )
          )}
        </div>
      </div>
    </section>
  );
}
