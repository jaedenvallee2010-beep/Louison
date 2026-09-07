import { Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-char-900 border-t border-char-700 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center border border-magma-500/60 text-magma-500">
            <Flame size={16} strokeWidth={2.2} />
          </span>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide text-white">LOUISON INDUSTRIAL</div>
            <div className="font-body text-[11px] uppercase tracking-[0.15em] text-steel-600">
              Autobody &middot; Welding &middot; Fabrication
            </div>
          </div>
        </div>

        <p className="font-body text-[13px] text-steel-600">
          &copy; {new Date().getFullYear()} Syris Louison. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
