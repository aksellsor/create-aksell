# create-aksell

Scaffold a new Aksell tool.

## Usage

```bash
npx create-aksell
```

Prompts for project name and template (html or astro), then scaffolds into a new folder.


## Utilizes @aksell/ui NPM package:
https://www.npmjs.com/package/@aksell/ui

**Aksell UI demo:**<br/>
[aksell-ui.aksell.workers.dev](https://aksell-ui.aksell.workers.dev/)

## Templates

- **html** — zero-build, loads `@aksell/ui` styles via CDN. Open `index.html` directly.
- **astro** — Astro site pre-wired with `@aksell/ui`. Run `npm install && npm run dev`.

Both templates include an `npm run check` command for lightweight Aksell guardrails.
# create-aksell
