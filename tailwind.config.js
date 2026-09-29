/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: 'hsl(var(--obsidian))',
        'obsidian-soft': 'hsl(var(--obsidian-soft))',
        ivory: 'hsl(var(--ivory))',
        'ivory-soft': 'hsl(var(--ivory-soft))',
        gold: 'hsl(var(--gold))',
        'gold-bright': 'hsl(var(--gold-bright))',
        'gold-soft': 'hsl(var(--gold-soft))',
        graphite: 'hsl(var(--graphite))',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        mast: '-0.02em',
        luxe: '0.05em',
      },
      maxWidth: {
        prose: '42rem',
      },
    },
  },
  plugins: [],
};
