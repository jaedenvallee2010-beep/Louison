import RevealOnScroll from "./RevealOnScroll";

const SPECS = [
  ["Name", "Syris Louison"],
  ["Institution", "SAIT"],
  ["Program", "Autobody & Collision Repair"],
  ["Also training in", "Welding & Fabrication"],
  ["Status", "Current student"],
];

function Rivet({ className = "" }) {
  return (
    <span
      className={`absolute h-2.5 w-2.5 rounded-full bg-char-950/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_1px_1px_rgba(0,0,0,0.6)] ${className}`}
    />
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-char-900 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid md:grid-cols-[1.2fr_1fr] gap-14 md:gap-16 items-start">
        <RevealOnScroll>
          <span className="font-body font-bold text-xs uppercase tracking-[0.2em] text-magma-500">
            About
          </span>
          <h2 className="font-display uppercase text-4xl sm:text-5xl text-white mt-3 leading-[0.95]">
            Trained on steel,
            <br />
            not theory.
          </h2>
          <div className="mt-6 space-y-4 max-w-xl text-steel-400 font-body text-base sm:text-lg">
            <p>
              Syris Louison is a student at SAIT working toward a career in autobody repair,
              with hands-on training that runs straight into welding and metal fabrication.
              The work is the same either way: read the damage, understand the material, put
              it back together stronger than it left the shop.
            </p>
            <p>
              Still early in the trade — and treating every panel, weld, and repair as
              practice for the next one.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="relative bg-gradient-to-br from-char-700 to-char-800 border border-char-600 p-6 sm:p-7">
            <Rivet className="top-3 left-3" />
            <Rivet className="top-3 right-3" />
            <Rivet className="bottom-3 left-3" />
            <Rivet className="bottom-3 right-3" />
            <div className="grain-overlay" />

            <div className="relative flex items-center justify-between border-b border-char-600 pb-4 mb-4">
              <span className="font-body font-bold text-[11px] uppercase tracking-[0.2em] text-steel-500">
                Spec Plate
              </span>
              <span className="font-body font-bold text-[11px] uppercase tracking-[0.2em] text-magma-400">
                Active
              </span>
            </div>

            <dl className="relative space-y-3.5">
              {SPECS.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4 text-sm sm:text-[15px]">
                  <dt className="font-body font-semibold text-steel-500 uppercase tracking-wide shrink-0">
                    {label}
                  </dt>
                  <dd className="font-body text-white text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
