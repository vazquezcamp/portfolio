/**
 * ==========================================================
 *  AGREGA TUS PROYECTOS AQUÍ
 * ==========================================================
 *
 * TARJETA
 *  - id          Identificador único (slug, sin espacios). Se usa en el link
 *                compartible: tusitio.com/#proyecto/<id>
 *  - name        Nombre visible del proyecto.
 *  - description Texto corto para la tarjeta.
 *  - type        Clave de PLANS (abajo): 'gratis' | 'planes' | …
 *  - category    Etiqueta libre que aparece en el pie de la tarjeta.
 *  - color       Tema de la tarjeta: 'purple' | 'rose' | 'blue' | 'mint' | 'peach'
 *                (definidos en assets/css/components/project-card.css → .theme-*)
 *  - image       (opcional) Ruta a una imagen propia, idealmente .webp con fondo
 *                transparente en assets/img/projects/. Si existe, reemplaza a `art`.
 *  - imageAlt    Descripción de la imagen para lectores de pantalla.
 *  - art         Ilustración SVG cuando no hay imagen: 'coder' | 'sleep' | 'designer'
 *                (definidas en assets/js/components/cat-art.js)
 *  - url         Enlace al proyecto. Vacío = "Próximamente".
 *
 * DETALLE (se ve al dar clic en la tarjeta) — todo opcional
 *  - status      'Disponible' | 'En desarrollo' | 'Próximamente' | …
 *  - summary     Resumen de 2–4 líneas. Si falta, se usa `description`.
 *  - highlights  Lista de puntos clave: ['…', '…']
 *  - stack       Tecnologías usadas: ['HTML', 'JavaScript', …]
 *  - screenshots Capturas: [{ src, alt, caption }]
 *                Guárdalas en assets/img/projects/<id>/ como .webp
 *                (≈1600px de ancho para escritorio, ≈800px para celular).
 */
export const projects = [
    {
        id: 'tacopos',
        name: 'TacoPOS',
        description: 'Punto de venta para taquerías que funciona sin conexión a internet.',
        type: 'planes',
        category: 'Punto de venta',
        color: 'peach',
        image: 'assets/img/projects/tacopos.webp',
        imageAlt: 'Gatito diablito taquero con un taco en la mano junto a un trompo de pastor',
        url: 'https://silvestrec4.sg-host.com/',

        status: 'Disponible',
        summary: 'TacoPOS es un punto de venta pensado para taquerías. Funciona sin conexión a internet, así que el negocio puede seguir vendiendo aunque se caiga la red.',
        highlights: [
            'Funciona offline, sin depender de internet',
            'Cobro rápido: catálogo con buscador y categorías (tacos, especialidades, bebidas, extras)',
            'Órdenes para comer aquí, para llevar o a domicilio, con mesa o nombre del cliente',
            'Cuentas guardadas, inventario con existencias, clientes, ventas y reportes',
        ],
        screenshots: [
            {
                src: 'assets/img/projects/tacopos/cobrar.webp',
                alt: 'Pantalla de cobro de TacoPOS: menú lateral, buscador, categorías, cuadrícula de productos con precios y panel de orden actual',
                caption: 'Pantalla de cobro: toca un producto y se agrega a la orden',
            },
        ],
    },
    {
        id: 'promodex',
        name: 'PromoDex',
        description: 'Lleva el control de tu colección de figuras promocionales: Vualá, Little Bites, Gansito, Nito y más.',
        type: 'gratis',
        category: 'Coleccionismo',
        color: 'mint',
        image: 'assets/img/projects/promodex.webp',
        imageAlt: 'Gatito diablito coleccionista con gorra, mochila y una esfera en la mano',
        url: '', // en desarrollo: se mostrará como "Próximamente"

        status: 'En desarrollo',
        summary: 'PromoDex es una app gratuita para coleccionistas de figuras promocionales —Vualá, Little Bites, Gansito, Nito de Bimbo y más— para llevar el registro de tu colección en un solo lugar.',
        highlights: [
            'Gratis para coleccionistas',
            'Figuras de promociones de Vualá, Little Bites, Gansito, Nito y más',
        ],
        screenshots: [],
    },
    {
        id: 'cuentos',
        name: 'Cuentos de Miauedo', // TODO: nombre real del sitio
        description: 'Cuentos de terror protagonizados por un gatito, con audio cuentos para niños y adolescentes.',
        type: 'gratis',
        category: 'Audio cuentos',
        color: 'purple',
        image: 'assets/img/projects/cuentos.webp',
        imageAlt: 'Gatito diablito disfrazado de hombre lobo, con garras y colmillos, haciendo pose de susto',
        url: '', // TODO: link del sitio

        summary: 'Una web gratuita de cuentos de terror donde el protagonista es un gatito. Tiene audio cuentos pensados para niños y adolescentes: historias para escuchar con un poquito de miedo y mucha ternura.',
        highlights: [
            'Gratis para todos',
            'Audio cuentos para escuchar',
            'Historias de miedo pensadas para niños y adolescentes',
            'Un gatito como personaje principal',
        ],
        screenshots: [
            // { src: 'assets/img/projects/cuentos/1.webp', alt: '…', caption: '…' },
        ],
    },
];

/**
 * Tipos de proyecto. Cada uno genera automáticamente
 * un botón de filtro y la etiqueta de la tarjeta.
 * Para un nuevo tipo, agrégalo aquí y úsalo en `type`.
 */
export const PLANS = {
    gratis: { label: 'Gratis' },
    planes: { label: 'Con planes' },
};

/** Busca un proyecto por id. */
export const findProject = (id) => projects.find(p => p.id === id);
