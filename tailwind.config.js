/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--color-bg)',
          near: '#0A0A0A',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          muted: 'var(--color-surface-muted)',
        },
        primary: {
          DEFAULT: 'var(--color-text-primary)',
          foreground: 'var(--color-bg)',
          off: '#F5F5F5',
        },
        secondary: {
          DEFAULT: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
        },
      },
      backgroundImage: {
        'signature-gradient': 'var(--gradient-signature)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        trixy: ['"Trixy Stories Bold"', 'serif'],
      },
      borderRadius: {
        sharp: '0px',
        subtle: '2px',
        card: '4px',
        interactive: '8px',
        pill: '9999px',
      },
    },
  },
  plugins: [],
};
