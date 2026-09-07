"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const CONTACT_ROWS = [
  { icon: Mail, label: "Email", value: "syrislouison@gmail.com" },
  { icon: Phone, label: "Phone", value: "(825) 747-8287" },
  { icon: Phone, label: "Phone (alt)", value: "(587) 906-8678" },
];

function ContactRow({ icon: Icon, label, value }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard?.writeText(value).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex w-full items-center gap-3 text-left text-steel-400 font-body"
    >
      <span className="flex h-9 w-9 items-center justify-center border border-char-600 text-magma-500 shrink-0 group-hover:border-magma-500 transition-colors">
        <Icon size={16} />
      </span>
      <span className="text-sm flex-1">
        <span className="text-steel-600 uppercase tracking-wide text-[11px] block">{label}</span>
        {value}
      </span>
      <span
        className={`text-[11px] font-semibold uppercase tracking-wide border px-2 py-1 transition-colors shrink-0 ${
          copied ? "border-magma-500 text-magma-400" : "border-char-600 text-steel-600 group-hover:text-white group-hover:border-white"
        }`}
      >
        {copied ? (
          <span className="inline-flex items-center gap-1">
            <Check size={12} /> Copied
          </span>
        ) : (
          "Copy"
        )}
      </span>
    </button>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // NOTE: this form is front-end only. Wire it up to Formspree, Resend,
    // a Vercel serverless function, or similar before deploying for real use.
    setSent(true);
  }

  return (
    <section id="contact" className="relative bg-char-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-14">
        <RevealOnScroll>
          <span className="font-body font-bold text-xs uppercase tracking-[0.2em] text-magma-500">
            Contact
          </span>
          <h2 className="font-display uppercase text-4xl sm:text-5xl text-white mt-3 leading-[0.95]">
            Let&rsquo;s talk shop.
          </h2>
          <p className="mt-5 max-w-md text-steel-500 font-body text-base sm:text-lg">
            Open to apprenticeship opportunities, project work, and conversations about
            autobody repair, welding, or fabrication.
          </p>

          <div className="mt-9 space-y-3">
            {CONTACT_ROWS.map((row) => (
              <ContactRow key={row.label} {...row} />
            ))}
            <div className="flex items-center gap-3 text-steel-400 font-body pt-1">
              <span className="flex h-9 w-9 items-center justify-center border border-char-600 text-magma-500 shrink-0">
                <MapPin size={16} />
              </span>
              <span className="text-sm">
                <span className="text-steel-600 uppercase tracking-wide text-[11px] block">
                  Based near
                </span>
                Calgary, AB
              </span>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="relative bg-char-900 border border-char-700 p-6 sm:p-8"
          >
            <div className="grain-overlay opacity-[0.05]" />
            <div className="relative grid sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2 text-sm font-body">
                <span className="text-steel-500 font-semibold uppercase tracking-wide text-[11px]">
                  Name
                </span>
                <input
                  required
                  type="text"
                  className="bg-char-800 border border-char-600 focus:border-magma-500 outline-none px-3.5 py-2.5 text-white placeholder:text-steel-600"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-body">
                <span className="text-steel-500 font-semibold uppercase tracking-wide text-[11px]">
                  Email
                </span>
                <input
                  required
                  type="email"
                  className="bg-char-800 border border-char-600 focus:border-magma-500 outline-none px-3.5 py-2.5 text-white placeholder:text-steel-600"
                  placeholder="you@example.com"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-body sm:col-span-2">
                <span className="text-steel-500 font-semibold uppercase tracking-wide text-[11px]">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  className="bg-char-800 border border-char-600 focus:border-magma-500 outline-none px-3.5 py-2.5 text-white placeholder:text-steel-600 resize-none"
                  placeholder="What are you working on?"
                />
              </label>
            </div>

            <button
              type="submit"
              className="relative mt-6 inline-flex items-center gap-2 bg-magma-600 hover:bg-magma-500 text-white font-body font-bold uppercase tracking-wide text-sm px-6 py-3.5 transition-colors"
            >
              {sent ? "Message ready" : "Send message"}
              <Send size={15} />
            </button>
            {sent && (
              <p className="relative mt-3 text-[13px] font-body text-steel-500">
                This demo form doesn&rsquo;t send yet — connect it to Formspree or an API
                route to go live.
              </p>
            )}
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
