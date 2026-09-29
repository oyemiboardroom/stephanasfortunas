import React, { useEffect } from 'react';
import { useDrawer } from '../../context/DrawerContext.jsx';

const LINKS = [
  ['01', 'Home', '/#top'],
  ['02', 'About Us', '/#ethos'],
  ['03', 'Solutions', '/#pillars'],
  ['04', 'For Investors', '/#capital'],
  ['05', 'Our Process', '/#process'],
  ['06', 'Who We Serve', '/#clientele'],
  ['07', 'Why Us', '/#distinction'],
  ['08', 'Insights', '/#insights'],
  ['09', 'Partners', '/#alliance'],
  ['10', 'Contact Us', '/#consultation'],
];

export default function Drawer() {
  const { isOpen, close } = useDrawer();

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <div className={`fixed inset-0 z-[90] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <button
        type="button"
        aria-label="Close menu"
        onClick={close}
        className={`absolute inset-0 bg-black/55 backdrop-blur-md border-none p-0 cursor-pointer transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute top-0 left-0 bottom-0 w-[min(88vw,460px)] bg-obsidian border-r border-white/10 shadow-[24px_0_60px_rgba(0,0,0,0.5)] flex flex-col px-6 sm:px-11 pt-7 pb-9 overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <a href="/#top" onClick={close} className="flex items-center gap-3">
            <span className="border border-gold-soft w-10 h-10 flex items-center justify-center font-heading text-gold text-base">
              SF
            </span>
            <b className="font-heading text-xl font-normal text-ivory">
              <span className="text-gold">Stephanas</span>Fortunas
            </b>
          </a>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="border border-white/10 text-ivory w-9 h-9 text-sm"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col">
          {LINKS.map(([idx, label, href]) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="flex items-baseline gap-4 py-4 border-t border-white/10 font-heading text-2xl font-light text-ivory-soft hover:text-gold-bright hover:pl-2 transition-all"
            >
              <span className="font-body text-[11px] tracking-wider text-gold w-6 flex-shrink-0">{idx}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          <a
            href="/#consultation"
            onClick={close}
            className="inline-flex items-center gap-2 border border-gold-soft text-ivory px-8 py-4 font-body text-xs tracking-[0.2em] uppercase hover:bg-ivory hover:text-obsidian hover:border-ivory transition-colors"
          >
            Request a Confidential Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
