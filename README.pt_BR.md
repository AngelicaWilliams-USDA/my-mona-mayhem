<!-- l10n-sync: source-file="README.md" -->
🌐 [English](README.md) | [Español](README.es.md) | Português (Brasil) | [한국어](README.ko.md)

# 🎮 Mona Mayhem

**Workshop de VS Code e GitHub Copilot CLI** — Construa uma Arena de Batalha de Contribuições GitHub

Um template de workshop para construir um site com tema de arcade retrô usando Astro que compara os gráficos de contribuições do GitHub de dois usuários. Este é o **ponto de partida** — você construirá o aplicativo passo a passo usando o GitHub Copilot.

![Captura de tela do Mona Mayhem](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)
*O que você construirá até o final do workshop*

## 📚 Workshop

O workshop oferece duas trilhas — siga a que corresponde ao seu fluxo de trabalho preferido:

- **Trilha VS Code** — Chat, Plan Mode, Agent Mode, agentes em segundo plano e ciclos de revisão no editor
- **Trilha CLI** — `copilot`, contexto com `@file`, `/plan`, edições autônomas, `/fleet`, `/delegate` e `/review`

| Parte | Título | Foco do Copilot |
|-------|--------|-------------------|
| [00](workshop/pt_BR/00-overview.md) | Visão Geral | Seleção de trilha e objetivos de aprendizagem |
| [01](workshop/pt_BR/01-setup.md) | Configuração e Engenharia de Contexto | Instruções, permissões e configuração do ambiente |
| [02](workshop/pt_BR/02-plan-and-scaffold.md) | Planejar e Estruturar | Planejamento da API e da arquitetura de páginas |
| [03](workshop/pt_BR/03-agent-mode.md) | Construir o Jogo | Implementação agêntica e iteração |
| [04](workshop/pt_BR/04-design-vibes.md) | Tema Orientado a Design | Planejamento e implementação do design visual |
| [05](workshop/pt_BR/05-polish.md) | Polimento e Trabalho Paralelo | Paralelismo, revisões e etapas de melhoria da qualidade |
| [06](workshop/pt_BR/06-bonus.md) | Bônus e Extensões | Ideias de funcionalidades em aberto e experimentos extras com o Copilot |

## 🚀 Início Rápido

1. **Crie seu próprio repositório primeiro** por uma destas opções:
   - clique em **Use this template** para criar um novo repositório, ou
   - faça um fork deste repositório.
2. Escolha sua trilha do workshop:
   - **VS Code:** clone seu repositório e abra-o no VS Code.
   - **GitHub Copilot CLI:** clone seu repositório localmente, instale `copilot` e trabalhe no terminal.
3. Siga o [guia do workshop](workshop/pt_BR/00-overview.md)

## Pré-requisitos

### Compartilhados

- GitHub Copilot (Pro, Business ou Enterprise)
- Git
- Node.js

### Trilha VS Code

- VS Code v1.107+
- Extensão do GitHub Copilot com sessão iniciada

### Trilha CLI

- GitHub Copilot CLI (`copilot`)
- Node.js 22+ se você pretende instalar o CLI via `npm install -g @github/copilot`
- Ou Homebrew / WinGet se preferir instalar com um gerenciador de pacotes nativo

## Stack Tecnológica

- **Framework**: [Astro](https://astro.build/) v6
- **Runtime**: Node.js com adaptador [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Fonte**: Press Start 2P (fonte de jogos retrô)
- **API**: API de gráfico de contribuições do GitHub

## Notas sobre Implantação

### Configuração Atual do GitHub Pages

O workflow em `.github/workflows/deploy.yml` atualmente implanta o conteúdo estático do workshop e da documentação de `docs/` e `workshop/` no GitHub Pages. Ele não compila nem implanta o aplicativo Astro de `src/`.

### Para Implantar o Aplicativo Astro no GitHub Pages

O GitHub Pages é uma hospedagem estática, portanto o aplicativo Astro deve usar saída estática.

1. Altere `output` em `astro.config.mjs` de `server` para `static`.
2. Remova o adaptador Node (`@astrojs/node`) de `astro.config.mjs` e `package.json`.
3. Atualize o workflow do GitHub Actions para executar `npm ci` e `npm run build` e, em seguida, enviar `dist/` como artefato do Pages.
4. Se a implantação for em uma página de projeto (`https://<user>.github.io/<repo>/`), defina `site` e `base` em `astro.config.mjs`.

Se você pretende manter rotas de API em execução em produção, use uma plataforma com servidor em vez do GitHub Pages (por exemplo, Vercel, Netlify ou uma hospedagem Node).

## Licença

MIT
