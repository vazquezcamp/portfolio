# Guía de estilo — "Cute Devil" (tenebroso pero kawaii)

Guía para replicar el estilo de este portafolio en otro proyecto.
Cópiala a la raíz del proyecto nuevo y pídele a Claude: *"Sigue DESIGN.md para todo lo visual"*.

---

## 1. Esencia

- **Concepto:** noche morada + neón rosa + una mascota tierna y un poco diabólica.
  Oscuro y misterioso, pero nunca agresivo: todo es redondo, suave y amable.
- **Tres reglas:**
  1. **Lo tierno va encima de una base seria.** Bonito, pero rápido, accesible y bien construido.
  2. **Redondo siempre.** Píldoras, tarjetas de 27px de radio, burbujas. Nada de esquinas duras.
  3. **El brillo es el acento, no el fondo.** Fondos oscuros y calmados; el rosa y el violeta solo en lo importante.

---

## 2. Color

Todo vive en `assets/css/base/tokens.css`. No uses colores sueltos si existe un token.

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#130d24` | Fondo de la página |
| `--bg-glow` | `#39205c` | Resplandor radial arriba a la derecha del `body` |
| `--surface` | `#241736` | Tarjetas, modales |
| `--fg` | `#fbf7ff` | Texto principal |
| `--fg-soft` | `#e8def5` | Navegación, texto secundario fuerte |
| `--muted` | `#c6bbd9` | Párrafos largos |
| `--line` | `#ffffff20` | Bordes de 1px y separadores |
| `--violet` / `--violet-soft` | `#ac73ff` / `#d7a5ff` | Acento principal, estados activos |
| `--pink` / `--pink-soft` | `#ff92bd` / `#ff9bc7` | Acento secundario, detalles (✦, ♥, palabras destacadas) |
| `--focus` | `#ffb3d4` | Anillo de foco del teclado |
| `--ink` | `#211134` | Texto sobre fondos claros (chips activos, botones blancos) |

**Fórmulas que se repiten:**
- Fondo de página: `radial-gradient(ellipse at 76% 7%, var(--bg-glow) 0, transparent 36%), var(--bg)`
- Botón primario: `linear-gradient(115deg, #b66dff, #7651ed)` + borde `#d4a2ff` + `box-shadow: inset 0 1px #ffffff6b, 0 9px 26px #7138c74d`
- Panel destacado: `linear-gradient(120deg, #32204f, #26183e)` con borde `#ffffff1e`
- Temas de tarjeta (fondo radial claro → oscuro, `circle at 55% 32%`): púrpura, rosa, azul, menta, durazno.
- Superficies "de cristal": `#ffffff06`–`#ffffff10` sobre el fondo oscuro.

---

## 3. Tipografía

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@800;900&display=swap">
```

| Rol | Fuente | Peso | Tamaño |
|---|---|---|---|
| Nombre / H1 | Nunito | 900 | `clamp(52px, 6.4vw, 88px)`, `line-height: 1`, `letter-spacing: -.035em` |
| Títulos de sección (H2) | Nunito | 900 | `clamp(30px, 3.6vw, 44px)`, `line-height: 1.1` |
| Títulos de tarjeta (H3) | Nunito | 900 | 22px |
| Etiqueta de sección ("kicker") | DM Sans | 700 | 14px, MAYÚSCULAS, `letter-spacing: .14em`, color `#c68bff`, con rayita antes |
| Párrafo | DM Sans | 400 | 17px, `line-height: 1.6–1.7`, máx. `46ch` |
| Texto pequeño | DM Sans | 400–700 | 13–15px |

- Carga **solo los pesos que uses**.
- Títulos con `text-wrap: balance`; párrafos con `text-wrap: pretty`.
- Una palabra clave del título puede ir en `--pink-soft` (ej. "Detrás de lo tierno, **hay ingeniería**").

---

## 4. Espaciado y layout

- **Escala única (base 4/8):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 → `--space-2xs` … `--space-4xl`. Nunca números sueltos.
- **Entre secciones:** `--section-space: clamp(72px, 8vw, 112px)` (clase `.section`).
- **Contenedor:** `max-width: 1200px`, padding lateral `clamp(20px, 4vw, 40px)`.
- **Encabezado de sección:** kicker → H2 → párrafo, máx. 640px de ancho, 48px de aire antes del contenido.
- **Breakpoints:** 850px (tablet: columnas → 1) y 560px (celular: botones a todo lo ancho).
- **Grids:** 3 columnas → 2 → 1. Separación 32px vertical / 24px horizontal.

---

## 5. Formas y componentes

| Elemento | Receta |
|---|---|
| Radios | Píldora `999px` · tarjeta `27px` · panel `30px` · modal `28px` · ícono `14px` |
| Bordes | Siempre 1px `var(--line)`; en hover sube a `#ffffff33` |
| **Botón** `.btn` | Píldora, alto mín. 50px (56px en CTA), peso 700–800. Hover: `translateY(-3px)` |
| `.btn--primary` | Degradado violeta (ver Color) |
| `.btn--secondary` | Borde `#a395bf`, fondo `#ffffff05`; hover borde violeta |
| **Tarjeta** | `--surface`, radio 27px, ilustración arriba (16:10) con tema de color, pie separado por línea. Hover: sube 7px + sombra `0 20px 50px #0005`. Toda la tarjeta clicable |
| **Chip / filtro** | Píldora de 44px (táctil). Activo: fondo `--violet-soft`, texto `--ink`, peso 800 |
| **Etiqueta en imagen** | Píldora blanca `#ffffffcb`, texto `#2a173e`, 12px peso 900 |
| **Pilar / feature** | Fila con ícono SVG de trazo (1.8px) en cuadrito degradado violeta→rosa, título Nunito 800 17px, texto 15px `--muted` |
| **Modal** | `<dialog>` nativo, `--surface`, radio 28px, fondo `#0b0618b3`. En celular: hoja desde abajo con "asa" |
| **Íconos** | SVG de trazo redondeado (`stroke-linecap/linejoin: round`), en `currentColor` |
| **Adornos** | ✦ ✧ ♥ en rosa/violeta, con `text-shadow` de brillo suave |

---

## 6. Ilustración y mascota

- **Personaje:** gatito negro con capucha morada, cuernos y alas rosa-rojo, ojos de anillo de neón, colita de corazón. Estilo 3D de peluche.
- **Variantes por proyecto/tema:** la misma mascota con un disfraz (taquero, coleccionista…). Es el hilo visual de todo.
- **Formato:** PNG con fondo transparente → **WebP** a la medida en que se muestra (1x y 2x con `srcset`). Nunca subas la imagen original de 1.5 MB.
- El brillo va **dentro** de la imagen o en una capa aparte con degradado. No le pongas `drop-shadow` grande si se va a animar.
- Ilustraciones vectoriales (SVG) en la misma paleta cuando no hay imagen.

---

## 7. Movimiento

**Personalidad:** flota, respira, rebota un poquito. Nunca brusco.

| Uso | Duración | Curva |
|---|---|---|
| Hover (botones, tarjetas) | .2–.3s | `ease` |
| Aparecer al hacer scroll (`.reveal`) | .65s | `ease`, desde `translateY(18px)` |
| Rebote kawaii (entradas, brincos) | .45–.6s | `cubic-bezier(.3, 1.6, .5, 1)` |
| Abrir/cerrar paneles | .28–.3s | `cubic-bezier(.2, .9, .3, 1.1)` |
| Flotar / respirar (infinito) | 3–6s | `ease-in-out`, alternado |
| Intro de bienvenida | ≈ 2s en total | — |

**Reglas de rendimiento (obligatorias):**
1. **Anima solo `transform` y `opacity`** (o `translate`, `scale`, `rotate`). Nunca `width`, `top`, `margin`…
2. **Nunca animes un elemento que tenga `filter: blur()` o `drop-shadow()`.** Usa degradados radiales ya difuminados o sombras "horneadas" en el SVG.
3. Las animaciones infinitas se **pausan fuera de pantalla** (`data-pause-offscreen`).
4. Las intros se hacen **solo con CSS** (se quitan solas aunque falle el JS) y luego se **eliminan del DOM**.
5. `@media (prefers-reduced-motion: reduce)` apaga todo y las intros no aparecen.

---

## 8. Rendimiento y accesibilidad (checklist)

- [ ] Imágenes en WebP a su tamaño real; `fetchpriority="high"` solo en la principal; `loading="lazy"` en el resto.
- [ ] Fuentes con `display=swap` y solo los pesos usados.
- [ ] Sin librerías para lo que el navegador ya hace (`<dialog>`, `scroll-snap`, `IntersectionObserver`).
- [ ] Foco visible: `outline: 3px solid var(--focus); outline-offset: 4px`.
- [ ] Objetivos táctiles de mínimo 44px.
- [ ] Contraste: texto `--muted` o más claro sobre fondos oscuros.
- [ ] Todas las imágenes con `alt` descriptivo; las decorativas con `alt=""` y `aria-hidden`.
- [ ] Probado en 1280px, 850px y 390px.

---

## 9. Voz y tono

- Español, primera persona, cálido y breve. Un guiño, no un chiste en cada línea.
- Mezcla lo tierno con lo técnico: *"Detrás de lo tierno, hay ingeniería"*, *"Mis pequeños inventos"*, *"¿Creamos algo bonito? ♡"*, *"Invocando la magia..."*.
- Botones con verbo y flecha: *"Explora mis proyectos ↓"*, *"Hablemos ↗"*, *"Ver detalles →"*.
- Credibilidad sin presumir: decir **cómo** trabajas, no adjetivos vacíos.

---

## 10. Arquitectura (cómo arrancar un proyecto nuevo)

Sitio estático sin build: HTML + CSS + JavaScript con ES modules.

```
proyecto/
├── index.html
├── DESIGN.md                ← esta guía
└── assets/
    ├── img/                 ← WebP a la medida
    ├── css/
    │   ├── main.css         ← solo @import, en orden: base → layout → components → sections
    │   ├── base/            ← tokens, reset, animations, utilities  (COPIAR TAL CUAL)
    │   ├── layout/          ← shell, header, footer                 (COPIAR Y AJUSTAR)
    │   ├── components/      ← buttons, section-head, cards, modal…  (COPIAR LO QUE USES)
    │   └── sections/        ← una por sección de la página          (NUEVAS)
    └── js/
        ├── main.js          ← inicializa módulos
        ├── data/            ← contenido (nunca mezclado con lógica)
        ├── components/      ← funciones que devuelven HTML
        ├── modules/         ← comportamiento (reveal, pause-offscreen, intro…)
        └── utils/           ← escapeHTML, etc.
```

**Pasos:**
1. Copia `DESIGN.md`, `assets/css/base/`, `assets/css/layout/`, `assets/css/components/buttons.css` y `section-head.css`.
2. Copia `assets/js/modules/reveal.js`, `pause-offscreen.js` y `assets/js/utils/html.js`.
3. Crea `main.css` con los `@import` y `main.js` con los `init…()` que uses.
4. Copia el `<head>` (fuentes, `theme-color: #130d24`, favicon SVG).
5. Construye cada sección con: `section.section.reveal` → `.section-head` (kicker + H2 + p) → contenido.
6. Agrega la mascota con el disfraz del nuevo proyecto.
7. Pasa el checklist de la sección 8.

**Convenciones:** clases BEM ligero (`.card`, `.card__body`, `.btn--primary`); cada archivo CSS trae sus propios media queries; un archivo JS = una responsabilidad.

---

## 11. Instrucción corta para Claude

> Construye este proyecto siguiendo `DESIGN.md`: estilo "tenebroso pero kawaii" (noche morada `#130d24`, acentos violeta `#d7a5ff` y rosa `#ff92bd`, Nunito 900 para títulos y DM Sans para texto), todo redondeado, tokens de color y espaciado en `tokens.css`, sitio estático con ES modules y CSS modular. Anima solo `transform`/`opacity`, nunca elementos con blur o drop-shadow, respeta `prefers-reduced-motion`, imágenes en WebP a su tamaño real y objetivos táctiles de 44px.
