import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="font-body text-[11px] tracking-[0.4em] uppercase text-gold mb-4">404</p>
        <h1 className="font-heading text-4xl font-light mb-6">We couldn&apos;t find that page.</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 border border-gold-soft text-ivory px-8 py-4 font-body text-xs tracking-[0.2em] uppercase hover:bg-ivory hover:text-obsidian hover:border-ivory transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
