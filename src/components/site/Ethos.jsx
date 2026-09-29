import React from 'react';
import Reveal from './Reveal.jsx';

export default function Ethos() {
  return (
    <section id="ethos" data-tag="Ethos" className="py-16 md:py-28 bg-obsidian text-ivory">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal className="relative aspect-[3/4] md:aspect-auto md:h-full overflow-hidden border border-white/10">
          <img src="/images/ethos.jpg" alt="Marble architectural detail" className="w-full h-full object-cover" />
        </Reveal>

        <Reveal>
          <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold">01 // Ethos</p>
          <p className="mt-2 font-body text-[13px] tracking-[0.12em] uppercase text-ivory-soft/65">
            About StephanasFortunas
          </p>
          <span className="block mt-4 w-12 h-px bg-white/10" />
          <h2 className="mt-5 font-heading text-[clamp(2rem,4vw,3.1rem)] font-light tracking-mast">
            We think about property the way investors think about capital.
          </h2>

          <p className="mt-8 font-heading italic text-gold text-[clamp(1.5rem,2.6vw,2.1rem)] leading-snug border-l-2 border-gold-soft pl-5">
            "Real estate should not merely sit on a balance sheet. It should work."
          </p>

          <dl className="mt-8 grid gap-7">
            <div>
              <dt className="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">What We Do</dt>
              <dd className="text-ivory/70 text-base max-w-md">
                We help owners get more out of their property through advice, agency work, Rent-to-Own financing
                and property-backed capital.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">How We Do It</dt>
              <dd className="text-ivory/70 text-base max-w-md">
                Every plan is built for one client. We study the asset, work out the right structure, then see the
                deal through.
              </dd>
            </div>
            <div>
              <dt className="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">The Result</dt>
              <dd className="text-ivory/70 text-base max-w-md">
                Property that earns more, in a portfolio that keeps gaining value over time.
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold/70 whitespace-nowrap">
              Core Proposition
            </span>
            <span className="flex-1 h-px bg-white/10" />
          </div>
          <p className="mt-4 font-heading text-2xl font-light">
            Find the right property, make it perform, then put it to work raising capital.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
