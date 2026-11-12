import { escapeHTML } from '../utils/html.js';
import { projectArt, planLabel } from './project-card.js';
import { galleryHTML } from './gallery.js';

/** HTML del detalle de un proyecto (contenido del <dialog>). */
export function projectDetail(project) {
    const name = escapeHTML(project.name);
    const shots = project.screenshots ?? [];
    const list = (items, cls) => items?.length
        ? `<ul class="${cls}">${items.map(i => `<li>${escapeHTML(i)}</li>`).join('')}</ul>`
        : '';

    const gallery = shots.length
        ? galleryHTML(shots, project.name)
        : `<div class="modal__empty">
               <span aria-hidden="true">📸</span>
               <p>Las capturas de ${name} llegan muy pronto.</p>
           </div>`;

    const cta = project.url
        ? `<a class="btn btn--primary" href="${escapeHTML(project.url)}" target="_blank" rel="noopener noreferrer">Visitar ${name} ↗</a>`
        : `<span class="btn btn--primary is-disabled" aria-disabled="true">Próximamente ✦</span>`;

    return `<div class="modal__panel">
        <button class="modal__close" type="button" data-close aria-label="Cerrar">✕</button>

        <div class="modal__scroll" tabindex="-1" autofocus>
            <header class="modal__hero theme-${escapeHTML(project.color)}">
                ${projectArt(project)}
            </header>

            <div class="modal__body">
                <div class="modal__chips">
                    <span class="chip chip--plan">${escapeHTML(planLabel(project))}</span>
                    ${project.status ? `<span class="chip chip--status">${escapeHTML(project.status)}</span>` : ''}
                    <span class="chip">${escapeHTML(project.category)}</span>
                </div>

                <h2 id="modal-title" class="modal__title">${name}</h2>
                <p class="modal__summary">${escapeHTML(project.summary ?? project.description)}</p>
                ${list(project.highlights, 'modal__highlights')}

                <section class="modal__section" aria-labelledby="modal-shots">
                    <h3 id="modal-shots" class="modal__subtitle">Capturas</h3>
                    ${gallery}
                </section>

                ${project.stack?.length ? `
                <section class="modal__section" aria-labelledby="modal-stack">
                    <h3 id="modal-stack" class="modal__subtitle">Hecho con</h3>
                    ${list(project.stack, 'modal__stack')}
                </section>` : ''}
            </div>
        </div>

        <footer class="modal__actions">
            ${cta}
            <button class="btn btn--secondary" type="button" data-close>Cerrar</button>
        </footer>
    </div>`;
}
