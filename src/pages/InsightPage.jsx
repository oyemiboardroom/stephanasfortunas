import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getInsight, getAdjacentInsights, insights } from '../data/insights.js';
import { solutions } from '../data/solutions.js';
import Reveal from '../components/site/Reveal.jsx';
import Prose from '../components/site/Prose.jsx';
import Footer from '../components/site/Footer.jsx';

export default function InsightPage() {
  const { slug } = useParams();
  const item = getInsight(slug);
  if (!item) return <Navigate to="/" replace />;

  const { prev, next, index } = getAdjacentInsights(slug);
  const relatedSolutions = [
    solutions[index % solutions.length],
    solutions[(index + 2) % solutions.length],
    solutions[(index + 4) % solutions.length],
  ];

  return (
    <main>
      <article className="relative overflow-hidden isolate mt-6 min-h-[56vh] flex items-end">
        <img src={item.img} alt={item.imgAlt} className="absolute inset-0 w-full h-full object-cover -z-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-obsidian/35 via-obsidian/60 to-obsidian/95" />
        <div className="px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 max-w-3xl">
          <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold">{item.cat}</p>
          <h1 className="mt-4 font-heading font-light text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[1.06] text-ivory">
            {item.title}
          </h1>
          <p className="mt-5 text-ivory-soft text-base sm:text-lg max-w-xl">{item.dek}</p>
          <div className="flex flex-wrap gap-6 mt-6">
            <span className="text-[11px] tracking-[0.2em] uppercase text-gold-bright">Real Estate Intelligence</span>
            <span className="text-[11px] tracking-[0.2em] uppercase text-gold-bright">
              {String(index + 1).padStart(2, '0')} / {insights.length}
            </span>
          </div>
        </div>
      </article>

      <section className="py-14 md:py-24 bg-obsidian text-ivory">
        <div className="max-w-[920px] mx-auto">
          <nav className="flex flex-wrap items-center gap-2 text-xs tracking-wider uppercase text-graphite mb-8">
            <Link to="/" className="hover:text-gold-bright">Home</Link>
            <span className="opacity-50">/</span>
            <a href="/#insights" className="hover:text-gold-bright">Insights</a>
            <span className="opacity-50">/</span>
            <span className="text-gold">{item.title}</span>
          </nav>

          <Reveal>
            <Prose html={item.body} />
          </Reveal>

          <Reveal className="border border-gold-soft p-8 md:p-11 flex flex-wrap items-center justify-between gap-6 mt-10">
            <p className="font-heading text-xl max-w-sm">Have a real estate strategy question of your own?</p>
            <a
              href="/#consultation"
              className="inline-flex items-center gap-2 border border-gold-soft text-ivory px-8 py-4 font-body text-xs tracking-[0.2em] uppercase hover:bg-ivory hover:text-obsidian hover:border-ivory transition-colors"
            >
              Request a Confidential Consultation
            </a>
          </Reveal>

          <Reveal className="flex justify-between gap-6 border-t border-white/10 mt-12 pt-8">
            <Link to={`/insights/${prev.slug}`} className="max-w-[46%]">
              <span className="block text-[10px] tracking-[0.2em] uppercase text-gold mb-2">← Previous</span>
              <span className="font-heading text-lg leading-snug">{prev.title}</span>
            </Link>
            <Link to={`/insights/${next.slug}`} className="max-w-[46%] text-right ml-auto">
              <span className="block text-[10px] tracking-[0.2em] uppercase text-gold mb-2">Next →</span>
              <span className="font-heading text-lg leading-snug">{next.title}</span>
            </Link>
          </Reveal>

          <Reveal className="mt-14">
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-5">Related Solutions</p>
            <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {relatedSolutions.map((s) => (
                <Link key={s.slug} to={`/solutions/${s.slug}`} className="bg-obsidian p-6 flex flex-col gap-2 hover:bg-obsidian-soft transition-colors">
                  <span className="font-heading text-gold text-lg">{s.pillarNo}</span>
                  <h4 className="font-heading text-lg">{s.title}</h4>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
