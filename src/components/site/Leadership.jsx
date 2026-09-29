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
          <Reveal className="aspect-[3/4] overflow-hidden border border-black/15 max-w-sm md:max-w-none mx-auto">
            <img
              src="/images/leader.jpg"
              alt="L.J. Abiola, Managing Partner"
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase text-gold mb-2">The Architect of the Estate</p>
            <h2 className="font-heading text-[clamp(1.9rem,3.6vw,2.7rem)] font-light mb-1">L.J. Abiola</h2>
            <p className="text-obsidian/50 text-sm mb-6">Managing Partner</p>
            <p className="text-obsidian/60 text-base mb-4">
              L.J. Abiola leads StephanasFortunas with a focus on strategic real estate advisory, portfolio
              optimisation, investment structuring and innovative approaches to unlocking property value.
            </p>
            <p className="text-obsidian/60 text-base">
              Under his leadership, StephanasFortunas seeks to create a more sophisticated approach to real
              estate ownership — one that combines traditional property expertise with financial and strategic
              thinking.
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
