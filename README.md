# Aidan Copeland — Portfolio

A static site with no build step. `index.html` is the whole site; it loads `content.js` (all text, projects and links) and `support.js` (the page runtime), plus the images in `media/` and the PDFs in `docs/`.

## Before you upload: add 3 files

These were too large or in a format that couldn't be exported, so add them from your originals, using these exact names:

| Put this file                                   | Here                                   |
| ----------------------------------------------- | -------------------------------------- |
| Authentic Intelligence pitch deck (PDF)         | `docs/authentic-intelligence-pitch.pdf` |
| Air Force 1 reverse tech pack (PDF)             | `docs/reverse-tech-pack.pdf`            |
| Your portrait photo (JPG)                       | `media/aidan-portrait.jpg` (replace the stand-in suit photo) |

## Deploy on Vercel

1. Create a new GitHub repo and upload everything in this folder (keep the folder structure).
2. On vercel.com: Add New → Project → import that repo. Framework preset: **Other**. No build command, no output directory.
3. Deploy. You get a link like `aidan-copeland.vercel.app` (you can rename the project to change it).
4. Optional: buy a domain (e.g. aidancopeland.com) and add it under the project's Settings → Domains.

Netlify, Cloudflare Pages and GitHub Pages work the same way: upload the folder as-is.

## Preview locally

The site must be served over http (opening the file directly won't load `content.js`):

```
npx serve .
```

## Editing later

All copy, projects, images and links live in `content.js`. Put new images in `media/` and PDFs in `docs/`, then point to them from `content.js`. Pages are hash routes: `#/work`, `#/work/<slug>`, `#/journey`, `#/about`.

The tab icon is `favicon.ico` / `favicon-32.png` / `icon-192.png` / `apple-touch-icon.png`.
