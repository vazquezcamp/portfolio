import { findProject } from '../data/projects.js';
import { projectDetail } from '../components/project-detail.js';
import { initGallery } from '../components/gallery.js';

const HASH_PREFIX = '#proyecto/';

/**
 * Detalle de proyecto en un <dialog> nativo:
 * - Abre al instante sobre la página (sin navegar).
 * - Esc, clic fuera o "Cerrar" lo cierran; el foco vuelve a la tarjeta.
 * - Link compartible (#proyecto/<id>) y el botón "Atrás" del celular lo cierra.
 * - Precarga la primera captura al pasar el mouse por la tarjeta.
 */
export function initProjectModal({ dialog, grid }) {
    if (!dialog || !grid) return;

    let pushedState = false;   // ¿abrimos nosotros una entrada en el historial?

    const idFromHash = () =>
        location.hash.startsWith(HASH_PREFIX) ? decodeURIComponent(location.hash.slice(HASH_PREFIX.length)) : null;

    function render(project) {
        dialog.innerHTML = projectDetail(project);
        initGallery(dialog);
    }

    function open(id, { push = true } = {}) {
        const project = findProject(id);
        if (!project) return;

        render(project);
        if (!dialog.open) dialog.showModal();
        dialog.querySelector('.modal__scroll').scrollTop = 0;

        if (push) {
            history.pushState({ project: id }, '', HASH_PREFIX + encodeURIComponent(id));
            pushedState = true;
        }
    }

    function close() {
        if (pushedState && history.state?.project) {
            // Regresar en el historial dispara popstate, que cierra el dialog
            pushedState = false;
            history.back();
            return;
        }
        if (idFromHash()) history.replaceState(null, '', location.pathname + location.search);
        dialog.close();
    }

    // Abrir desde cualquier tarjeta (delegación: sobrevive a los filtros)
    grid.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-open-project]');
        if (trigger) open(trigger.dataset.openProject);
    });

    // Precarga la primera captura cuando el usuario muestra intención
    const prefetched = new Set();
    const prefetch = (e) => {
        const id = e.target.closest('.project')?.dataset.id;
        if (!id || prefetched.has(id)) return;
        prefetched.add(id);
        const first = findProject(id)?.screenshots?.[0];
        if (first) new Image().src = first.src;
    };
    grid.addEventListener('pointerover', prefetch, { passive: true });
    grid.addEventListener('focusin', prefetch);

    // Cerrar: botones, clic en el fondo oscuro, tecla Esc
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog || e.target.closest('[data-close]')) close();
    });
    dialog.addEventListener('cancel', (e) => {
        e.preventDefault();
        close();
    });

    // Atrás / Adelante del navegador
    window.addEventListener('popstate', () => {
        const id = idFromHash();
        if (id && findProject(id)) {
            open(id, { push: false });
        } else if (dialog.open) {
            pushedState = false;
            dialog.close();
        }
    });

    // Link directo: tusitio.com/#proyecto/tacopos
    const initial = idFromHash();
    if (initial) open(initial, { push: false });
}
