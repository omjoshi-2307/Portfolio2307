# Om Joshi — Personal Portfolio

> **Identity:** Om Joshi  
> **Positioning:** IT Student & Developer  
> **Tagline:** *Curious by nature. Practical by approach. Always building.*  
> **Aesthetic:** Editorial Minimalism × Swiss Design × Futuristic Technology × Creative Interactions

---

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode enabled)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) (Stable with PostCSS & Autoprefixer)
- **Animations:** [Motion for React](https://motion.dev/) (`motion@14.9.1`)
- **Design Tokens:** Centralized CSS custom properties in `src/styles/tokens.css`
- **Icons:** [Lucide React](https://lucide.dev/) + Pixel-perfect inline SVGs
- **Code Quality:** [ESLint](https://eslint.org/) (Flat Config) + TypeScript ESLint

---

## 🎬 Cinematic Name Reveal Intro & Landing Hero

1. **Cinematic Name Reveal Overlay (`CinematicIntro.tsx`):**
   - **Playback Behavior:** Plays every time the website loads or the visitor refreshes the page (no persistent storage suppression).
   - **Initial Frame:** Centered "OM JOSHI" text rendered and fully visible from frame 0 in bold Space Grotesk in `#FF2D95`.
   - **Readable Hold & Drift:** 850ms hold at centered position for immediate brand recognition.
   - **Continuous Camera Zoom:** Smooth 52× scale transform with custom cubic-bezier `[0.65, 0, 0.15, 1]` without rasterization blur bottlenecks or layout reflows.
   - **Seamless Reveal:** The homepage is mounted directly behind the intro; at 700ms into the zoom, the black overlay background dissolves smoothly over 550ms, revealing the homepage without blank frames or flashes.
   - **Skip Controls:** Accessible button with `FastForward` icon and keyboard `Esc` listener.
   - **Reduced Motion:** Fully honors `prefers-reduced-motion: reduce` by bypassing overlay and rendering hero statically.

2. **Landing Hero Section (`Hero.tsx`):**
   - **Left Column:** Live status indicator, massive editorial heading ("OM JOSHI"), positioning badge, mandatory tagline (*"Curious by nature. Practical by approach. Always building."*), grounded philosophy copy, and high-contrast CTA buttons.
   - **Right Column (Professional Portrait Frame):** Professional photograph (`src/assets/photo.jpeg`) integrated into an architectural 4:5 frame with Swiss corner ticks (`+`), subtle vignette gradient, and an editorial technical badge (`Om Joshi // DEVELOPER`).
   - **Background Ambience:** Precision technical micro-grid and atmospheric radial gradients in signature pink (`#FF2D95`) and electric blue (`#8B9EFF`).
   - **Theme Compatibility:** Seamless dark (`#0A0A0F`) and light (`#FAFAFA`) modes with responsive header theme toggle.

---

## 📁 Architecture

```
src/
├── assets/                  # Static assets & media (photo.jpeg)
├── components/
│   ├── layout/              # ThemeProvider, Header, CinematicIntro
│   └── ui/                  # Reusable UI primitives
├── hooks/                   # useTheme & theme context
├── lib/                     # Utilities (cn class merger)
├── sections/                # Page sections (Hero)
├── styles/
│   ├── globals.css          # Tailwind base & directives
│   └── tokens.css           # Centralized CSS variables for dark/light themes
├── types/                   # Shared TypeScript definitions
├── vite-env.d.ts            # Vite client and static asset declarations
├── App.tsx                  # Root application orchestrator
└── main.tsx                 # React 19 root mount wrapped with ThemeProvider
```

---

## 🚀 Available Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Type-check with TypeScript and build production bundle with Vite.
- `npm run lint`: Run ESLint across all TypeScript and React files.
- `npm run lint:fix`: Automatically fix ESLint formatting and rule warnings.
- `npm run preview`: Preview the production build locally.
