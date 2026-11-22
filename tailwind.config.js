/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: {
          core:  '#00C46B',
          main:  '#00E27A',
          deep:  '#00934F',
          mint:  '#7BFFC4',
          aqua:  '#12D9A8',
        },
        ink: '#0A0F1A',
        surface: '#05070C',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'aurora': 'radial-gradient(ellipse 80% 60% at 50% -10%, #00C46B22 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, #12D9A814 0%, transparent 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
