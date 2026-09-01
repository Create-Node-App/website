# ⚙️ Project Configuration

This document describes all configuration files in the repository root, their purpose, and examples.

> Stack: **Next.js 15 (App Router)** + TypeScript + Tailwind + shadcn/ui. Bootstrapped with [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app).

## Config Files Overview

| File | Purpose |
|------|---------|
| `eslint.config.mjs` | Flat ESLint config (typescript-eslint, next, import) |
| `tsconfig.json` | TypeScript paths (`@/*` → `src/*`), strict mode |
| `next.config.mjs` | Next.js experimental webpack workers |
| `tailwind.config.ts` | Tailwind theme (CSS variables, shadcn) |
| `postcss.config.mjs` | PostCSS (tailwindcss + autoprefixer) |
| `components.json` | shadcn/ui generator (style, aliases, baseColor) |
| `vitest.config.mjs` | Vitest: happy-dom, `@` alias, coverage |
| `.prettierrc.js` | Prettier formatting (requires `prettier-plugin-tailwindcss` if used) |
| `commitlint.config.ts` | Conventional Commits linting |
| `.cspell.json` | Spell check dictionary |
| `.jscpd.json` | Copy-paste detection threshold |
| `.lintstagedrc.json` | lint-staged: eslint --fix + prettier on staged |
| `.markdownlint.json` | Markdown lint rules |
| `.mega-linter.yml` | MegaLinter (all linters) on push/PR to main |
| `.checkov.yml` | Checkov IaC scan skip rules |
| `.editorconfig` | Editor whitespace (2 spaces, LF) |
| `.node-version` | Pinned Node version (>=24.17.0, see `package.json#engines`) |
| `.husky/` | Git hooks (pre-commit: lint-staged, commit-msg: commitlint) |

## Detailed

### ESLint — `eslint.config.mjs`

Flat config with `typescript-eslint` recommended, `eslint-plugin-import`, and `@next/eslint-plugin-next` (recommended + core-web-vitals). Ignores `.next/`, `node_modules/`, `dist/`.

```js
// eslint.config.mjs (excerpt)
import typescriptEslint from 'typescript-eslint';
export default typescriptEslint.config(
  { ignores: ['.git/', '.next/', 'node_modules/'] },
  typescriptEslint.configs.recommended,
  // ... next + import
);
```

Run: `pnpm lint` / `pnpm lint:fix`

### Prettier — `.prettierrc.js`

```js
module.exports = { semi: true, singleQuote: true, trailingComma: 'all' };
```

Run: `pnpm format` (writes), `pnpm format:check` equivalent via `prettier --check`.

### TypeScript — `tsconfig.json`

Absolute imports:

```json
{ "compilerOptions": { "baseUrl": ".", "paths": { "@/*": ["./src/*"] } } }
```

Example: `import { cn } from '@/lib/utils'` anywhere in `src/`. Strict, `noEmit`, `jsx: preserve` (Next).

Run: `pnpm type-check` (`tsc --noEmit`)

### Next.js — `next.config.mjs`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { webpackBuildWorker: true, parallelServerBuildTraces: true, parallelServerCompiles: true },
};
export default nextConfig;
```

### Tailwind — `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  // theme.extend: colors via hsl(var(--border)) etc., from src/app/globals.css
};
```

Theme via CSS variables (`--background`, `--primary`, etc.) and `shadcn` design tokens. See `src/app/globals.css`.

### shadcn/ui — `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default", "rsc": true, "tsx": true,
  "tailwind": { "config": "tailwind.config.ts", "css": "src/app/globals.css", "baseColor": "neutral", "cssVariables": true },
  "aliases": { "components": "@/components", "utils": "@/lib/utils", "ui": "@/components/ui" },
  "iconLibrary": "lucide"
}
```

Generate: `pnpm dlx shadcn@latest add button`

### Vitest — `vitest.config.mjs`

```js
import { defineConfig } from 'vitest/config';
export default defineConfig({
  plugins: [react()],
  test: { environment: 'happy-dom', include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'] },
  resolve: { alias: { '@': '/src' } },
});
```

Run: `pnpm test` / `pnpm test:coverage`

### Commitlint — `commitlint.config.ts`

```ts
import { RuleConfigSeverity } from '@commitlint/types';
export default { extends: ['@commitlint/config-conventional'] };
```

Enforces Conventional Commits via Husky `commit-msg` hook.

### CSpell — `.cspell.json`

```json
{ "version": "0.2", "language": "en", "words": ["AGENTS", "alstr", "cspell"] }
```

Run: `pnpm cspell` (if added) or MegaLinter.

### JSCPD — `.jscpd.json`

```json
{ "threshold": 2, "reporters": ["console"] }
```

Flags copy-paste >2% (MegaLinter).

### lint-staged — `.lintstagedrc.json`

```json
{ "*.{js,jsx,ts,tsx,astro}": ["eslint --fix --max-warnings=0", "prettier --write"] }
```

Triggered by Husky `pre-commit`.

### markdownlint — `.markdownlint.json`

```json
{ "MD013": false, "MD033": false }
```

### MegaLinter — `.mega-linter.yml`

Runs on `push`/`pull_request` to `main` (see `.github/workflows/mega-linter.yml`). Applies fixes on PR.

### Husky — `.husky/`

- `pre-commit`: `lint-staged`
- `commit-msg`: `commitlint`
- `pre-push`: `pnpm type-check` (optional)

Install: `pnpm prepare` (auto via `prepare` script).

### EditorConfig — `.editorconfig`

```
root = true
[*] { charset = utf-8, end_of_line = lf, indent_style = space, indent_size = 2 }
```

### Node Version — `.node-version` + `package.json#engines`

```
24.17.0
```

```json
{ "engines": { "node": ">=24.17.0", "pnpm": ">=10.0.0" }, "packageManager": "pnpm@10.32.0" }
```

Use `fnm use` or `nvm use`.

## Environment Variables

| Var | Required | Example | Description |
|-----|----------|---------|-------------|
| `NEXT_PUBLIC_VERCEL_URL` | No | `https://website.vercel.app` | Vercel deployment URL (auto) |
| `NEXT_PUBLIC_GITHUB_TOKEN` | No | `ghp_...` | For `scripts/refresh-github-data.mjs` if rate-limited |
| None other required | — | — | App fetches `templates.json` from `raw.githubusercontent.com/Create-Node-App/cna-templates/main/templates.json` with `revalidate: 3600` (no env). Fallback: `src/lib/mock-data.ts`. |

Create `.env.local` from `.env.example` (currently empty — no runtime env needed).

## shadcn Theme Config

Theme is CSS-variable driven. Configured in `tailwind.config.ts` + `src/app/globals.css`:

```css
:root { --background: 0 0% 100%; --primary: 24 94% 53%; /* amber */ }
.dark { --background: 222 47% 11%; }
```

`components.json` → `baseColor: neutral`, `cssVariables: true`. Customize via `pnpm dlx shadcn@latest init` or edit `globals.css`.

## Deployment Options

- **Vercel (primary)**: Zero-config. `vercel` auto-detects Next.js. `Vercel` GitHub App deploys PR previews (see PR checks `Vercel`). Prod: `main` branch.
- **Self-host**: `pnpm build && pnpm start` (Next standalone). Requires Node >=24.17.0.
- **Docker**: Not configured in repo (can add `Dockerfile` with `node:24-alpine`, `pnpm install --frozen-lockfile`, `pnpm build`).
- **Static export**: Not used (uses ISR `revalidate: 1h` for `/templates/[slug]`, `/extensions/[slug]`).

## Absolute Imports

Already configured in `tsconfig.json` and `vitest.config.mjs`:

```ts
import { TemplateCard } from '@/components/template-card';
```

No extra `jsconfig.json` needed (TypeScript project). See [Paths Configuration](../tsconfig.json).

## Verification

```bash
pnpm lint        # 0 warnings
pnpm type-check  # no emit
pnpm test        # 33 tests
pnpm build       # Next build (pre-existing resizable v4 fix required — see PR #67)
```
