# react-template

A small starter for React apps: [Vite](https://vite.dev/) for dev and builds, [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS v4](https://tailwindcss.com/) via the official Vite plugin, and [Biome](https://biomejs.dev/) for formatting and linting. React is compiled with [SWC](https://swc.rs/) through [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-swc).

## Requirements

- A recent [Node.js](https://nodejs.org/) LTS release (for example 20 or 22)

## Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `npm run dev`  | Start the dev server with hot module replacement |
| `npm run build`| Typecheck and produce a production build in `dist` |
| `npm run preview` | Serve the production build locally           |
| `npm run lint` | Run Biome check (lint + format diagnostics)    |
| `npm run format` | Apply Biome formatting                        |

## Project layout

- `index.html` — HTML shell; Vite loads `src/main.tsx`
- `src/main.tsx` — React root (`StrictMode` + `createRoot`)
- `src/App.tsx` — Main app component
- `src/index.css` — Global styles; imports Tailwind with `@import "tailwindcss"`
- `vite.config.ts` — Vite plugins: React (SWC) and Tailwind
- `biome.json` — Formatter, linter, and assist (e.g. organize imports)

## Customization

- Change the document title in `index.html`.
- Adjust Tailwind in `src/index.css` or add `@theme` / component classes as needed for v4.
- Tweak Biome rules in `biome.json` to match your team’s preferences.
