/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ivory: {
          50:  '#FDFDFC',
          100: '#FAF9F5',
          200: '#F4F2EC',
          300: '#EAE7DF',
        },
        surface: {
          light: '#FFFFFF',
          muted: '#F5F4EE',
          dark:  '#16191D',
        },
        charcoal: {
          DEFAULT: '#12151A',
          secondary: '#363C45',
          muted: '#636D7A',
          faint: '#949FA8',
        },
        emerald: {
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          deep: '#0B643A',
        },
        mint: {
          DEFAULT: '#6EE7B7',
          subtle: '#D4F4E4',
          faint: '#EAF9F1',
        },
        border: {
          light: '#EAE7DF',
          subtle: '#E2DFD6',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Roboto Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(18, 21, 26, 0.03), 0 1px 3px rgba(18, 21, 26, 0.02)',
        'medium': '0 12px 30px -10px rgba(18, 21, 26, 0.06), 0 4px 12px -2px rgba(18, 21, 26, 0.03)',
        'elevated': '0 24px 48px -12px rgba(18, 21, 26, 0.08), 0 8px 16px -4px rgba(18, 21, 26, 0.03)',
        'emerald': '0 12px 28px -6px rgba(11, 100, 58, 0.28)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-10px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%':      { opacity: 0.5 },
        }
      },
    },
  },
  plugins: [],
};
