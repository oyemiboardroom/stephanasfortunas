import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';

const ITEMS = [
  {
    num: '01',
    title: 'Real Estate Agency Platform — Odacity',
    img: '/images/service1.jpg',
    alt: 'Real Estate Agency Platform — Odacity',
    kicker: 'Connecting Property, Capital & Opportunity',
    desc: 'One place for owners, buyers, investors and tenants to find good opportunities and close on them, with market research and deal support built in.',
    bullets: [
      'Property acquisition & disposition',
      'Buyer, investor & tenant sourcing',
      'Valuation & assessment',
      'Commercial & investment opportunities',
    ],
    cta: { label: 'Explore Real Estate Opportunities', to: '/solutions/real-estate-agency' },
  },
  {
    num: '02',
    title: 'Portfolio Advisory',
    img: '/images/service2.jpg',
    alt: 'Portfolio Advisory',
    kicker: 'Turning Portfolios into Strategic Assets',
    desc: 'Independent advice for larger portfolios. We look at what you own and how it is performing, then help it earn more and grow in value.',
    bullets: [
      'Portfolio review & analysis',
      'Market intelligence & opportunity identification',
      'Deal room activities',
      'Strategic portfolio management',
    ],
    cta: { label: 'Discuss Your Portfolio With Us', to: '/solutions/portfolio-advisory' },
  },
  {
    num: '03',
    title: 'Real Estate Financing — Rent-to-Own',
    img: '/images/service3.jpg',
    alt: 'Real Estate Financing — Rent-to-Own',
    kicker: 'Own Properties Without Buying',
    desc: 'Move in, make regular payments and own the property at the end of an agreed term, without a large deposit upfront.',
    bullets: [
      'Select → Structure → Occupy → Pay → Own',
      'For professionals, entrepreneurs & families',
      'SMEs & corporate occupiers',
      'First-time & structured buyers',
    ],
    cta: { label: 'Explore Rent-to-Own', to: '/solutions/rent-to-own' },
  },
  {
    num: '04',
    title: 'Real Estate-Backed Guaranty',
    img: '/images/service4.jpg',
    alt: 'Real Estate-Backed Guaranty',
    kicker: 'Turning Residential Property into Financial Access',
    desc: 'A qualifying home can be used as support for eligible business deals and investments.',
    bullets: [
      'Trade distribution financing',
      'SME equity investment support',
      'Inventory & working capital structures',
      'Property-backed security framework',
    ],
    cta: { label: 'Learn About This Solution', to: '/solutions/real-estate-backed-guaranty' },
  },
];

export default function Pillars() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="pillars" data-tag="Pillars" className="py-16 md:py-28 bg-ivory text-obsidian">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="02 // Pillars" kicker="Four Core Services" title="How We Can Help" light />
        <Reveal className="-mt-6 mb-10 md:mb-16">
          <p className="text-obsidian/60 text-base max-w-xl">
            Four services, all aimed at the same thing: making your property work harder.
          </p>
        </Reveal>

        <Reveal>
          <div>
            {ITEMS.map((item, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={item.num}
                  onMouseEnter={() => setOpenIdx(i)}
                  className={`bg-ivory border border-black/15 ${i > 0 ? 'border-t-0' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(i)}
                    onFocus={() => setOpenIdx(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-8 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-heading text-gold text-2xl">{item.num}</span>
                      <h3 className="font-heading font-normal text-xl sm:text-2xl">{item.title}</h3>
                    </span>
                    <span
                      className={`flex-shrink-0 text-[11px] tracking-[0.2em] uppercase border px-4 py-2 transition-colors ${
                        isOpen ? 'text-obsidian border-obsidian' : 'text-black/50 border-black/15'
                      }`}
                    >
                      {isOpen ? 'Close' : 'View'}
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 sm:px-8 pb-10 grid md:grid-cols-[1fr_1.15fr] gap-8 items-center">
                        <div className="aspect-[16/10] overflow-hidden">
                          <img src={item.img} alt={item.alt} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-heading italic text-gold-soft text-xl mb-3">{item.kicker}</p>
                          <p className="text-obsidian/60 text-base mb-5">{item.desc}</p>
                          <ul className="grid gap-2.5 mb-6">
                            {item.bullets.map((b) => (
                              <li key={b} className="flex gap-3 text-sm text-obsidian/60">
                                <span className="w-[5px] h-[5px] mt-2 bg-gold flex-shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <Link
                            to={item.cta.to}
                            className="inline-flex items-center gap-2 border border-obsidian text-obsidian px-8 py-4 font-body text-xs tracking-[0.2em] uppercase hover:bg-obsidian hover:text-ivory transition-colors"
                          >
                            {item.cta.label}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
