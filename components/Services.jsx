import { Car, Flame, Hammer } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const SERVICES = [
  {
    icon: Car,
    title: "Autobody & Collision Repair",
    desc: "Panel replacement, dent and frame repair, and bringing damaged bodywork back to factory line.",
  },
  {
    icon: Flame,
    title: "Welding",
    desc: "MIG, TIG, and stick welding on sheet and structural steel — clean beads, full penetration.",
  },
  {
    icon: Hammer,
    title: "Metal Fabrication",
    desc: "Cutting, shaping, and joining raw stock into finished parts, brackets, and repair sections.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-char-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RevealOnScroll className="max-w-2xl">
          <span className="font-body font-bold text-xs uppercase tracking-[0.2em] text-magma-500">
            Services
          </span>
          <h2 className="font-display uppercase text-4xl sm:text-5xl text-white mt-3 leading-[0.95]">
            Three trades,
            <br />
            one shop floor.
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-char-700 border border-char-700">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <RevealOnScroll key={title} delay={i * 0.08} y={18}>
              <div className="group relative h-full bg-char-950 p-8 overflow-hidden transition-colors hover:bg-char-900">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-magma-600/0 blur-3xl transition-colors duration-500 group-hover:bg-magma-600/25" />
                <div className="relative flex h-11 w-11 items-center justify-center border border-char-600 text-magma-500 group-hover:border-magma-500 transition-colors">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="relative font-body font-bold text-lg text-white mt-5">{title}</h3>
                <p className="relative font-body text-steel-500 text-[15px] mt-2.5 max-w-xs">
                  {desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
