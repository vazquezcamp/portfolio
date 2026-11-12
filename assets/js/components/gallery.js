import { escapeHTML } from '../utils/html.js';

/**
 * Galería deslizable de capturas.
 * - Desliza con el dedo / trackpad (scroll-snap nativo, sin librerías).
 * - Flechas, puntitos y teclado (← →) cuando tiene foco.
 * - Solo la primera imagen carga de inmediato; las demás en diferido.
 */
export function galleryHTML(screenshots = [], projectName = '') {
    const many = screenshots.length > 1;

    const slides = screenshots.map((s, i) => `
        <figure class="gallery__slide" aria-roledescription="captura" aria-label="${i + 1} de ${screenshots.length}">
            <a href="${escapeHTML(s.src)}" target="_blank" rel="noopener" class="gallery__zoom" aria-label="Ver captura ${i + 1} en tamaño completo">
                <img src="${escapeHTML(s.src)}" alt="${escapeHTML(s.alt ?? `Captura de ${projectName}`)}"
                    ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
            </a>
            ${s.caption ? `<figcaption>${escapeHTML(s.caption)}</figcaption>` : ''}
        </figure>`).join('');

    const controls = many ? `
        <button class="gallery__arrow gallery__arrow--prev" type="button" data-gallery-prev aria-label="Captura anterior">‹</button>
        <button class="gallery__arrow gallery__arrow--next" type="button" data-gallery-next aria-label="Captura siguiente">›</button>
        <div class="gallery__dots">
            ${screenshots.map((_, i) => `<button type="button" data-gallery-dot="${i}" aria-label="Ir a captura ${i + 1}"${i === 0 ? ' aria-current="true"' : ''}></button>`).join('')}
        </div>` : '';

    return `<div class="gallery" data-gallery>
        <div class="gallery__track" tabindex="0" aria-label="Capturas de ${escapeHTML(projectName)}">${slides}</div>
        ${controls}
    </div>`;
}

/** Conecta flechas, puntitos y teclado de una galería ya insertada en el DOM. */
export function initGallery(root) {
    const gallery = root.querySelector('[data-gallery]');
    if (!gallery) return;

    const track = gallery.querySelector('.gallery__track');
    const dots = [...gallery.querySelectorAll('[data-gallery-dot]')];
    const prev = gallery.querySelector('[data-gallery-prev]');
    const next = gallery.querySelector('[data-gallery-next]');
    const count = track.children.length;

    // clientWidth es 0 mientras el dialog está cerrado: en ese caso estamos en la primera
    const current = () => (track.clientWidth ? Math.round(track.scrollLeft / track.clientWidth) : 0);
    const goTo = (i) => track.scrollTo({ left: Math.max(0, Math.min(count - 1, i)) * track.clientWidth, behavior: 'smooth' });

    function update() {
        const i = current();
        dots.forEach((d, n) => d.toggleAttribute('aria-current', n === i));
        if (prev) prev.disabled = i === 0;
        if (next) next.disabled = i === count - 1;
    }

    // update() solo cambia unos atributos: es barato correrlo en cada scroll
    track.addEventListener('scroll', update, { passive: true });

    prev?.addEventListener('click', () => goTo(current() - 1));
    next?.addEventListener('click', () => goTo(current() + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    track.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current() + 1); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current() - 1); }
    });

    update();
}
