import React from 'react';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

const STEPS = [
  ['01', 'Initial Discussion', 'We understand your organisation, client base and objectives.'],
  ['02', 'Confidentiality', 'A mutual NDA is executed where appropriate.'],
  ['03', 'Partnership Agreement', 'The commercial and operating framework is formally documented.'],
  ['04', 'Client Introduction', 'Clients are introduced for assessment and engagement.'],
  ['05', 'Ongoing Collaboration', 'We work collaboratively to deliver the agreed solution.'],
];

export default function Alliance() {
  return (
    <section id="alliance" data-tag="Alliance" className="py-16 md:py-28 bg-ivory text-obsidian">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="07 // Alliance" kicker="Partner With Us" title="Create More Value for Your Clients" light />

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
              We partner with institutions and professional organisations serving clients with significant real
              estate holdings — introducing those clients to specialised advisory, value-creation and capital
              solutions.
            </p>

            <div className="border-l-2 border-gold pl-5 mb-7">
              <span className="block text-[11px] tracking-[0.25em] uppercase text-gold-soft mb-1">
                Partner Economics
              </span>
              <p className="text-obsidian/60 text-sm">
                Subject to agreed commercial terms, eligible partners may receive participation in applicable
                revenues generated from clients they introduce.
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
