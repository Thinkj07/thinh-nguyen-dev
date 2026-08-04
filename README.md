# Thinh Nguyen Duc - Mono-Type Masterpiece Portfolio

A brutalist-minimalist, high-contrast, high-performance portfolio web application for **Thinh Nguyen Duc**, built using the **Mono-Type Masterpiece** architecture baseline (**React 18**, **Vite**, **Motion/Framer Motion**, **Lenis Smooth Scroll**, **Space Grotesk + JetBrains Mono** fonts, and **Tailwind CSS v4**).

---

## ⚡ Features & Technology Stack

### Tech Stack & Architecture Baseline
- **Design System Baseline**: Ported from `mono-type-masterpiece` (Brutalist Terminal Aesthetics, OKLCH monochrome palette, 0px sharp borders, grid-bg ambient pattern)
- **Framework & Build**: React 18 + Vite
- **Smooth Scrolling**: Lenis (`lenis`) for fluid inertia wheel scroll
- **Physics Custom Cursor**: Motion spring-based custom terminal cursor
- **Animations & Layout**: Motion (`motion/react`) with spring physics & gesture feedback
- **Typography**: Space Grotesk (Display headers), JetBrains Mono (Terminal & Code), Inter (Body)
- **Deploy**: Vercel SPA continuous deployment (`vercel.json`)

### Sections & Interactive Components
1. **Header Navigation**: Glassmorphism fixed header with direct section anchors (`About`, `Work`, `Stack`, `Experience`, `Contact`).
2. **Hero (`/`)**: Parallax ambient grid background with typed line (`HI, I'M THINH NGUYEN`), glowing terminal accent blur, and role description (`CS STUDENT @ HCMUT`).
3. **Interactive Terminal Bio (`01 / about`)**: Fully functional bash-style shell (`thinh@portfolio:~$`) supporting commands:
   - `help` — Available command directory
   - `skills` — Full-stack & AI technical stack breakdown
   - `projects` — Featured builds list
   - `contact` — Contact channels & details
   - `whoami` — Academic background summary
   - `clear` — Wipe screen buffer
4. **Bento Grid Selected Builds (`02 / work`)**: High-contrast Bento grid featuring Thinh Nguyen Duc's real projects (**ITWORKS Platform**, **Personal Portfolio**, **Connect 4 AI Engine**) with hover scale effects, tech badges, and direct GitHub links.
5. **Infinite Tech Stack Marquee (`03 / stack`)**: Interactive marquee ticker with hover pause & isolation highlighting Thinh Nguyen Duc's skills (ReactJS, Node.js, Python, Java, JavaScript, MySQL, MongoDB, Pygame & AI).
6. **Experience & Education (`04 / experience & education`)**: Interactive accordion timeline highlighting Computer Science studies at HCMUT, ITWORKS project lead, and Connect 4 AI engine development.
7. **Interactive Contact Footer (`05 / contact`)**: High-impact typography banner, 1-click email copier with animated ASCII particle explosion, and direct links to GitHub, LinkedIn, Facebook, and Resume PDF.

---

## 🚀 Local Development Setup

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment to Vercel

Push the changes to your GitHub repository:
```bash
git add .
git commit -m "Rebase UI/UX and codebase to mono-type-masterpiece baseline for Thinh Nguyen Duc portfolio"
git push origin main
```
Vercel will build the `dist/` bundle automatically and update your live portfolio site.
