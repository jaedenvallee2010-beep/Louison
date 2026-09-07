const WORDS = [
  "MIG WELDING",
  "TIG WELDING",
  "AUTO BODY REPAIR",
  "FRAME STRAIGHTENING",
  "METAL FABRICATION",
  "PANEL BEATING",
  "SAIT",
];

export default function Marquee() {
  const set = [...WORDS, ...WORDS];
  return (
    <div className="relative bg-magma-600 border-y border-magma-700 overflow-hidden py-3.5">
      <div className="flex whitespace-nowrap marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {set.map((w, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center font-display text-lg sm:text-xl text-char-950 uppercase tracking-wide px-6"
              >
                {w}
                <span className="ml-6 text-char-950/50">&#9670;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
