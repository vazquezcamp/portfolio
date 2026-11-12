/**
 * Pausa las animaciones infinitas de los elementos [data-pause-offscreen]
 * cuando salen de la pantalla (clase .is-offscreen), y las reanuda al volver.
 */
export function initPauseOffscreen(selector = '[data-pause-offscreen]') {
    const elements = document.querySelectorAll(selector);
    if (!elements.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle('is-offscreen', !entry.isIntersecting);
        });
    });

    elements.forEach(el => observer.observe(el));
}
