# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```


## 🚀 Project Structure

This project uses Astro for component-driven development and Vite for fast builds and hot reload. The goal is to create HTML, SCSS, and JS that can be easily copy-pasted into other systems (e.g., Drupal themes) after build. There is no direct Drupal integration in this project.

```
/
├── public/                # Static assets (served as-is)
│   └── favicon.svg
├── src/
│   ├── assets/            # Images, SVGs, etc.
│   ├── components/        # Astro components
│   ├── layouts/           # Astro layouts
│   ├── pages/             # Astro pages (routes)
│   ├── scss/              # All SCSS, 7-1 pattern (base, components, layout, utils, vendors, etc.)
│   └── scripts/           # JS modules, entry points, and helpers
├── package.json
├── astro.config.mjs
├── tsconfig.json
└── README.md
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 SCSS Organization

- **7-1 Architecture Pattern**: All partials live in `src/scss/` (base, components, layout, utils, vendors, etc.).
- **Entry point**: `src/scss/main.scss` imports all partials in order.
- **BEM Naming**: All classes use [BEM](http://getbem.com/) conventions.
- **Variables, mixins, functions**: In `src/scss/utils/` (e.g., `_variables.scss`).
- **Global CSS**: Imported in your layout via:
  ```astro
  <link rel="stylesheet" href="/src/scss/main.scss" />
  ```
- **Source maps**: Enabled for easier debugging.
- **See** `.cursor/rules/design-system.mdc` **for advanced rules and conventions.**

## 🛠️ JavaScript Organization

- All JS lives in `src/scripts/`.
- Use ES modules (`import`/`export`).
- Entry points (e.g., `functions.js`) are referenced in layouts/pages:
  ```astro
  <script type="module" src="/src/scripts/functions.js" defer></script>
  ```
- Modular code: Place reusable logic in `src/scripts/modules/` and import as needed.
- Vite handles bundling, hot reload, and source maps.

## ⚡ Workflow

- **Install dependencies:**
  ```sh
  npm install
  ```
- **Start dev server:**
  ```sh
  npm run dev
  ```
  - Edits to `.astro`, `.scss`, or `.js` files are hot-reloaded.
- **Build for production:**
  ```sh
  npm run build
  ```
  - Outputs static HTML, CSS, and JS to `/dist`.

## 📦 Using the Output

- After building, copy the HTML, CSS, and JS from `/dist` into your target system (e.g., a Drupal theme).
- This project does **not** handle Drupal integration or deployment—just asset generation.

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## 📝 Contributing

- Follow the design system and code conventions.
- See `.cursor/rules/design-system.mdc` for advanced SCSS rules.
- PRs and suggestions welcome!