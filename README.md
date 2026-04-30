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

## Inquiry form (Formspree)

The unified inquiry form posts to Formspree (form ID `mqenzver`). It handles three inquiry types via a "What are you here for?" dropdown:

- **Order a print** → which piece, format (digital / physical / bundle), size, shipping address
- **Commission new work** → tier, subject, deadline, budget
- **Not sure / something else** → free-text field

A hidden `_subject` field formats the email subject line per inquiry type:
- `[Print order] from {name}`
- `[Commission] from {name}`
- `[General] from {name}`

This keeps Kelicia's Formspree dashboard organized — she can filter by inquiry type at a glance.

Free tier: 50 submissions/month. File uploads aren't supported on free tier (subject placeholder invites users to send reference photos via IG DM after submission).

## Update copy

- Hero tagline: `src/components/Hero.jsx`
- Artist statement: `src/components/About.jsx`
- **Print pricing, FAQ, what's-included:** `src/components/Prints.jsx`
- Commission tiers, add-ons, process, "What I don't do": `src/components/Commissions.jsx`
- Inquiry form copy + dropdown options + subject prefixes: `src/components/Inquiry.jsx`
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
- `src/components/` — Nav, Hero, About, Portfolio (gallery grid), **Prints** (digital + physical pricing, what's-included, FAQ), Commissions (tiers + add-ons + process + don't-do), Inquiry (unified Formspree form with conditional fields), Footer, Lightbox
- `src/styles/index.css` — single stylesheet, plain CSS, design tokens at top

## Page section order

Hero → About → Portfolio gallery → **Prints** → Commissions → Inquiry → Footer
