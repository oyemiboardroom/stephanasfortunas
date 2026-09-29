import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { getSolution, solutions } from '../data/solutions.js';
import Reveal from '../components/site/Reveal.jsx';
import Prose from '../components/site/Prose.jsx';
import Footer from '../components/site/Footer.jsx';

export default function SolutionPage() {
  const { slug } = useParams();
  const item = getSolution(slug);
  if (!item) return <Navigate to="/" replace />;

  const related = solutions.filter((s) => s.slug !== item.slug).slice(0, 3);

  return (
    <main>
      <article className="relative overflow-hidden isolate mt-6 min-h-[56vh] flex items-end">
        <img src={item.img} alt={item.imgAlt} className="absolute inset-0 w-full h-full object-cover -z-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-obsidian/35 via-obsidian/60 to-obsidian/95" />
        <div className="px-4 sm:px-6 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16 max-w-3xl">
          <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold">{item.eyebrow}</p>
          <h1 className="mt-4 font-heading font-light text-[clamp(2.4rem,5.2vw,4.2rem)] leading-[1.06] text-ivory">
            {item.title}
          </h1>
          <p className="mt-5 text-ivory-soft text-base sm:text-lg max-w-xl">{item.dek}</p>
        </div>
      </article>

      <section className="py-14 md:py-24 bg-ivory text-obsidian">
        <div className="max-w-[920px] mx-auto">
          <nav className="flex flex-wrap items-center gap-2 text-xs tracking-wider uppercase text-graphite mb-8">
            <Link to="/" className="hover:text-gold-bright">Home</Link>
            <span className="opacity-50">/</span>
            <a href="/#pillars" className="hover:text-gold-bright">Solutions</a>
            <span className="opacity-50">/</span>
            <span className="text-gold">{item.title}</span>
          </nav>

          <Reveal>
            <Prose html={item.body} light />
            {item.steps && (
              <>
                <h2 className="font-heading text-[clamp(1.5rem,2.8vw,1.9rem)] mt-10 mb-4">How It Works</h2>
                <ol className="grid gap-5 max-w-prose mb-8">
                  {item.steps.map(([title, desc], i) => (
                    <li key={title} className="flex gap-5">
                      <span className="font-heading text-gold text-2xl w-8 flex-shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="font-heading text-lg mb-1">{title}</h4>
                        <p className="text-obsidian/60 text-sm">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                {item.afterSteps && <Prose html={item.afterSteps} light />}
              </>
            )}
          </Reveal>

          <Reveal className="border border-gold-soft p-8 md:p-11 flex flex-wrap items-center justify-between gap-6 mt-10">
            <p className="font-heading text-xl max-w-sm">Ready to discuss how this applies to you?</p>
            <a
              href="/#consultation"
              className="inline-flex items-center gap-2 border border-obsidian text-obsidian px-8 py-4 font-body text-xs tracking-[0.2em] uppercase hover:bg-obsidian hover:text-ivory transition-colors"
            >
              {item.ctaLabel}
            </a>
          </Reveal>

          <Reveal className="mt-14">
            <p className="text-[11px] tracking-[0.25em] uppercase text-gold mb-5">Other Solutions</p>
            <div className="grid sm:grid-cols-3 gap-px bg-black/15 border border-black/15">
              {related.map((s) => (
                <Link key={s.slug} to={`/solutions/${s.slug}`} className="bg-ivory p-6 flex flex-col gap-2 hover:bg-[#eee6d6] transition-colors">
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
