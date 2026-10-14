<!-- l10n-sync: source-file="workshop/00-overview.md" -->
# 🎮 Mona Mayhem — Taller de GitHub Copilot

---

> **Duración:** ~1 hora  
> **Nivel:** Intermedio  
> **Stack:** Astro / Node.js / TypeScript

Construye una aplicación de estilo arcade retro para comparar contribuciones de GitHub — **Mona Mayhem** — mientras aprendes toda la variedad de flujos de trabajo de GitHub Copilot. El taller ofrece **dos itinerarios**: una experiencia en VS Code y otra con GitHub Copilot CLI.

---

## 🎯 Elige tu itinerario

- **Itinerario de VS Code** — trabaja en el editor y practica Chat, Plan Mode, Agent Mode, agentes en segundo plano y el ciclo de revisión integrado.
- **Itinerario de CLI** — trabaja en la terminal y practica `copilot`, contexto con `@file`, `/plan`, ediciones autónomas, `/fleet`, `/delegate` y `/review`.

Sigue el itinerario que mejor se adapte a tu flujo de trabajo preferido.

---

## 📋 Lista de verificación rápida

Antes de empezar, verifica:

- [ ] GitHub Copilot está habilitado para tu cuenta
- [ ] Node.js instalado
- [ ] Git instalado y configurado
- [ ] Tu navegador y terminal están listos

<!-- track:vscode:start -->
- [ ] VS Code **v1.107+** (sin actualizaciones pendientes)
- [ ] Sesión iniciada en la extensión de **GitHub Copilot**
- [ ] Panel de Chat abierto y Agent listo
<!-- track:vscode:end -->

<!-- track:cli:start -->
- [ ] GitHub Copilot CLI instalado y disponible como `copilot`
- [ ] Autenticado en el CLI con `/login`
- [ ] Familiaridad con comandos de barra como `/help`, `/plan` y `/review`
<!-- track:cli:end -->

> 💡 **Consejo:** Usa el DevContainer para un entorno preconfigurado si deseas un inicio rápido en VS Code.

---

## 🧠 Lo que aprenderás

| # | Habilidad | Descripción |
|---|-----------|-------------|
| 1 | **Ingeniería de contexto** | Enseña a Copilot cómo es el código del proyecto con instrucciones, referencias y restricciones claras |
| 2 | **Planificar primero** | Diseña la arquitectura antes de la implementación |
| 3 | **Implementación con agentes** | Deja que Copilot realice tareas de programación de varios pasos con tu supervisión |
| 4 | **Diseño iterativo** | Usa Copilot para transformar el aspecto visual y refinar los detalles de interacción |
| 5 | **Flujos de trabajo paralelos** | Divide el trabajo entre agentes, sesiones o tareas delegadas |

<!-- track:vscode:start -->
### Funciones destacadas de VS Code

- **Chat + modo Ask** para exploración
- **Plan Mode** para prompts de arquitectura y diseño
- **Agent Mode** para implementación en múltiples archivos
- **Agentes en segundo plano y en la nube** para pulido en paralelo
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Funciones destacadas de Copilot CLI

- **Sesiones interactivas del CLI** con `copilot`
- **`/plan` y Shift+Tab** para planificación estructurada
- **Ediciones autónomas** con aprobaciones en línea y `/diff`
- **`/fleet`, `/delegate` y `/review`** para paralelismo y controles de calidad
<!-- track:cli:end -->

---

## 📚 Partes del laboratorio

| Parte | Título | Descripción |
|-------|--------|-------------|
| [**01**](01-setup.md) | Configuración e ingeniería de contexto | Crea tu repositorio, prepara tu entorno y dale a Copilot el contexto adecuado |
| [**02**](02-plan-and-scaffold.md) | Planificación y estructura inicial | Diseña la API y la arquitectura de páginas antes de implementar |
| [**03**](03-agent-mode.md) | Construir el juego | Conecta la página de batalla y los gráficos de contribuciones con ayuda de agentes |
| [**04**](04-design-vibes.md) | Tematización orientada al diseño | Transforma la estructura base en una experiencia arcade retro |
| [**05**](05-polish.md) | Pulido y trabajo paralelo | Usa flujos de trabajo con varios agentes para mejorar la UX, la resiliencia y la calidad |
| [**06**](06-bonus.md) | Extras y ampliaciones | Explora funcionalidades abiertas, flujos de trabajo para compartir y experimentos adicionales |

---

## 💡 Consejos prácticos

1. **Mantén el navegador abierto** — observa las actualizaciones en vivo mientras programas.
2. **Haz commits frecuentes** — guarda puntos de control limpios mientras iteras.
3. **Refina el plan antes de implementar** — mejores planes llevan a mejores resultados.
4. **Revisa los cambios de Copilot** — usa la vista de diferencias o las herramientas de revisión del CLI en lugar de aceptar a ciegas.

<!-- track:vscode:start -->
5. **Usa puntos de control y Deshacer** en el chat si una iteración se desvía.
<!-- track:vscode:end -->

<!-- track:cli:start -->
5. **Usa `/session`, `/context` y `/share file`** cuando quieras inspeccionar o preservar tu trabajo.
<!-- track:cli:end -->
