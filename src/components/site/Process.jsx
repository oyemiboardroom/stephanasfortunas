import React from 'react';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

const STEPS = [
  ['01', 'Analyse', 'What the property earns, what it is worth and what the market is doing.'],
  ['02', 'Structure', 'Work out how the deal and the financing should fit together.'],
  ['03', 'Optimise', 'Get more use, and more income, out of the asset.'],
  ['04', 'Execute', 'Take the plan into the deal room and get it done.'],
  ['05', 'Grow', 'Keep building value, year after year.'],
];

export default function Process() {
  return (
    <section id="process" data-tag="Process" className="py-16 md:py-28 bg-obsidian text-ivory">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="04 // Process" kicker="Five Steps" title="How We Work on Your Property" />
        <Reveal className="-mt-6 mb-10 md:mb-14">
          <p className="text-ivory-soft text-base max-w-xl">
            We don&apos;t stop at the building. We also look at the income it earns, the capital tied up in it and
            the market around it.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-8 md:gap-16 items-start">
          <Reveal className="bg-ivory p-3.5 shadow-[0_26px_50px_rgba(0,0,0,0.45)] clip-plate max-w-xs mx-auto md:max-w-none">
            <img
              src="/images/process.jpg"
              alt="Luxury residential tower at night"
              className="w-full aspect-[4/5] object-cover block"
            />
          </Reveal>

          <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {STEPS.map(([num, title, desc]) => (
              <div key={num} className="bg-obsidian p-7">
                <span className="font-heading text-gold text-3xl block mb-3">{num}</span>
                <h3 className="font-heading font-normal text-xl mb-2">{title}</h3>
                <p className="text-graphite text-sm">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
