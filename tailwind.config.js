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
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
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
