/**
 * Quita la intro del DOM cuando termina.
 * El CSS ya la oculta por sí solo; esto además detiene sus animaciones
 * infinitas (estrellas, nubes, murciélagos) para que no consuman recursos.
 */
export function initIntro(selector = '.intro') {
    const intro = document.querySelector(selector);
    if (!intro) return;

    const remove = () => intro.remove();

    intro.addEventListener('animationend', (e) => {
        if (e.target === intro && e.animationName === 'intro-hide') remove();
    });

    // Respaldo por si el evento no llega (p. ej. pestaña en segundo plano)
    setTimeout(remove, 3000);
}
