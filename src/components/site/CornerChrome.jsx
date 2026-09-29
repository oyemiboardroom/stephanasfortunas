import React, { useEffect, useState } from 'react';
import { useDrawer } from '../../context/DrawerContext.jsx';

export default function CornerChrome() {
  const { open } = useDrawer();
  const [tag, setTag] = useState('Entrance');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTag(entry.target.getAttribute('data-tag'));
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    const sections = document.querySelectorAll('[data-tag]');
    sections.forEach((el) => spy.observe(el));
    return () => spy.disconnect();
  });

  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex items-center gap-3 p-6">
        <button
          type="button"
          onClick={open}
          aria-haspopup="true"
          className="flex items-center gap-3 bg-obsidian/35 backdrop-blur-md px-4 py-2 text-ivory"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="block w-[18px] h-px bg-gold" />
            <span className="block w-3 h-px bg-gold" />
            <span className="block w-[18px] h-px bg-gold" />
          </span>
          <span className="font-body text-xs tracking-[0.3em] uppercase">Concierge</span>
        </button>
      </div>

      <div className="fixed top-0 right-0 z-50 text-right p-6 bg-obsidian/35 backdrop-blur-md hidden sm:block">
        <div className="font-body text-[11px] tracking-[0.3em] uppercase text-gold">Est. MMXXVI</div>
        <div className="mt-1 font-body text-xs tracking-[0.14em] uppercase text-ivory-soft">
          Real Estate Capital &amp; Advisory
        </div>
      </div>

      <div className="fixed bottom-0 right-0 z-50 p-5 bg-obsidian/35 backdrop-blur-md font-body text-xs tracking-[0.3em] uppercase text-gold-bright hidden sm:block">
        {tag}
      </div>
    </>
  );
}
