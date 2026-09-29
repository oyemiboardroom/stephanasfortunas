import React from 'react';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

const STEPS = [
  ['01', 'Initial Discussion', 'We get to know your organisation, your clients and what you want to achieve.'],
  ['02', 'Confidentiality', 'Where it makes sense, we both sign an NDA.'],
  ['03', 'Partnership Agreement', 'We put the commercial and working arrangements in writing.'],
  ['04', 'Client Introduction', 'You introduce clients, and we work out how we can help them.'],
  ['05', 'Ongoing Collaboration', 'We work side by side to deliver what was agreed.'],
];

export default function Alliance() {
  return (
    <section id="alliance" data-tag="Alliance" className="py-16 md:py-28 bg-ivory text-obsidian">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="07 // Alliance" kicker="Partner With Us" title="Give Your Clients More" light />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal className="aspect-[4/3] overflow-hidden border border-black/15">
            <img
              src="/images/alliance.jpg"
              alt="Marble hands clasped in partnership"
              className="w-full h-full object-cover"
            />
          </Reveal>

          <Reveal>
            <p className="text-obsidian/60 text-base mb-5">
              We work with institutions and professional firms whose clients own significant property. You
              introduce those clients to us, and we offer them specialist advice and access to capital.
            </p>

            <div className="border-l-2 border-gold pl-5 mb-7">
              <span className="block text-[11px] tracking-[0.25em] uppercase text-gold-soft mb-1">
                Partner Economics
              </span>
              <p className="text-obsidian/60 text-sm">
                Subject to agreed commercial terms, eligible partners can share in the revenue earned from clients
                they introduce.
              </p>
            </div>

            <a
              href="#consultation"
              className="inline-flex items-center gap-2 border border-obsidian text-obsidian px-8 py-4 font-body text-xs tracking-[0.2em] uppercase hover:bg-obsidian hover:text-ivory transition-colors"
            >
              Become a Strategic Partner
            </a>

            <ol className="mt-9 grid gap-5">
              {STEPS.map(([num, title, desc]) => (
                <li key={num} className="flex gap-4">
                  <span className="font-heading text-gold text-xl w-7 flex-shrink-0">{num}</span>
                  <div>
                    <h4 className="font-heading font-normal text-lg mb-0.5">{title}</h4>
                    <p className="text-obsidian/50 text-sm">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
