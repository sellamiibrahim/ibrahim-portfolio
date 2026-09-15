/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0f17',
        panel: '#0f131c',
        panel2: '#111827',
        panel3: '#181c24',
        stroke: '#243041',
        muted: '#94a3b8',
        faint: '#64748b',
        text: '#f8fafc',
        primary: '#4edea3',
        primaryStrong: '#10b981',
        cyan: '#7bd0ff',
        blue: '#38bdf8',
        violet: '#9699ff',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 22px -8px rgba(78, 222, 163, 0.65)',
        line: 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
