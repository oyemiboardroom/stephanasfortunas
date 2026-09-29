import React from 'react';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

const CARDS = [
  ['Tailored Strategies', 'Every strategy is built around your assets, objectives and risk profile — no universal templates.'],
  ['Market Intelligence', 'Property-level analysis combined with broader market intelligence to identify opportunities and risks.'],
  ['Value Creation', 'We improve the economic productivity of real estate — not just execute transactions.'],
  ['Strategic Execution', 'From portfolio analysis to deal-room activities, we move strategy into implementation.'],
];

export default function Distinction() {
  return (
    <section id="distinction" data-tag="Distinction" className="relative isolate py-16 md:py-28 text-ivory">
      <img
        src="/images/distinction.jpg"
        alt="Brass key resting on dark velvet"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-obsidian/95 via-obsidian/85 to-obsidian/70" />

      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="06 // Distinction" kicker="Why StephanasFortunas" title="Why Clients Choose StephanasFortunas" />

        <Reveal className="grid md:grid-cols-[1.3fr_0.9fr] gap-8 md:gap-14 items-start">
          <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {CARDS.map(([title, desc]) => (
              <article key={title} className="bg-black/40 p-7">
                <h3 className="font-heading text-gold-bright text-xl mb-2">{title}</h3>
                <p className="text-ivory/70 text-sm">{desc}</p>
              </article>
            ))}
          </div>

          <div className="border border-gold-soft p-8 md:p-11 flex flex-col gap-3">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Performance Objective</span>
            <span className="font-heading text-gold-bright text-[clamp(3rem,7vw,4.2rem)] leading-none">5.5%</span>
            <p className="text-ivory/70 text-sm">
              Proposed minimum annual growth objective, in addition to clients' existing earnings, subject to
              agreed terms.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
