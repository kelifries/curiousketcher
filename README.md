# curiousketcher — portfolio site

Personal art portfolio for [@curiousketcher](https://instagram.com/curiousketcher).

- **Stack:** React 18 + Vite 5
- **Live:** https://kelifries.github.io/curiousketcher/
- **Repo:** https://github.com/kelifries/curiousketcher

## Add new artwork

Drop image files into `public/artwork/`. Filename controls sort order and title:

- Use a numeric prefix to control order: `01-portrait.jpg`, `02-still-life.png`
- The filename (minus prefix + extension, separators replaced with spaces) becomes the title — e.g. `02-still-life.png` → "Still Life"
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- Recommended: long edge ~1600–2000px, optimized JPG/WebP. Anything larger will still work, just slower to load.

No code changes needed — the gallery auto-detects everything in the folder at build time.

## Deploy updates

```sh
npm run deploy
```

This builds the site and pushes to the `gh-pages` branch on `kelifries/curiousketcher`. GitHub Pages serves it at https://kelifries.github.io/curiousketcher/.

First time? You'll need to:

1. Create the repo: `gh repo create kelifries/curiousketcher --public --source=. --remote=origin --push`
2. Enable GitHub Pages in repo settings → Pages → Source: `gh-pages` branch
3. Run `npm run deploy`

## Set up the inquiry form (Formspree)

The inquiry form posts to Formspree. Until a form ID is set, submissions show a "form isn't hooked up yet — DM me on Instagram" fallback message.

To activate:

1. Sign up at [formspree.io](https://formspree.io) using `keliciaongsc@gmail.com`
2. Create a new form, copy its ID (looks like `xyzabcde`)
3. Open `src/components/Inquiry.jsx` and replace `YOUR_FORM_ID` with that ID
4. Run `npm run deploy`

Formspree free tier: 50 submissions/month, file uploads supported.

## Update copy

- Hero tagline: `src/components/Hero.jsx`
- Artist statement: `src/components/About.jsx`
- Commission tiers, add-ons, process, "What I don't do": `src/components/Commissions.jsx`
- Inquiry form fields and Formspree ID: `src/components/Inquiry.jsx`
- Colours / fonts: `src/styles/index.css` (`:root` block at top)

## Local development

```sh
npm install
npm run dev      # local server at http://localhost:5173/curiousketcher/
npm run build    # builds to dist/
npm run preview  # serve the production build locally
```

## Architecture

- `src/App.jsx` — top-level layout, lightbox state
- `src/lib/artwork.js` — auto-detects + sorts images from `public/artwork/` via Vite's `import.meta.glob`
- `src/components/` — Nav, Hero, About, Portfolio (gallery grid), Commissions (tiers + add-ons + process + don't-do), Inquiry (Formspree form), Footer, Lightbox
- `src/styles/index.css` — single stylesheet, plain CSS, design tokens at top
