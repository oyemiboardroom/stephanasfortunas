import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

const ITEMS = [
  {
    roman: 'I',
    title: 'Property Financing',
    desc: 'Rent-to-Own gives buyers another route to owning a home, without having to find a big lump sum first.',
    to: '/solutions/rent-to-own',
  },
  {
    roman: 'II',
    title: 'Trade Distribution',
    desc: 'Property-backed security that helps qualifying traders and distributors get stock, supplier credit and working capital.',
    to: '/solutions/trade-distribution',
  },
  {
    roman: 'III',
    title: 'SME Investment',
    desc: 'We connect growing SMEs with equity investors, and use property-backed security to make the risk easier to carry.',
    to: '/solutions/sme-equity-investment',
  },
];

export default function CapitalSolutions() {
  return (
    <section id="capital" data-tag="Capital" className="py-16 md:py-28 bg-ivory text-obsidian">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="03 // Capital" kicker="Beyond Real Estate" title="Your property can do more than hold its value." light />
        <Reveal className="-mt-6 mb-10 md:mb-14">
          <p className="text-obsidian/60 text-base max-w-xl">
            A home can be more than a place to live. With the right structure, a qualifying property can back
            financing, trade and investment.
          </p>
        </Reveal>

        <Reveal className="mb-10 md:mb-14 aspect-[21/9] overflow-hidden border border-black/15">
          <img
            src="/images/capital.jpg"
            alt="Neoclassical bank hall with golden light"
            className="w-full h-full object-cover"
          />
        </Reveal>

        <Reveal className="grid md:grid-cols-3 gap-px bg-black/15 border border-black/15 mb-10 md:mb-14">
          {ITEMS.map((item) => (
            <article key={item.roman} className="group bg-ivory p-8 flex flex-col">
              <span className="font-heading text-gold text-3xl">{item.roman}</span>
              <h3 className="mt-6 font-heading font-normal text-2xl">{item.title}</h3>
              <p className="mt-3 flex-1 text-obsidian/60 text-sm">{item.desc}</p>
              <Link to={item.to} className="group/link mt-6 inline-flex items-center gap-2 font-body text-xs tracking-[0.15em] uppercase">
                Learn More
                <span className="h-px w-6 bg-gold transition-all group-hover/link:w-10" />
              </Link>
            </article>
          ))}
        </Reveal>

        <Reveal className="border border-black/15 p-8 md:p-11 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold">How It Connects</p>
            <p className="mt-3 font-heading italic text-[clamp(1.1rem,2.4vw,1.5rem)] max-w-lg">
              Property → Income → Financing → Security → Business Growth → Investment
            </p>
          </div>
          <a
            href="#consultation"
            className="inline-flex items-center gap-2 border border-obsidian text-obsidian px-8 py-4 font-body text-xs tracking-[0.2em] uppercase hover:bg-obsidian hover:text-ivory transition-colors"
          >
            Explore Capital Solutions
          </a>
        </Reveal>
      </div>
    </section>
  );
}
