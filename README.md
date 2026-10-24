# SymPhi.github.io

Homepage of the [SymPhi](https://github.com/SymPhi) organization, served at https://symphi.github.io.

Built with [Astro](https://astro.build) + Tailwind CSS. Every push to `main` deploys automatically via GitHub Actions.

## Develop

```bash
npm install
npm run dev     # http://localhost:4321
```

## Where to edit

| What | File |
| --- | --- |
| Site name, GitHub link, nav | `src/config.ts` |
| Home page | `src/pages/index.astro` |
| About page | `src/pages/about.astro` |
| Publications | `src/data/publications.ts` |
| Blog posts | `src/content/blog/*.md` |
| Colors and fonts | `src/styles/global.css` |
| Logo files used by the site | `src/assets/logo/` |
