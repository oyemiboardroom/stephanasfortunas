import React from 'react';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

const ITEMS = [
  ['01', 'High-Net-Worth Individuals', 'People with large holdings who want them to perform better.'],
  ['02', 'Ultra-High-Net-Worth', 'Clients who need advice built entirely around them and handled privately.'],
  ['03', 'Family Offices', 'Independent help with buying, improving and investing in property.'],
  ['04', 'Institutions', 'Organisations with large holdings that want an outside review.'],
  ['05', 'Corporate Organisations', 'Companies that need help buying property or financing it.'],
  ['06', 'Property Owners', 'Owners who suspect their property could be earning more.'],
  ['07', 'SMEs & Businesses', 'Qualifying businesses that need trade finance or capital to grow.'],
];

export default function Clientele() {
  return (
    <section id="clientele" data-tag="Clientele" className="py-16 md:py-28 bg-ivory text-obsidian">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="05 // Clientele" kicker="Who We Serve" title="The Clients We Work With" light />

        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-8 md:gap-16 items-start">
          <Reveal className="bg-ivory p-3.5 shadow-[0_26px_50px_rgba(0,0,0,0.45)] clip-plate max-w-xs mx-auto md:max-w-none">
            <img
              src="/images/clientele.jpg"
              alt="Blueprints and drafting tools on a dark desk"
              className="w-full aspect-[4/5] object-cover block"
            />
          </Reveal>

          <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/15 border border-black/15">
            {ITEMS.map(([num, title, desc]) => (
              <article key={num} className="bg-ivory p-6 flex flex-col gap-2">
                <span className="font-heading text-gold text-xl">{num}</span>
                <h3 className="font-heading font-normal text-lg">{title}</h3>
                <p className="text-obsidian/55 text-sm">{desc}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
