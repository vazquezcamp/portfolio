/**
 * Parallax suave: los elementos [data-parallax] reciben las variables
 * CSS --px y --py (de -1 a 1) según la posición del mouse.
 * Se desactiva en pantallas táctiles y con "reducir movimiento".
 */
export function initParallax(selector = '[data-parallax]') {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (reduceMotion || !finePointer) return;

    document.querySelectorAll(selector).forEach((el) => {
        let frame = null;

        window.addEventListener('pointermove', (e) => {
            // No calcular nada si ya hay un frame pendiente o el hero no se ve
            if (frame || el.closest('.is-offscreen')) return;
            frame = requestAnimationFrame(() => {
                frame = null;
                const r = el.getBoundingClientRect();
                const x = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
                const y = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
                el.style.setProperty('--px', Math.max(-1, Math.min(1, x)).toFixed(3));
                el.style.setProperty('--py', Math.max(-1, Math.min(1, y)).toFixed(3));
            });
        }, { passive: true });

        document.addEventListener('pointerleave', () => {
            el.style.setProperty('--px', 0);
            el.style.setProperty('--py', 0);
        });
    });
}
