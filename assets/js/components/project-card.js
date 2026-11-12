import { catArt } from './cat-art.js';
import { escapeHTML } from '../utils/html.js';
import { PLANS } from '../data/projects.js';

/** Ilustración del proyecto: su imagen propia o un gatito SVG. */
export function projectArt(project) {
    return project.image
        ? `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.imageAlt ?? '')}" decoding="async">`
        : catArt(project.art);
}

/** Etiqueta del plan ("Gratis", "Con planes"…). */
export const planLabel = (project) => PLANS[project.type]?.label ?? project.type;

/**
 * Devuelve el HTML de una tarjeta de proyecto.
 * Toda la tarjeta es clicable gracias al botón del título (.project__open),
 * cuyo ::after se estira sobre la tarjeta. El link externo ↗ queda encima.
 */
export function projectCard(project) {
    const name = escapeHTML(project.name);

    const link = project.url
        ? `<a class="project__link" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${name} en otra pestaña">↗</a>`
        : '';

    return `<article class="project" data-id="${escapeHTML(project.id)}">
        <div class="project__art theme-${escapeHTML(project.color)}">
            <span class="project__tag">${escapeHTML(planLabel(project))}</span>
            ${projectArt(project)}
        </div>
        <div class="project__body">
            <h3>
                <button class="project__open" type="button" data-open-project="${escapeHTML(project.id)}" aria-haspopup="dialog">${name}</button>
            </h3>
            <p>${escapeHTML(project.description)}</p>
            <div class="project__footer">
                <small>${escapeHTML(project.category)}</small>
                <span class="project__actions">
                    <span class="project__more" aria-hidden="true">Ver detalles <span class="project__more-arrow">→</span></span>
                    ${link}
                </span>
            </div>
        </div>
    </article>`;
}
