import React from 'react';
import Reveal from './Reveal.jsx';

export default function SectionLabel({ index, kicker, title, light = false }) {
  const kickerColor = light ? 'text-obsidian/50' : 'text-ivory-soft/65';
  const ruleColor = light ? 'bg-black/15' : 'bg-white/10';

  return (
    <Reveal className="max-w-2xl mb-10 md:mb-16">
      <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold font-medium">{index}</p>
      {kicker && (
        <p className={`mt-2 font-body text-[13px] tracking-[0.12em] uppercase ${kickerColor}`}>{kicker}</p>
      )}
      <span className={`block mt-4 w-12 h-px ${ruleColor}`} />
      <h2 className="mt-5 font-heading text-[clamp(2rem,4vw,3.1rem)] font-light tracking-mast">{title}</h2>
    </Reveal>
  );
}
