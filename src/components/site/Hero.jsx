import React from 'react';

export default function Hero() {
  return (
    <section
      id="top"
      data-tag="Entrance"
      className="relative min-h-[min(92vh,960px)] flex items-end overflow-hidden isolate mt-6"
    >
      <img src="/images/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover -z-30" />
      <div
        aria-hidden="true"
        className="absolute right-[2%] top-[8%] font-heading font-light leading-none text-ivory/[0.035] -z-20 select-none"
        style={{ fontSize: 'min(46vw, 620px)' }}
      >
        S
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian/95" />

      <div className="px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-14 md:pb-20 max-w-[68rem] flex flex-col gap-7">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-gold">StephanasFortunas</p>
        <h1 className="font-heading font-light leading-[1.04] text-[clamp(3.2rem,8.2vw,7.4rem)] tracking-mast">
          Unlocking the Value
          <br />
          <em className="not-italic italic text-gold">&amp; Growth Potential</em>
          <br />
          of Real Estate
        </h1>
        <p className="text-ivory-soft text-base md:text-lg max-w-xl">
          Private, strategic and tailored real estate solutions for property owners, investors and institutions
          seeking to maximise the value, income and long-term performance of their real estate assets.
        </p>
        <div className="flex flex-wrap items-center gap-8 mt-1">
          <a
            href="#pillars"
            className="inline-flex items-center gap-2 border border-gold-soft text-ivory px-8 py-4 font-body text-xs tracking-[0.2em] uppercase hover:bg-ivory hover:text-obsidian hover:border-ivory transition-colors"
          >
            Explore Our Solutions
          </a>
          <a href="#consultation" className="group inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase">
            Request a Confidential Consultation
            <span className="h-px w-6 bg-gold transition-all group-hover:w-10" />
          </a>
        </div>
      </div>

      <div className="absolute right-4 sm:right-6 md:right-8 bottom-8 flex flex-col items-center gap-2 text-graphite text-[11px] tracking-[0.3em] uppercase">
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-scrollmove" />
      </div>
    </section>
  );
}
