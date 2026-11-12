/** Escapa texto antes de insertarlo como HTML. */
export function escapeHTML(value = '') {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

/** Pluraliza de forma simple: plural(2, 'proyecto') → "2 proyectos" */
export function plural(count, word) {
    return `${count} ${word}${count === 1 ? '' : 's'}`;
}
