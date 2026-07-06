import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0D10',
        navy: {
          DEFAULT: '#0F2340',
          deep: '#0A1930',
          light: '#173257',
        },
        signal: '#F5C400',
        cream: '#F4F0E4',
        stone: '#B9B2A0',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        widest2: '.28em',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(245,196,0,0.14) 1px, transparent 1px), linear-gradient(to right, rgba(245,196,0,0.14) 1px, transparent 1px)',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.6)', opacity: '0.9' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        sweep: 'sweep 6s linear infinite',
        pulseRing: 'pulseRing 3s ease-out infinite',
        ticker: 'ticker 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
