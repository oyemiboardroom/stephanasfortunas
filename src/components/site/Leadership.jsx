import React from 'react';
import Reveal from './Reveal.jsx';

export default function Leadership() {
  return (
    <section id="leadership" data-tag="Leadership" className="py-16 md:py-28 bg-ivory text-obsidian">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold mb-9">09 // Leadership</p>
        </Reveal>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-center">
          <Reveal className="aspect-[3/4] overflow-hidden border border-black/15 max-w-sm md:max-w-none mx-auto bg-obsidian">
            <svg
              viewBox="0 0 300 400"
              preserveAspectRatio="xMidYMid slice"
              className="w-full h-full"
              role="img"
              aria-label="A drafting compass, symbolising strategic direction and leadership"
            >
              {/* faint blueprint grid backdrop */}
              <g stroke="currentColor" className="text-gold/10" strokeWidth="1" fill="none">
                <circle cx="150" cy="230" r="60" />
                <circle cx="150" cy="230" r="100" />
                <circle cx="150" cy="230" r="140" />
                <line x1="0" y1="230" x2="300" y2="230" />
                <line x1="150" y1="50" x2="150" y2="400" />
              </g>

              {/* drawn guide arc, as if mid-stroke */}
              <path
                d="M 88 332 Q 150 362 202 322"
                stroke="currentColor"
                className="text-gold/25"
                strokeWidth="1.5"
                strokeDasharray="2 7"
                strokeLinecap="round"
                fill="none"
              />

              {/* compass */}
              <g stroke="currentColor" className="text-gold-bright" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="150" cy="108" r="7" />
                <line x1="150" y1="108" x2="98" y2="322" />
                <line x1="150" y1="108" x2="202" y2="322" />
                <line x1="128" y1="188" x2="172" y2="188" />
                <line x1="98" y1="322" x2="88" y2="332" />
                <circle cx="202" cy="322" r="3" fill="currentColor" stroke="none" />
              </g>
            </svg>
          </Reveal>

          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">The Architect of the Estate</p>
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.7rem)] font-light mb-1">L.J. Abiola</h2>
            <p className="text-obsidian/50 text-sm mb-6">Managing Partner</p>
            <p className="text-obsidian/60 text-base mb-4">
              L.J. Abiola leads StephanasFortunas. His work centres on property advice, getting more out of
              portfolios, structuring investments and finding new ways to draw value from real estate.
            </p>
            <p className="text-obsidian/60 text-base">
              His view is that owning property well takes more than property know-how. It also takes the
              instincts of an investor and a financier, and he has built the firm around that idea.
            </p>

            <div className="flex flex-wrap gap-7 mt-8 pt-8 border-t border-black/15">
              <div>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Focus</span>
                <b className="font-heading font-normal text-lg">Strategic Advisory</b>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Approach</span>
                <b className="font-heading font-normal text-lg">Value Creation</b>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-gold mb-1">Philosophy</span>
                <b className="font-heading font-normal text-lg">Property Must Work</b>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
