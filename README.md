# Brandon Aulac Portfolio

A multi-page React portfolio built with Vite and React Router.

## Included pages

- `/` — Home
- `/projects` — Filterable project gallery
- `/projects/ai-procurement` — Procurement case study
- `/projects/sleep-journal` — Sleep Journal case study
- `/projects/f1-analysis` — Formula 1 case study
- `/resume` — Online résumé
- `/contact` — Contact links

## Setup

```bash
npm install
npm run dev
```

## Required personal files

Add these files to `public`:

```text
public/
├── Resume_Brandon_Aulac.pdf
└── images/
    └── headshot.jpg
```

The included SVG files are visual placeholders. Replace them with real project screenshots whenever possible while keeping the same filenames, or update the paths in `src/data/siteData.js`.

## GitHub Pages

Because the site uses `BrowserRouter`, direct links such as `/projects/ai-procurement` need a fallback to `index.html`.

The included `404.html` redirects GitHub Pages routes back into the React app. Before deployment, update `vite.config.js` if the repository is hosted under a subpath:

```js
base: "/YOUR-REPOSITORY-NAME/",
```

For a custom domain or a user site such as `username.github.io`, keep:

```js
base: "/",
```

## Content updates

Most text, project information, skills, and links are stored in:

```text
src/data/siteData.js
```

Update that file instead of editing each page separately.
