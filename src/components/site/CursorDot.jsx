import React, { useEffect, useRef, useState } from 'react';

export default function CursorDot() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!mq.matches || reduceMotion) return;

    document.body.classList.add('cursor-luxe');
    setEnabled(true);

    function onMove(e) {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    }
    window.addEventListener('mousemove', onMove);

    function onOver(e) {
      if (e.target.closest('a, button')) setHovering(true);
    }
    function onOut(e) {
      if (e.target.closest('a, button')) setHovering(false);
    }
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      document.body.classList.remove('cursor-luxe');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className={`fixed top-0 left-0 pointer-events-none z-[999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold transition-[width,height,background-color] duration-200 mix-blend-difference ${
        hovering ? 'w-11 h-11 bg-gold/25' : 'w-5 h-5'
      }`}
    />
  );
}
