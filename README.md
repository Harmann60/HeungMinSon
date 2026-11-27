# Heung-Min Son — #7🇰🇷 Tribute Website

An interactive, motion-driven athlete tribute website dedicated to **Heung-Min Son** — South Korea national team captain, Tottenham Hotspur legend, and LAFC `#7`.

**Live Site:** [heung-min-son.vercel.app](https://heung-min-son.vercel.app/)

---

## Vision

While global football icons like Messi and Ronaldo have dedicated official digital experiences, **Heung-Min Son** deserves a tribute that captures his pace, two-footed brilliance, leadership, and humility on an equal stage.

> *“Effort never betrays you.”* — Heung-Min Son

---

## Key Features

- **Interactive Liquid-Mask Hero & Shutter Celebration:** Cursor-tracking SVG gooey filter mask (`feGaussianBlur` + `feColorMatrix`) revealing a halftone camera-celebration layer over a dark stadium silhouette, paired with a live `"Snap Celebration"` shutter flash counter.
- **On-Pitch Legacy Chronicles:** Full-width matchday storytelling (Bilbao 2025 Europa League triumph, 2021–22 Premier League Golden Boot, 2019 FIFA Puskás solo run, Etihad UCL brace, 2018 Asian Games Gold, and LAFC `#7` arrival) driven by **GSAP ScrollTrigger** horizontal highlight wipes and custom trophy vectors.
- **Kits & Signature Boots Archive:** Filterable showcase (`All`, `Clubs`, `Korea NT`, `Signature Boots`) with front-to-back `#7` jersey hover swaps and an inspect modal for every era.
- **Interactive Career Passport:** Era-by-era breakdown covering Hamburger SV, Bayer Leverkusen, Tottenham Hotspur, South Korea NT, and LAFC with appearances, goals, assists, and matchday photography.
- **Tilted Photo Reel & Dedicated Photo Gallery:** Staggered `.vd-card` reel plus a filterable 16-photo gallery (`Tottenham Hotspur`, `LAFC`, `Korea & Awards`) with a full-screen keyboard-navigable lightbox (`Esc`, `←`, `→`) and zero repeated photos across the entire site.
- **Fan Club Guestbook:** Live tribute submission form backed by Zustand state management.
- **Curved-Notch Masked Footer:** SVG-masked editorial panel with custom pitch contour lines, signature vector, active-link strike animation, and an infinite scroll-reactive GSAP ticker marquee.

---

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Framework** | React 19 + TypeScript | Component architecture & type safety |
| **Build Tool** | Vite 6 | Fast HMR & production bundling |
| **Styling** | Tailwind CSS v4 | Spurs Midnight Navy (`#070b19`) & Electric Ice (`#38bdf8`) design tokens |
| **Motion** | GSAP (`ScrollTrigger`, `@gsap/react`) & Framer Motion | Scroll-triggered wipes, marquee ticker, menu reveal, & spring cursor tracking |
| **State** | Zustand | Navigation & Fan Wall state |
| **Icons** | Lucide React & Custom SVGs | UI icons, trophies, kits, boots, signature, & pitch contours |
| **Hosting** | Vercel | Continuous deployment from `main` |

---

## Project Structure

```text
HeungMinSon/
├── public/
│   ├── images/
│   │   ├── hero-base.jpg
│   │   ├── hero-reveal.jpg
│   │   ├── footer-trophy.jpg
│   │   └── son/                  # 33 unique match & portrait photos
│   └── svgs/
│       └── image-bg.svg          # Footer notch mask
├── src/
│   ├── components/
│   │   ├── common/               # PreLoader, Header, Menu, Footer
│   │   ├── sections/             # Hero, OnPitch, Archive, OffPitch, Gallery
│   │   └── vectors/              # SonLogo, PitchPattern, SonSignature, Kits, Trophies
│   ├── data/
│   │   └── sonData.ts            # Career stats, moments, archive, & photo gallery data
│   ├── store/
│   │   └── useAppStore.ts        # Zustand navigation & fan guestbook stores
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
└── vite.config.ts
```

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Harmann60/HeungMinSon.git

# 2. Navigate into the project directory
cd HeungMinSon

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev

# 5. Build for production
npm run build
```

---

## Credits & License

- **Photography:** Matchday and portrait photography sourced from Wikimedia Commons under Creative Commons licenses.
- **License:** Distributed under the [MIT License](LICENSE).

---

## Author

**Harman**  
Email: `harmanjss10@gmail.com`  
GitHub: [@Harmann60](https://github.com/Harmann60)
