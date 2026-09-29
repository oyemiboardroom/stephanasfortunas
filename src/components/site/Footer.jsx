import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-14 md:pt-20 pb-10 bg-obsidian text-ivory border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-0">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_repeat(3,0.9fr)] gap-8 md:gap-12 mb-12">
          <div className="flex flex-col gap-4 max-w-xs">
            <a href="/#top" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="StephanasFortunas mark" className="w-7 h-7 object-contain" />
              <b className="font-heading text-xl font-normal">StephanasFortunas</b>
            </a>
            <p className="font-heading italic text-gold-bright text-base">
              From Property to Capital. From Capital to Growth.
            </p>
            <p className="text-graphite text-sm">
              We advise property owners and help them raise capital, so their real estate earns more and grows
              in value.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold mb-5 font-medium">Solutions</h4>
            <ul className="grid gap-3">
              <li><Link to="/solutions/real-estate-agency" className="text-ivory/70 text-sm hover:text-gold-bright">Real Estate Agency</Link></li>
              <li><Link to="/solutions/portfolio-advisory" className="text-ivory/70 text-sm hover:text-gold-bright">Portfolio Advisory</Link></li>
              <li><Link to="/solutions/rent-to-own" className="text-ivory/70 text-sm hover:text-gold-bright">Rent-to-Own</Link></li>
              <li><Link to="/solutions/real-estate-backed-guaranty" className="text-ivory/70 text-sm hover:text-gold-bright">Real Estate-Backed Guaranty</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold mb-5 font-medium">Capital</h4>
            <ul className="grid gap-3">
              <li><Link to="/solutions/trade-distribution" className="text-ivory/70 text-sm hover:text-gold-bright">Trade Distribution</Link></li>
              <li><Link to="/solutions/sme-equity-investment" className="text-ivory/70 text-sm hover:text-gold-bright">SME Equity Investment</Link></li>
              <li><a href="/#clientele" className="text-ivory/70 text-sm hover:text-gold-bright">Who We Serve</a></li>
              <li><a href="/#alliance" className="text-ivory/70 text-sm hover:text-gold-bright">Partnership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.25em] uppercase text-gold mb-5 font-medium">Firm</h4>
            <ul className="grid gap-3">
              <li><a href="/#ethos" className="text-ivory/70 text-sm hover:text-gold-bright">About Us</a></li>
              <li><a href="/#insights" className="text-ivory/70 text-sm hover:text-gold-bright">Insights</a></li>
              <li><a href="/#leadership" className="text-ivory/70 text-sm hover:text-gold-bright">Leadership</a></li>
              <li><a href="/#consultation" className="text-ivory/70 text-sm hover:text-gold-bright">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 pt-8 border-t border-white/10">
          <p className="text-graphite text-sm">© 2026 StephanasFortunas. All rights reserved.</p>
          <a
            href="/#consultation"
            className="group inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] uppercase"
          >
            Request a Confidential Consultation
            <span className="h-px w-6 bg-gold transition-all group-hover:w-10" />
          </a>
        </div>
      </div>
    </footer>
  );
}
