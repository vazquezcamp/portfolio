/** Agrega la clase .visible a los elementos .reveal cuando entran en pantalla. */
export function initReveal(selector = '.reveal') {
    const elements = document.querySelectorAll(selector);

    if (!('IntersectionObserver' in window)) {
        elements.forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08 });

    elements.forEach(el => observer.observe(el));
}
