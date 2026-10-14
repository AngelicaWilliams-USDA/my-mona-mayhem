# Project Instructions

## Overview

Mona Mayhem is an Astro app intended to become a GitHub contribution battle arena. The application lives in `src/`: `src/pages/index.astro` is the homepage and `src/pages/api/contributions/[username].ts` is the contributions API route. The API route is currently a placeholder and returns `501`.

The project uses Astro 6 with server output and the standalone `@astrojs/node` adapter. Preserve this deployment model unless a task explicitly changes the target platform.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` builds the production app into `dist/`.
- `npm run preview` serves the production build locally.
- `npm run astro -- <command>` runs an Astro CLI command.

There are currently no test or lint scripts defined in `package.json`.

## Astro Practices

- Use Astro's file-based routing under `src/pages/`; keep page and endpoint implementations close to their route.
- Prefer server-rendered Astro components. Keep server-only work in the component frontmatter or API routes; add client-side JavaScript only for interactions that need it.
- For API routes, validate route parameters and external data, return appropriate status codes and content types, and handle upstream failures explicitly. Keep credentials and private data on the server.
- Keep TypeScript strict. Prefer typed Astro APIs such as `APIRoute` for endpoints, and do not weaken `tsconfig.json` to bypass errors.
- Keep routes dynamic when they require runtime server behavior; preserve `prerender = false` for server-backed API routes.
- Use the existing npm scripts and project dependencies. Avoid adding a framework or dependency for functionality Astro and the platform already provide.