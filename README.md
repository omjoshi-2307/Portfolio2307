# OM JOSHI

<div align="center">

**A Personal Portfolio — Engineering, Exploration & Digital Craft.**

An evolving personal portfolio documenting my journey through software engineering, technical exploration and hands-on project development.

[![Portfolio](https://img.shields.io/badge/Live_Portfolio-000000?style=flat&logo=vercel&logoColor=white)](https://om-joshi-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-omjoshi--2307-000000?style=flat&logo=github&logoColor=white)](https://github.com/omjoshi-2307)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0m--joshi2307-000000?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/0m-joshi2307/)
[![X](https://img.shields.io/badge/X-@omjoshi__2307-000000?style=flat&logo=x&logoColor=white)](https://x.com/omjoshi_2307)

</div>

---

## Overview

This repository contains the source code for my personal portfolio. Designed with a strict monochrome editorial aesthetic and built on modern web standards, it serves as an engineering showcase and centralized record of my technical work:

- **Personal Background:** Background, learning methodology, and academic journey as an Information Technology student at NMIET, Pune (Expected 2029).
- **Skills & Technologies:** Categorized technical proficiencies spanning systems programming, modern frontend development, backend APIs, cybersecurity, networking, and embedded platforms.
- **Selected Projects:** Real-world implementations across decentralized escrow, computer vision pipelines, embedded robotics, and civic systems.
- **Experience & Activities:** Chronological timeline of hackathons, builder sprints, academic milestones, and student technical programs.
- **Achievements & Recognition:** Regional competitive selections, cloud challenge credentials, and community recognitions.
- **Verified Credentials:** Direct links to verified technical certifications and credential registries.
- **Direct Communication:** Direct contact channels, credential registries, and verified social profiles.

---

## Design Philosophy

The portfolio is designed around a restrained, high-contrast monochrome aesthetic influenced by Swiss graphic design, brutalist minimalism, and modern editorial typography.

- **Monochrome Visual Identity:** A strict black-and-white color palette (`#000000`, `#0A0A0A`, `#111111`, `#292929`, `#FFFFFF`, `#A3A3A3`, and `#737373`). High contrast eliminates visual clutter and maintains absolute focus on code and typography.
- **Editorial Typography System:**
  - *Cormorant Garamond:* Classical editorial serif utilized for major section headings, quotes, and primary statements.
  - *Manrope:* Clean, modern sans-serif engineered for interfaces, long-form paragraphs, navigation, and badges.
  - *JetBrains Mono:* Monospaced typeface reserved for technical metadata, timeline dates, category identifiers, and code labels.
  - *Trixy Stories Bold:* Explicit custom display font dedicated exclusively to the centered name branding in the hero reveal.
- **Architectural Layout & Composition:** Asymmetric grid layouts, hairline borders (`1px solid #292929`), intentional whitespace, and zero decorative gradients or unnecessary cards.
- **Restrained Interactive Physics:** Interactive elements—including an elastic 3D identity lanyard and canvas swarm dynamics—provide responsive tactile feedback without distracting from content readability.
- **Localized WebGL Shader:** A custom Three.js GLSL fragment shader simulating an accretion disk and photon ring is strictly isolated behind the Contact and Footer wrapper, ensuring the rest of the application retains a pure black backdrop.

---

## Feature Highlights

- **Cinematic Reveal Intro:** Full-screen monochrome name reveal and synchronized progress counter, transitioning smoothly into the mounted application via a continuous 55× scale zoom. Fully bypassed when `prefers-reduced-motion` is detected.
- **Interactive 3D Lanyard:** Real-time Three.js physics simulation rendering a draggable identification badge with realistic cloth dynamics, gravity, and automatic fallback to an architectural portrait frame.
- **Interactive Swarm Cursor:** Lightweight 500-particle canvas follower with fluid inertia, click pulses, and automatic idle throttling.
- **Consolidated Master Chronicle:** A unified **Work & Recognition** section bringing projects, chronological activities, competitive milestones, verified certificates, and current focus areas into a single coherent interface.
- **Glassmorphic Navigation Bar:** Floating header equipped with real-time scroll spying, active pill indicators, mobile navigation drawer, and smooth anchor routing.
- **Backward-Compatible Deep Anchors:** Support for direct hash links (`#hero`, `#about`, `#skills`, `#work`, `#projects`, `#experience`, `#recognition`, `#certificates`, `#current-focus`, `#contact`).
- **Isolated Black Hole Experience:** Dedicated WebGL canvas rendering a real-time accretion disk with mouse parallax, contained strictly within the Contact and Footer sections.
- **Accessibility & Motion Preferences:** Built with semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`), ARIA labels, and immediate suppression of heavy animations when reduced motion is preferred.

---

## Technology Stack

### Core Framework & Language
- **[React 19](https://react.dev/):** Component architecture and concurrent UI rendering.
- **[TypeScript 5.8](https://www.typescriptlang.org/):** Strict static typing, custom interfaces, and type safety across all components.
- **[Vite 8](https://vite.dev/):** Next-generation frontend build tooling with lightning-fast Hot Module Replacement (HMR).

### Styling & Design System
- **[Tailwind CSS v3](https://tailwindcss.com/):** Utility-first styling with custom font families, semantic color tokens, and layout extensions.
- **CSS Design Tokens:** Centralized CSS custom properties in `src/styles/tokens.css` managing color values, borders, and animation easings.
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge):** Conflict-free conditional utility class resolution.

### Motion & Interactions
- **[Motion for React](https://motion.dev/) (`motion@14.9.1`):** Declarative layout transitions, viewport entrance triggers, and spring animations.
- **[Lucide React](https://lucide.dev/):** Lightweight, consistent vector iconography.

### 3D Graphics & Shaders
- **[Three.js](https://threejs.org/) (`three@0.187.0`):** WebGL rendering engine powering the 3D physics lanyard and custom GLSL fragment shader for the black hole accretion disk.

### Tooling & Code Quality
- **[ESLint 10](https://eslint.org/):** Flat configuration with TypeScript ESLint and React hooks verification rules.
- **PostCSS & Autoprefixer:** Automated CSS vendor prefixing and modern property compilation.

---

## Selected Projects

### 01 — SureD
**Blockchain-Powered Rental Security Deposit Platform**

A decentralized web application designed to bring transparency and security to residential rental deposits using smart contracts and automated escrow workflows.

- **Ecosystem:** Stellar Network & Soroban smart contracts.
- **Architecture:** Tenant-landlord dual-signature confirmation, automated deposit locking, condition verification, and Freighter wallet integration.
- **My Contribution:** Frontend architecture, user interface and dashboard design, tenant/landlord interaction flows, transaction status indicators, Freighter wallet connection, and user-flow testing.
- **Team Collaboration:** Backend Soroban smart contracts developed by project collaborator [Khushal](https://github.com/Khushal-93).
- **Links:** [Live Application](https://sure-d.vercel.app/) · [GitHub Repository](https://github.com/Khushal-93/SureD)

### 02 — DepthWizard
**Single-View Height Estimation & 3D Flythrough**

An AI and computer vision project developed around Smart India Hackathon problem statement **SIH26175** for the internal selection round.

- **Problem Context:** ISRO / Department of Space — Disaster Management.
- **Team:** SochX Horizon (Internal Selection Round).
- **Processing Pipeline:** `RGB IMAGE` → `AI DEPTH ESTIMATION` → `DEPTH MAP` → `DSM GENERATION` → `3D FLYTHROUGH`
- **Technical Scope:** Explores depth inference from single optical satellite and aerial images. Distinguishes relative depth representations (from non-georeferenced images) and metric spatial outputs (requiring georeferenced metadata).
- **Technologies:** Python, OpenCV, Depth Estimation Models, Digital Surface Modeling (DSM).

### 03 — WALL-E
**Autonomous Obstacle-Avoiding Robot**

A physical robotics project built to navigate unstructured indoor environments autonomously without human intervention.

- **Hardware Architecture:** Arduino Uno (ATmega328P), HC-SR04 ultrasonic sensor, L298N dual H-bridge motor driver, chassis, and DC gear motors.
- **Engineering Implementation:** Hardware assembly, circuit wiring, power distribution, sensor calibration, embedded C++ control algorithms, and obstacle avoidance logic.
- **Link:** [GitHub Repository](https://github.com/omjoshi-2307/WALL-E-Autonomous-Obstacle-Avoiding-Robot)

### 04 — Jal-Sanchaee-Navachar
**Urban Water Management & Conservation Concept**

A rapid-prototyped concept developed during the **AISSMS Techathon 3.0** 24-hour sprint addressing residential water distribution and loss prevention.

- **Concept Scope:** Real-time tank-level monitoring, overflow alerts, usage trend analytics, and community water credit mechanics.
- **Sprint Focus:** Problem domain research, telemetry pipeline design, interface wireframes, and proof-of-concept presentation.
- **Note:** Concept and UI prototype; hardware-software deployment was intentionally constrained by the 24-hour hackathon timeframe.

### 05 — CivicLoop
**Complaints That Don't Disappear**

An early-stage civic-technology initiative selected among the **Top 60 projects in the Pune Region** at **Anveshana 2026–27**.

- **Initiative Scope:** Transparent municipal complaint tracking, duplicate issue clustering, public status audit logs, evidence-based resolutions, and ward-level accountability dashboards.
- **Current Status:** Early-stage architectural design and research.

---

## Work & Recognition

The portfolio unifies practical experience, competitive selections, and continuous learning into a structured record:

### Experience & Activities Timeline
1. **Anveshana (2026–27):** Selected among Top 60 projects across the Pune Region with CivicLoop.
2. **Smart India Hackathon (September 2026):** Team participant in the college internal selection round with team SochX Horizon on problem statement SIH26175 (DepthWizard).
3. **Stellar Build Station Pune (2026):** 21-day builder sprint focused on Soroban smart contracts and the Stellar ecosystem through SureD.
4. **GDGC NMIET Pune (November 2025):** Completed Google Cloud Study Jams with 19+1 badges and received a Certificate of Excellence.
5. **AISSMS Techathon 3.0 (2025):** 24-hour innovation hackathon sprint developing the Jal-Sanchaee-Navachar concept.
6. **AWS Student Community:** Recognized as an AWS Student Builder, exploring core cloud architecture patterns and foundational services.
7. **Adobe University Hackathon:** Active participant in student technical hackathon activities.

### Verified Certifications
- **Python 101 for Data Science** — IBM / Cognitive Class · [Verify Certificate](https://courses.cognitiveclass.ai/certificates/3c105827fd0d435da8785fded690cc4b)
- **CS105: Introduction to Python** — Cognitive Class · [Verify Credential](https://www.credly.com/users/om-joshi2623)
- **Ethical Hacking 101** — Cybersecurity Education (Defensive fundamentals, reconnaissance, access control)
- **Programming with Python 3.X** — Advanced Coursework (OOP, modular structure, exception architecture)
- **Introduction to Machine Learning** — Microsoft Learn (Supervised learning, classification, evaluation metrics)
- **Web Development with VS Code** — Microsoft Learn (Modern toolchains, DOM lifecycle, developer tooling)
- **All Badges & Credentials:** [Credly Profile](https://www.credly.com/users/om-joshi2623)

### Current Engineering Focus
- **Software Engineering:** System architecture, clean code principles, and design patterns.
- **Full-Stack Development:** Scalable component lifecycles, API design, and state management.
- **Cybersecurity:** Network protocols, defensibility analysis, and authentication primitives.
- **Artificial Intelligence & Computer Vision:** Depth estimation, YOLO object detection, and OpenCV pipelines.
- **Blockchain:** Decentralized state machines, escrow mechanisms, and smart contracts.
- **Embedded Systems:** Microcontroller programming, telemetry sensors, and hardware prototyping.

---

## Project Architecture

```text
om-joshi-portfolio/
├── public/                      # Static assets & font manifests
│   ├── fonts/                   # Typography files
│   ├── favicon.svg              # Vector favicon
│   └── icons.svg                # Vector sprite definitions
├── src/
│   ├── assets/                  # Media assets & grayscale portraits
│   │   ├── photo-grayscale.jpeg # High-contrast architectural portrait
│   │   └── photo.jpeg           # Original photographic portrait
│   ├── components/
│   │   ├── layout/              # Structural layout components
│   │   │   ├── CinematicIntro.tsx # Full-screen reveal & zoom animation
│   │   │   ├── Header.tsx       # Glassmorphic header with scroll spy
│   │   │   └── Footer.tsx       # Editorial footer & metadata
│   │   └── ui/                  # Reusable UI primitives & interactive canvases
│   │       ├── BackToTop.tsx    # Floating scroll-to-top button
│   │       ├── BlackHole.tsx    # Isolated WebGL GLSL accretion disk shader
│   │       ├── Icons.tsx        # Branded vector icons (GitHub, LinkedIn, X, etc.)
│   │       ├── Lanyard.jsx      # Three.js 3D physics-based ID card
│   │       ├── ScrollStack.tsx  # Stacked cards interaction primitive
│   │       ├── SwarmCursor.jsx  # Interactive canvas particle swarm follower
│   │       └── TechIcons.tsx    # Monochrome technology logos
│   ├── hooks/                   # Custom React utility hooks
│   ├── lib/
│   │   └── utils.ts             # Tailwind class merging utility (clsx + twMerge)
│   ├── sections/                # Core single-page sections
│   │   ├── Hero.tsx             # System status, 24-hr Pune clock, lanyard & CTAs
│   │   ├── About.tsx            # Personal background, learning methodology & philosophy
│   │   ├── Skills.tsx           # Categorized proficiencies & exploration areas
│   │   ├── WorkAndRecognition.tsx # Consolidated projects, timeline, achievements & focus
│   │   └── Contact.tsx          # Direct communication channels & email CTA
│   ├── styles/
│   │   ├── globals.css          # Tailwind base layers, font declarations & scrollbar
│   │   └── tokens.css           # Centralized monochrome CSS design variables
│   ├── types/
│   │   └── index.ts             # Shared application TypeScript definitions
│   ├── App.tsx                  # Root application orchestrator & canvas layering
│   ├── main.tsx                 # React 19 entry point with StrictMode
│   └── vite-env.d.ts            # Vite client environment declarations
├── index.html                   # HTML entry point, Google Fonts & theme meta
├── package.json                 # Project dependencies & operational scripts
├── postcss.config.js            # PostCSS configuration with Tailwind & Autoprefixer
├── tailwind.config.js           # Extended typography, spacing & color themes
├── tsconfig.json                # Root TypeScript configuration
└── vite.config.ts               # Vite build configuration with '@' alias
```

---

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js:** v18.0.0 or higher (v20+ recommended)
- **npm:** v9.0.0 or higher
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/omjoshi-2307/Portfolio2307.git
cd Portfolio2307
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will launch locally at `http://localhost:5173/` with Hot Module Replacement (HMR).

### 4. Build for Production

```bash
npm run build
```

This compiles TypeScript definitions (`tsc -b`) and bundles optimized production assets into the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

Simulates the production environment locally to verify bundles, fonts, and WebGL shaders before deployment.

### 6. Lint Codebase

```bash
npm run lint
```

---

## Available Scripts

The following scripts are defined in `package.json`:

| Command | Description |
|---|---|
| `npm run dev` | Launches the local Vite development server with Hot Module Replacement |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) followed by Vite production bundling |
| `npm run lint` | Analyzes code quality using ESLint across all TypeScript and React files |
| `npm run lint:fix` | Automatically fixes autofixable ESLint rules and formatting issues |
| `npm run preview` | Serves the compiled `dist/` production build locally for verification |

---

## Deployment

The portfolio is deployed to **Vercel** with continuous deployment synchronized from the `main` branch.

- **Platform:** [Vercel](https://vercel.com/)
- **Live URL:** [https://om-joshi-portfolio.vercel.app/](https://om-joshi-portfolio.vercel.app/)
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## Accessibility, SEO & Performance

- **Reduced Motion Support:** Explicitly checks `prefers-reduced-motion: reduce`. When enabled, the cinematic zoom intro is bypassed, smooth scrolling is switched to standard scrolling, and particle canvas effects are disabled.
- **Semantic HTML & Navigation:** Built with proper landmark roles (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) and accessible ARIA attributes (`aria-label`, `aria-hidden`) on all interactive controls and external links.
- **High Contrast Typography:** Pure white (`#FFFFFF`) against deep black (`#000000`) surfaces ensures WCAG AA compliance for textual legibility.
- **Asset Optimization:** WebGL animation frames (`requestAnimationFrame`) are paused or cleaned up on unmount to prevent background memory leaks or GPU overhead.
- **SEO & Social Sharing:** Meta tags configured in `index.html` including viewport scaling, dark theme color declaration (`#000000`), and canonical descriptions.

---

## Roadmap

Future iterations and planned enhancements:

- **Expanded Case Studies:** In-depth technical writeups and architecture diagrams as current projects evolve.
- **Computer Vision Benchmarks:** Interactive visualization of depth maps and point-cloud reconstructions.
- **Micro-Interaction Polish:** Ongoing accessibility refinements and keyboard navigation enhancements.

---

## Connect

Feel free to connect for collaborations, technical discussions, or software development opportunities:

- **Live Portfolio:** [om-joshi-portfolio.vercel.app](https://om-joshi-portfolio.vercel.app/)
- **GitHub:** [github.com/omjoshi-2307](https://github.com/omjoshi-2307)
- **LinkedIn:** [linkedin.com/in/0m-joshi2307](https://www.linkedin.com/in/0m-joshi2307/)
- **X (Twitter):** [x.com/omjoshi_2307](https://x.com/omjoshi_2307)
- **Instagram:** [instagram.com/0m.a.joshi](https://www.instagram.com/0m.a.joshi/)
- **Credly:** [credly.com/users/om-joshi2623](https://www.credly.com/users/om-joshi2623)
- **Email:** [omjoshi2307@gmail.com](mailto:omjoshi2307@gmail.com)

---

<div align="center">

**Built with curiosity. Refined through iteration.**

<sub>© 2026 Om Joshi. All rights reserved.</sub>

</div>
