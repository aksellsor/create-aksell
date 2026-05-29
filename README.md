# create-aksell

Scaffold a new Aksell tool.

## Vibe coding with AI

Paste this into Claude Code (or any AI editor) from an empty folder:

```
Scaffold a price calculator project using:
  npx create-aksell --name price-calculator --template html

Then build a simple price calculator page with:
- A product name input
- A quantity input
- A unit price input
- A calculated total that updates live
- A "Copy quote" button that shows a toast confirmation

Use only aksell-ui components and styles. No frameworks, no Tailwind.
```

Replace `price-calculator` and the feature list with your own idea. The `--name` and `--template` flags let AI scaffold without interactive prompts. The scaffolded project includes `CLAUDE.md` and `AGENTS.md` that teach the AI the design system automatically.

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
