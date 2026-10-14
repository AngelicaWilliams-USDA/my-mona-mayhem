<!-- l10n-sync: source-file="03-agent-mode.md" -->
# Parte 3: Construir el juego con flujos de trabajo basados en agentes

---

En esta parte, Copilot pasa de planificar a implementar. En lugar de escribir código línea por línea, describes lo que quieres y dejas que Copilot realice el trabajo en los archivos que necesite modificar.

## Tarea 1: Conecta la batalla

<!-- track:vscode:start -->
1. Cambia a modo **Agent** en Copilot Chat.
2. Introduce este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Devuelve Copilot CLI al flujo habitual de programación (o mantén el modo autopilot si quieres que Copilot siga trabajando hasta que lo detengas).
2. Menciona el archivo de la página para aportar contexto adicional si resulta útil: `@src/pages/index.astro`
3. Introduce este prompt:
<!-- track:cli:end -->

   > Añade JavaScript del lado del cliente a la página de batalla que:
   > 1. Obtenga ambos nombres de usuario de los campos al hacer clic en el botón Battle
   > 2. Valide que ambos estén rellenados (y muestre un error si no lo están)
   > 3. Obtenga en paralelo los datos de contribuciones de ambos usuarios desde nuestra API
   > 4. Represente los gráficos de contribuciones como cuadrículas de colores: cada día es un cuadrado con un color de la paleta de GitHub
   > 5. Muestre una insignia VS entre los dos usuarios
   > 6. Muestre el nombre de usuario, el total de contribuciones y el intervalo de fechas de cada usuario
   > 7. Gestione los estados de carga y los errores
   > 8. Se active también al pulsar Enter en los campos de entrada.
   > 9. Use por ahora la interfaz sencilla cuya estructura ya está creada.
   >
   > Usa interfaces de TypeScript para la estructura de los datos de contribuciones.

<!-- track:vscode:start -->
3. Deja que Agent Mode realice la implementación en `index.astro`.
4. Revisa los cambios propuestos en la vista de diferencias antes de aceptarlos.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Deja que Copilot CLI realice la implementación en `src/pages/index.astro`.
5. Usa `/diff` para inspeccionar los cambios generados y después apruébalos.
<!-- track:cli:end -->

## Tarea 2: Prueba la batalla

> **⚠️ ¿No ves los cambios?** Si la página de batalla no se ha actualizado, detén el servidor de desarrollo (`Ctrl+C`) y reinícialo con `npm run dev`; después, actualiza el navegador.

1. Introduce `octocat` y `torvalds` como los dos nombres de usuario y después haz clic en **Battle**.
2. Deberías ver ambos gráficos de contribuciones uno junto al otro con cuadrículas de colores.
3. Prueba los casos de error:
   - Deja uno o ambos campos vacíos y haz clic en Battle — deberías ver un error de validación.
   - Introduce un nombre de usuario inválido — la aplicación debería mostrar un error de la API.
4. Prueba a pulsar **Enter** en cualquiera de los campos de entrada — debería activar la batalla igual que al hacer clic en el botón.

## Tarea 3: Itera con Copilot

Si algo no está del todo bien, comunica tus observaciones directamente a Copilot. Por ejemplo:

- *"Los cuadrados de contribuciones son demasiado grandes; hazlos de 12x12px"*
- *"Añade una descripción emergente al pasar el cursor que muestre la fecha y el número de contribuciones"*
- *"El estado de carga necesita una animación de pulsación"*

<!-- track:vscode:start -->
Agent Mode gestiona cambios en múltiples archivos e iteraciones de forma natural. Cada prompt de seguimiento se basa en la conversación anterior, por lo que puedes refinar la implementación de forma incremental sin empezar de cero.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Las sesiones de Copilot CLI conservan su historial, por lo que cada prompt de seguimiento se basa en el anterior. Usa `/session` o `/context` si quieres inspeccionar el contexto que conserva Copilot, y `/review` después de una iteración importante si quieres una revisión adicional de errores o detalles que pulir.
<!-- track:cli:end -->

## Consejos para esta parte

- **Sé específico sobre lo que quieres** — requisitos claros producen mejores resultados.
- **Divide tareas grandes en prompts más pequeños** si Copilot se desvía.
- **Revisa los cambios antes de aceptarlos** — es más rápido inspeccionar el código generado que reescribirlo después.
- **Prueba la aplicación inmediatamente después de cada fase de implementación** para que los problemas queden acotados.

## ✅ Parte 3 completada

Has aprendido a:

- Usar Copilot para **trabajos de implementación en múltiples archivos**
- **Iterar sobre los resultados** con prompts de seguimiento centrados en aspectos concretos
- Gestionar el **ciclo completo de una funcionalidad** — implementación, revisión, pruebas y refinamiento
