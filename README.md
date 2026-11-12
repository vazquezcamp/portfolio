# Israel Vazquez — Portafolio

Sitio estático (HTML + CSS + JavaScript nativo con ES modules). No necesita build ni dependencias.

## Ver en local

Los ES modules no funcionan abriendo el archivo con doble clic (`file://`); usa un servidor local:

```bash
# opción 1 (Python)
python3 -m http.server 5173

# opción 2 (Node)
npx serve .
```

O la extensión **Live Server** de VS Code → clic derecho en `index.html` → *Open with Live Server*.

## Estructura

```
portfolio/
├── index.html                  # Marcado de la página
├── assets/
│   ├── img/                    # SVG e imágenes (logo, ilustraciones)
│   ├── css/
│   │   ├── main.css            # Punto de entrada: importa todo lo demás
│   │   ├── base/               # tokens (colores, fuentes), reset, animaciones, utilidades
│   │   ├── layout/             # shell, header, footer
│   │   ├── components/         # piezas reutilizables: botones, filtros, tarjetas…
│   │   └── sections/           # estilos propios de cada sección (hero, contacto…)
│   └── js/
│       ├── main.js             # Punto de entrada: inicializa los módulos
│       ├── data/               # CONTENIDO: proyectos y datos del sitio
│       ├── components/         # funciones que devuelven HTML (tarjeta, ilustración)
│       ├── modules/            # comportamiento (filtros, animación reveal, etc.)
│       └── utils/              # helpers genéricos
└── README.md
```

## Tareas comunes

| Quiero…                         | Edita                                                        |
| ------------------------------- | ------------------------------------------------------------ |
| Agregar un proyecto             | `assets/js/data/projects.js` → array `projects`              |
| Resumen / capturas de un proyecto | `assets/js/data/projects.js` → `summary`, `highlights`, `stack`, `screenshots`; imágenes en `assets/img/projects/<id>/` |
| Agregar un tipo/filtro nuevo    | `assets/js/data/projects.js` → objeto `PLANS`                |
| Cambiar correo de contacto      | `assets/js/data/site.js`                                     |
| Cambiar colores o fuentes       | `assets/css/base/tokens.css`                                 |
| Nuevo color de tarjeta          | `assets/css/components/project-card.css` → `.theme-<nombre>` |
| Nueva ilustración de gatito     | `assets/js/components/cat-art.js` → `VARIANTS`               |
| Nueva sección                   | HTML en `index.html` + `assets/css/sections/<nombre>.css` importado en `main.css` |

## Convenciones

- **CSS:** clases tipo BEM ligero (`.project`, `.project__body`, `.btn--primary`). Cada archivo incluye sus propios media queries (850px tablet, 560px móvil).
- **Colores:** usa variables de `tokens.css` en lugar de valores sueltos cuando sea posible.
- **JS:** un archivo = una responsabilidad. Los datos nunca van mezclados con la lógica.
