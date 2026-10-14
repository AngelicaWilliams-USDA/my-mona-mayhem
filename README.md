🌐 English | [Español](README.es.md) | [Português (Brasil)](README.pt_BR.md) | [한국어](README.ko.md)

# 🎮 Mona Mayhem

### Turn GitHub contribution graphs into an arcade showdown.

Build **Mona Mayhem**, a retro-inspired arena where two GitHub contribution histories face off. This hands-on, ~1-hour workshop takes you from starter template to a working app while you practice real GitHub Copilot workflows in **VS Code** or the **CLI**.

[▶ Start the workshop](workshop/00-overview.md) · [🎯 Choose your track](#choose-your-track)

![Mona Mayhem Screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)
*The retro arcade experience you'll build during the workshop*

## 🕹️ What you'll build

Create a contribution battle arena with Astro, then give it an arcade-style visual identity. Along the way, you'll practice:

- Shaping a project with context engineering and planning
- Building and iterating on a real app with Copilot
- Refining the design, quality, and resilience of your work

## 🎯 Choose your track

Pick the workflow that feels right; both tracks follow the same workshop:

- **VS Code** — Chat, Plan Mode, Agent Mode, background agents, and editor-native review loops.
- **GitHub Copilot CLI** — `copilot`, `@file` context, `/plan`, autonomous edits, `/fleet`, `/delegate`, and `/review`.

## 🚀 Get started

1. Create your own repository with **Use this template** or by forking this one.
2. Clone your new repository and open it in VS Code, or install Copilot CLI and work from your terminal.
3. [Open the workshop overview](workshop/00-overview.md) and choose your track.

## 📚 Workshop map

| Part | Title | Copilot Focus |
|------|-------|---------------|
| [00](workshop/00-overview.md) | Overview | Track selection and learning goals |
| [01](workshop/01-setup.md) | Setup & Context Engineering | Instructions, permissions, and environment setup |
| [02](workshop/02-plan-and-scaffold.md) | Plan & Scaffold | Planning the API and page architecture |
| [03](workshop/03-agent-mode.md) | Build the Game | Agentic implementation and iteration |
| [04](workshop/04-design-vibes.md) | Design-First Theming | Visual design planning and implementation |
| [05](workshop/05-polish.md) | Polish & Parallel Work | Parallelism, reviews, and quality passes |
| [06](workshop/06-bonus.md) | Bonus & Extensions | Open-ended feature ideas and extra Copilot experiments |

## Prerequisites

### Shared

- GitHub Copilot (Pro, Business, or Enterprise)
- Git
- Node.js

### VS Code track

- VS Code v1.107+
- GitHub Copilot extension signed in

### CLI track

- GitHub Copilot CLI (`copilot`)
- Node.js 22+ if you plan to install the CLI via `npm install -g @github/copilot`
- Or Homebrew / WinGet if you prefer a native package manager install

## Technology Stack

- **Framework**: [Astro](https://astro.build/) v6
- **Runtime**: Node.js with [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) adapter
- **Font**: Press Start 2P (retro gaming font)
- **API**: GitHub's contribution graph API

## Deployment Notes

### Current GitHub Pages setup

The workflow in `.github/workflows/deploy.yml` currently deploys static workshop/docs content from `docs/` and `workshop/` to GitHub Pages. It does not build or deploy the Astro app from `src/`.

### If you want to deploy the Astro app to GitHub Pages

GitHub Pages is static hosting, so the Astro app should use static output.

1. Change `output` in `astro.config.mjs` from `server` to `static`.
2. Remove the Node adapter (`@astrojs/node`) from `astro.config.mjs` and `package.json`.
3. Update the GitHub Actions workflow to run `npm ci` and `npm run build`, then upload `dist/` as the Pages artifact.
4. If deploying to a project page (`https://<user>.github.io/<repo>/`), set `site` and `base` in `astro.config.mjs`.

If you plan to keep API routes running in production, use a server platform instead of GitHub Pages (for example, Vercel, Netlify, or a Node host).

## License

MIT
