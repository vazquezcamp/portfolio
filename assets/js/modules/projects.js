import { projects, PLANS } from '../data/projects.js';
import { projectCard } from '../components/project-card.js';
import { plural } from '../utils/html.js';

const ALL = 'todos';

/**
 * Renderiza la sección de proyectos: filtros (generados desde PLANS),
 * contador y grid.
 */
export function initProjects({ grid, filters, counter }) {
    if (!grid) return;

    const options = [[ALL, 'Todos'], ...Object.entries(PLANS).map(([key, p]) => [key, p.label])];

    filters.innerHTML = options
        .map(([key, label], i) =>
            `<button class="filter" type="button" data-filter="${key}" aria-pressed="${i === 0}">${label}</button>`)
        .join('');

    function render(filter = ALL) {
        const visible = projects.filter(p => filter === ALL || p.type === filter);
        counter.textContent = plural(visible.length, 'proyecto');
        grid.innerHTML = visible.length
            ? visible.map(projectCard).join('')
            : '<p class="project-grid__empty">Todavía no hay proyectos en esta categoría.</p>';
    }

    filters.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-filter]');
        if (!btn) return;
        filters.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        render(btn.dataset.filter);
    });

    render();
}
