<!-- l10n-sync: source-file="workshop/01-setup.md" -->
# Parte 1: Configuración e ingeniería de contexto

---

En esta parte configurarás el entorno de desarrollo **y** enseñarás a Copilot cómo es el código del proyecto, para que cada prompt posterior empiece con el contexto adecuado.

## Sección 1: Configuración inicial

### Paso 1: Crea tu repositorio

1. Abre [github.com/copilot-dev-days/mona-mayhem](https://github.com/copilot-dev-days/mona-mayhem)
2. Crea tu propio repositorio mediante una de estas opciones:
   - haciendo clic en **Use this template** → **Create a new repository**, o
   - haciendo un fork del repositorio.
3. Nómbralo `my-mona-mayhem` y establece la visibilidad como **Public** (si lo creaste desde la plantilla)

<!-- track:vscode:start -->
### Paso 2: Elige tu entorno de desarrollo

#### Opción A: VS Code local

1. Abre VS Code y ejecuta **Git: Clone** → **Clone from GitHub**
2. Selecciona tu repositorio `my-mona-mayhem`
3. Cuando se te solicite, instala las **extensiones recomendadas**

#### Opción B: GitHub Codespaces

1. Abre tu repositorio en GitHub
2. Haz clic en **Code** → **Codespaces** → **Create codespace on main**
3. Espera a que el entorno inicie y las dependencias se instalen

### Paso 3: Instala las dependencias e inicia la aplicación

1. Abre la terminal integrada en tu repositorio.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm run dev
   ```

> ✅ **¡La aplicación está ejecutándose en tu navegador!**
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Paso 2: Instala GitHub Copilot CLI

Usa el método de instalación que corresponda a tu equipo:

- **npm (multiplataforma, requiere Node.js 22+)**

  ```bash
  npm install -g @github/copilot
  ```

- **Homebrew (macOS/Linux)**

  ```bash
  brew install copilot-cli
  ```

- **WinGet (Windows)**

  ```bash
  winget install GitHub.Copilot
  ```

### Paso 3: Inicia la aplicación y autentícate en la CLI

1. Clona tu repositorio localmente y abre una terminal en la raíz del proyecto.
2. Instala las dependencias e inicia la aplicación:

   ```bash
   npm install
   npm run dev
   ```

3. Abre una **segunda terminal** en el mismo repositorio e inicia Copilot CLI:

   ```bash
   copilot
   ```

4. En la sesión interactiva, introduce:

   ```
   /login
   ```

5. Sigue las indicaciones del flujo de autenticación del dispositivo, luego confirma que confías en el repositorio cuando el CLI solicite aprobación.

> ✅ **Ahora tienes la vista previa de la aplicación en una terminal y Copilot CLI listo en otra.**
<!-- track:cli:end -->

## Sección 2: Ingeniería de contexto

La ingeniería de contexto consiste en enseñar a la IA cómo es el código del proyecto. Cuanto mejor sea el contexto, mejor será cada respuesta futura.

<!-- track:vscode:start -->
### Tarea 1: Genera instrucciones del espacio de trabajo con /init

Usemos el comando integrado `/init` para generar un archivo de instrucciones del espacio de trabajo para Copilot:

1. Abre **Copilot Chat** y escribe:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Revisa el archivo generado — Copilot analizará tu proyecto y creará un `.github/copilot-instructions.md`.
3. Acepta los cambios, luego **haz commit** del archivo de instrucciones.

> **Resultado:** Todas las solicitudes posteriores a Copilot incorporan ahora un mapa del espacio de trabajo.

### Tarea 2: Agentes en segundo plano

**Agente en segundo plano local:**

1. En el panel de Chat, haz clic en **+** para abrir un chat nuevo
2. En la parte inferior de la ventana, cambia **Local** a **Copilot CLI**
3. Introduce el prompt:

   > "Añade reglas de linting para las variables no utilizadas y mejora el estilo del código; corrige los errores"

4. Cuando termine, **revisa y aplica** los cambios y, si quieres, archiva la sesión.

**Agente en la nube:**

1. En el panel de Chat, haz clic en **+** para abrir un chat nuevo
2. En la parte inferior de la ventana, cambia **Local** a **Cloud**

   > "Haz que el README resulte más atractivo como página de inicio"

> **Resultado:** Reglas de linting agregadas, errores corregidos, README mejorado — todo sin salir de tu editor.

### Tarea 3: Explora el proyecto

Abre **Copilot Chat** en **modo Ask** y prueba estos prompts:

- `"Explain the architecture of this project"`
- `"What files are in the src directory and what do they do?"`
- `"What would I need to build to make the Battle button work?"`

> 💡 Usa **@workspace** para darle a Copilot contexto de todo el proyecto para respuestas más precisas.
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Tarea 1: Genera instrucciones del repositorio con /init

Usemos `/init` para generar un archivo de instrucciones del espacio de trabajo para Copilot:

1. En Copilot CLI, escribe:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Revisa el archivo generado — Copilot analizará tu proyecto y creará un `.github/copilot-instructions.md`.
3. Haz commit del archivo de instrucciones.

> **Resultado:** Las sesiones futuras del CLI heredan automáticamente las instrucciones específicas del repositorio desde `.github/copilot-instructions.md`.

### Tarea 2: Configura el entorno de la CLI

Practica los controles del CLI que facilitarán los pasos posteriores:

1. Ejecuta `/help` para revisar los comandos de barra disponibles.
2. Usa `/model` para inspeccionar los modelos disponibles para ti.
3. Si Copilot ha aprendido demasiadas aprobaciones durante la experimentación, reinícialas con:

   ```
   /reset-allowed-tools
   ```

4. Si el repositorio está dentro de un directorio superior más amplio, usa `/add-dir PATH` para ampliar explícitamente el espacio de trabajo permitido.

> 💡 La documentación del CLI recomienda instrucciones personalizadas concisas más permisos de herramientas explícitos para que Copilot se mantenga rápido y predecible.

### Tarea 3: Explora el proyecto desde la terminal

Prueba estos prompts dentro de Copilot CLI:

- `Give me an overview of this project.`
- `@src/pages/api/contributions/[username].ts What is this file for and what needs to be built here?`
- `@src/pages/index.astro What exists here and what would I need to add to build the battle page?`

Si quieres una respuesta rápida en una sola ejecución fuera de la sesión interactiva, prueba:

```bash
copilot -p "Summarize the architecture of this repo in 5 bullet points"
```

> **Resultado:** Ahora tienes instrucciones, conoces los comandos y sabes cómo aportar archivos al contexto de Copilot CLI.
<!-- track:cli:end -->

## ✅ Parte 1 completada

Has aprendido cómo:

- **Configurar** el repositorio y el entorno de desarrollo local
- **Generar instrucciones** con `/init` para que Copilot entienda tu proyecto y la dirección de diseño
- **Establecer un hábito de revisión** antes de aplicar cambios generados
- **Explorar el código base** con prompts ricos en contexto
