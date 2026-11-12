import { site } from '../data/site.js';

/** Rellena datos globales: año del footer y enlaces de contacto. */
export function initSite() {
    document.querySelectorAll('[data-year]').forEach((el) => {
        el.textContent = new Date().getFullYear();
    });

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`;
    document.querySelectorAll('[data-contact-email]').forEach((el) => {
        el.href = mailto;
    });
}
