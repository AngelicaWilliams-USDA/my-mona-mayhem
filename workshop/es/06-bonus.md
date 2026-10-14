<!-- l10n-sync: source-file="workshop/06-bonus.md" -->
# 🎉 Extras y ampliaciones

---

¡Has construido una aplicación de GitHub Battle completamente funcional! Ahora es momento de ir más allá con **desafíos abiertos**.

<!-- track:vscode:start -->
Usa **Agent Mode** para todos estos — describe lo que quieres y deja que Copilot te ayude a construirlo.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa Copilot CLI para todos estos — combina contexto con `@file`, `/plan`, modo normal y `/review` según sea necesario.
<!-- track:cli:end -->

---

## 🏆 Desafío 1: Banner del ganador

Después de que ambos gráficos de contribuciones carguen, compara los totales y muestra un anuncio dinámico del ganador.

**Qué construir:**
- Compara las contribuciones totales de ambos usuarios
- Muestra **"🏆 {username} WINS! 🏆"** con un estilo de celebración si hay un ganador claro
- Muestra **"🤝 IT'S A TIE! 🤝"** si las contribuciones son iguales
- Agrega animación o confeti para más efecto

**Sugerencia de prompt:**
> Cuando se carguen los datos de contribuciones de ambos usuarios, compara los totales y muestra un banner con el ganador. Muestra "🏆 {username} WINS! 🏆" si un usuario tiene más contribuciones, o "🤝 IT'S A TIE! 🤝" si los totales son iguales. Dale un aspecto llamativo con animaciones CSS.

---

## 🏆 Desafío 2: Contador de rachas

Calcula y muestra la racha de contribuciones consecutivas más larga de cada usuario.

**Qué construir:**
- Analiza los datos de contribuciones día por día
- Encuentra la serie más larga de días consecutivos con al menos una contribución
- Muestra de forma destacada la duración de la racha de cada usuario
- Resalta quién tiene la racha más larga

**Sugerencia de prompt:**
> Añade un contador de rachas que analice los datos de contribuciones de cada usuario para encontrar su racha de contribuciones consecutivas más larga. Muestra "🔥 Longest Streak: X days" para cada usuario debajo de su gráfico de contribuciones.

---

## 🏆 Desafío 3: Historial de batallas

Guarda los resultados de las batallas de forma persistente para que los usuarios puedan ver sus enfrentamientos anteriores.

**Qué construir:**
- Guarda cada resultado de batalla en `localStorage` (nombres de usuario, totales, ganador, marca de tiempo)
- Agrega una sección **"Recent Battles"** debajo del área principal de batalla
- Muestra las últimas 5–10 batallas con resultados
- Agrega un botón "Clear History"

**Sugerencia de prompt:**
> Guarda los resultados de las batallas en localStorage después de cada comparación. Añade una sección "Recent Battles" que muestre las últimas 10 batallas con los nombres de usuario, los totales de contribuciones, el ganador y cuándo tuvo lugar la batalla. Incluye un botón "Clear History".

---

## 🏆 Desafío 4: Efectos de sonido

Agrega efectos de sonido retro arcade usando la Web Audio API — sin necesidad de archivos externos.

**Qué construir:**
- Sonido de **insertar moneda** cuando se hace clic en el botón "Battle!"
- Sonido de **potenciador** cuando los resultados se cargan correctamente
- Sonido de **explosión** cuando ocurre un error (usuario no encontrado, fallo de API)
- Un botón de alternancia para silenciar/activar sonido

**Sugerencia de prompt:**
> Añade efectos de sonido arcade retro con la Web Audio API (sin archivos de audio). Reproduce un sonido de inserción de moneda al iniciar la batalla, un sonido de potenciador cuando se carguen los resultados y un sonido de explosión si se produce un error. Genera los sonidos mediante código con osciladores y nodos de ganancia. Incluye un control para silenciar el sonido.

---

## 🏆 Desafío 5: Secuencia de batalla animada

Crea suspense con una cuenta atrás dramática antes de revelar los resultados.

**Qué construir:**
- Cuando se haga clic en "Battle!", muestra una superposición a pantalla completa
- Anima: **"3..."** → **"2..."** → **"1..."** → **"⚡ FIGHT! ⚡"**
- Luego revela los gráficos de contribuciones con una entrada dramática
- Usa animaciones CSS o temporización con JavaScript

**Sugerencia de prompt:**
> Añade una secuencia de batalla animada cuando el usuario haga clic en "Battle!". Muestra una cuenta atrás superpuesta: "3...", después "2...", después "1..." y después "⚡ FIGHT! ⚡", con una duración aproximada de 1 segundo por paso. Tras la cuenta atrás, muestra los resultados con una animación de entrada deslizante.

---

## 🏆 Desafío 6: Leyenda de contribuciones

Agrega una leyenda de escala de colores que coincida con la paleta de colores del gráfico de contribuciones.

**Qué construir:**
- Una leyenda horizontal que muestre los niveles de intensidad de las contribuciones
- Etiquetas desde **"Less"** hasta **"More"**
- Usa la paleta de colores real de la respuesta de la API de contribuciones de GitHub
- Posiciónala cerca de los gráficos de contribuciones

**Sugerencia de prompt:**
> Añade una leyenda de contribuciones debajo de los gráficos que muestre la escala de colores de la paleta de la API. Muestra una fila de cuadrados de colores desde "Less" (el más claro) hasta "More" (el más oscuro), que coincidan con los colores reales de los niveles de contribución devueltos por la API.

---

## 🏆 Desafío 7: Compartir resultados

Permite que los usuarios compartan sus resultados de batalla con un solo clic.

**Qué construir:**
- Un botón **"📋 Share Results"** que aparece después de una batalla
- Copia un resumen de texto formateado al portapapeles
- Incluye nombres de usuario, totales de contribuciones y el ganador
- Muestra un breve mensaje de confirmación "Copied!"

**Sugerencia de prompt:**
> Añade un botón "📋 Share Results" que copie un resumen de la batalla con formato al portapapeles. El resumen debe incluir ambos nombres de usuario, sus totales de contribuciones y quién ganó. Usa la Clipboard API y muestra una breve confirmación "Copied to clipboard!".

---

<!-- track:cli:start -->
## 💻 Extras del CLI

Si quieres explorar más funcionalidades de Copilot CLI después del taller principal:

- Usa `copilot -p "Write a conventional commit message for the current git diff"` para generar en una sola ejecución una respuesta sin acciones adicionales que puedas pegar en Git.
- Ejecuta `/share file` para guardar tu sesión como Markdown para referencia futura.
- Usa `/session` y `/session plan` para inspeccionar cómo el CLI está rastreando tu trabajo actual.
<!-- track:cli:end -->

## 🎊 ¡Enhorabuena!

¡Has completado el taller **Mona Mayhem: GitHub Battle**! Esto es lo que lograste:

### Lo que construiste

- ✅ Una **aplicación web completa de múltiples páginas** a partir de una especificación de diseño
- ✅ Una **página de inicio** con temática arcade retro y diseño adaptable
- ✅ Una **arena de batalla** que obtiene y compara datos reales de contribuciones de GitHub
- ✅ **Gráficos de contribuciones interactivos** con niveles de actividad codificados por colores
- ✅ **Manejo de errores, estados de carga y mejoras de accesibilidad**
- ✅ **Diseño adaptable** que funciona en distintos dispositivos

### Lo que practicaste

| Habilidad | Lo que practicaste |
|-----------|-------------------|
| **Ingeniería de contexto** | Dar a Copilot los archivos, instrucciones y restricciones adecuados |
| **Planificación** | Generar y refinar planes de implementación antes de programar |
| **Programación con agentes** | Delegar trabajo de varios pasos y en múltiples archivos a Copilot |
| **Iteración de diseño** | Partir de una dirección visual y refinarla hasta conseguir un resultado pulido |
| **Disciplina de revisión** | Inspeccionar cambios generados por IA antes de hacer commit |

### 🚀 Sigue adelante

- 📺 [Canal de YouTube de VS Code](https://www.youtube.com/@code) — Consejos, tutoriales y novedades
- 📖 [Documentación de GitHub Copilot](https://docs.github.com/en/copilot) — Documentación oficial y guías
- 💻 [Documentación de GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) — Instalación, comandos de barra y buenas prácticas
- 🌟 [Awesome GitHub Copilot](https://github.com/stefanprodan/awesome-github-copilot) — Recursos y ejemplos de la comunidad
- 🛠️ [Talleres de Copilot Dev Days](https://github.com/github/copilot-dev-days) — Más talleres prácticos como este

---

## 🙏 ¡Gracias!

¡Gracias por unirte a este taller! Has experimentado cómo GitHub Copilot puede acelerar cada fase del desarrollo — desde la planificación y el diseño hasta la implementación y el pulido. Las técnicas que practicaste aquí se aplican a cualquier proyecto, cualquier framework y cualquier escala. ¡Ahora ve y construye algo increíble! 🚀
