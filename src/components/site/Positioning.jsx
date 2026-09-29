import React from 'react';
import Reveal from './Reveal.jsx';

const ITEMS = [
  ['01', 'Private', 'We work quietly, out of the public eye'],
  ['02', 'Strategic', 'Built around your assets and your goals'],
  ['03', 'Confidential', 'Nothing is shared without your say-so'],
  ['04', 'Performance-Focused', 'Success measured in numbers you can check'],
];

export default function Positioning() {
  return (
    <Reveal as="div" className="grid grid-cols-2 md:grid-cols-4 bg-obsidian">
      {ITEMS.map(([num, title, desc], i) => (
        <div
          key={num}
          className={`p-6 md:p-8 border-t border-white/10 flex flex-col gap-2 ${
            i > 0 ? 'md:border-l md:border-white/10' : ''
          } ${i === 2 ? 'border-l border-white/10 md:border-l' : i > 0 ? 'border-l border-white/10' : ''}`}
        >
          <span className="font-heading text-gold text-2xl">{num}</span>
          <h3 className="font-body text-sm tracking-wide font-medium">{title}</h3>
          <p className="text-graphite text-sm">{desc}</p>
        </div>
      ))}
    </Reveal>
  );
}
