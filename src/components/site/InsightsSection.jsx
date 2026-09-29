import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import SectionLabel from './SectionLabel.jsx';
import { insights } from '../../data/insights.js';

export default function InsightsSection() {
  return (
    <section id="insights" data-tag="Intelligence" className="py-16 md:py-28 bg-obsidian text-ivory">
      <div className="max-w-[1280px] mx-auto">
        <SectionLabel index="08 // Intelligence" kicker="Real Estate Intelligence" title="Insights from the Estate" />

        <Reveal
          className="grid grid-flow-col auto-cols-[min(80vw,320px)] gap-px bg-white/10 border border-white/10 overflow-x-auto"
          style={{ scrollSnapType: 'x proximity' }}
        >
          {insights.map((item, i) => (
            <article key={item.slug} className="bg-obsidian p-7 flex flex-col gap-7 min-h-[12.5rem]" style={{ scrollSnapAlign: 'start' }}>
              <div className="flex justify-between items-baseline text-[11px] tracking-[0.18em] uppercase text-gold">
                <span>{item.cat}</span>
                <span className="text-graphite tracking-normal tabular-nums">
                  {String(i + 1).padStart(2, '0')} / {insights.length}
                </span>
              </div>
              <h3 className="font-heading font-normal text-xl flex-1">{item.title}</h3>
              <Link to={`/insights/${item.slug}`} className="text-sm tracking-[0.1em] uppercase text-gold-bright">
                Read Insight →
              </Link>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
