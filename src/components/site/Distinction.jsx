import React from 'react';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

const CARDS = [
  ['Tailored Strategies', 'Every plan starts from scratch, built around your assets, your goals and how much risk you are comfortable with.'],
  ['Market Intelligence', 'We study each property closely and keep watching the wider market, so we spot openings and problems early.'],
  ['Value Creation', 'Closing a deal is only part of the job. What we are after is property that earns more.'],
  ['Strategic Execution', 'We carry the work from the first portfolio review right through to the deal room.'],
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
        <SectionLabel index="06 // Distinction" kicker="Why StephanasFortunas" title="Why Clients Choose Us" />

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
              Our proposed minimum annual growth objective, on top of your existing earnings. Subject to agreed
              terms.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
