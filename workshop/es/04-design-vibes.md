<!-- l10n-sync: source-file="04-design-vibes.md" -->
# Parte 4: Tematización orientada al diseño

---

En esta parte, usarás los ciclos de planificación e implementación de Copilot para diseñar una transformación completa del tema. Esto es desarrollo orientado al diseño: empieza con la visión, itera sobre los elementos visuales y deja que Copilot se encargue del trabajo más laborioso de CSS.

## Tarea 1: Planifica el tema retro

<!-- track:vscode:start -->
Cambia a modo **Plan** en GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa `/plan` en GitHub Copilot CLI, o pulsa **Shift+Tab** hasta activar el modo de planificación.
<!-- track:cli:end -->

Introduce este prompt:

> Quiero transformar esta página en una experiencia arcade retro completa. Planifica una renovación visual integral que incluya: efectos de líneas de barrido CRT en el fondo, un resplandor de neón en el título que palpite como un letrero de neón, una insignia VS animada con cambios de color en degradado, una capa de brillo sobre las tarjetas de resultados de los usuarios, animaciones de entrada flotante para los campos de entrada, texto de carga que cambie entre verde y morado y efectos de resplandor al pasar el cursor sobre los cuadrados de contribuciones. Mantén el fondo oscuro (`#0a0a1a`) con colores de acento verde (`#5fed83`) y morado (`#8a2be2`). Usa un tema oscuro con la fuente de videojuegos retro Press Start 2P de Google Fonts.

Copilot generará un plan detallado de implementación que abarque todos los efectos visuales. **No lo aceptes de inmediato** — revisa el plan e itera:

- Sugiere ajustes en la duración de las animaciones (por ejemplo, *"Haz que la pulsación de neón sea más lenta, de unos 3 segundos"*)
- Pregunta sobre efectos específicos (por ejemplo, *"¿Cómo funcionará la capa de brillo sobre las tarjetas?"*)
- Solicita cambios en el enfoque si algo no te convence

## Tarea 2: Implementa el tema

Cuando estés satisfecho con el plan, indica a Copilot que lo implemente.

> Implementa el plan del tema arcade retro que acabamos de diseñar.

Copilot añadirá múltiples animaciones CSS, pseudoelementos y transiciones en la hoja de estilos. Esto puede incluir:

- `@keyframes` para líneas de barrido, pulsaciones de neón, brillo y efectos de entrada flotante
- Pseudoelementos (`::before`, `::after`) para efectos de superposición
- Propiedades personalizadas de CSS para los colores del tema
- Transiciones y estados al pasar el cursor para los elementos interactivos

<!-- track:cli:start -->
Una vez aplicados los cambios, usa `/diff` para revisar los cambios de estilo antes de aprobarlos.
<!-- track:cli:end -->

## Tarea 3: Ajusta la estética

> **⚠️ ¿No ves los cambios?** Si no aparecen el tema nuevo o las animaciones, detén el servidor de desarrollo (`Ctrl+C`) y reinícialo con `npm run dev`; después, haz una recarga forzada (`Ctrl+Shift+R`) en el navegador.

Mantén la vista previa del navegador abierta e itera sobre el diseño. Prueba prompts como:

> El efecto de líneas de barrido es demasiado intenso; reduce la opacidad a 0.03

> Añade un sutil parpadeo eléctrico al texto del título

> La insignia VS debería palpitar de forma más llamativa

Esto es **desarrollo orientado al diseño**: iteras sobre el resultado visual en tiempo real. Cada prompt refina la experiencia hasta que te convenza. No te conformes con «suficientemente bueno»: perfecciona la estética hasta que la página parezca propia de una máquina recreativa.

## Tarea 4: Actualiza las instrucciones

Las instrucciones deben reflejar las decisiones de diseño importantes para que los prompts posteriores sigan esa dirección.

<!-- track:vscode:start -->
Pide a Copilot Chat:

> Añade una sección de guía de diseño a copilot-instructions.md que describa nuestro tema arcade retro: colores, fuentes y estilo de animación
<!-- track:vscode:end -->

<!-- track:cli:start -->
Pide a Copilot CLI:

> Actualiza las instrucciones del repositorio con una breve guía de diseño para el tema arcade retro: colores, fuentes, estilo de animación y la regla de que los nuevos elementos de la interfaz deben mantener la estética de neón.
<!-- track:cli:end -->

Haz commit de las instrucciones actualizadas y de los cambios de diseño cuando la página se vea bien.

## ✅ Parte 4 completada

**Lo que aprendiste:**

- Usar flujos de planificación para esbozar un **sistema de diseño antes de implementarlo**
- **Iterar sobre el resultado visual** con prompts rápidos de seguimiento
- **Actualizar las instrucciones después de decisiones importantes** para que Copilot mantenga la coherencia de la identidad visual
