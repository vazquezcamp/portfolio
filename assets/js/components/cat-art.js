/**
 * Ilustraciones de gatito diablito para las tarjetas.
 * Para agregar una variante nueva, añade una entrada a VARIANTS.
 */

const VARIANTS = {
    coder: {
        label: 'programador',
        badge: '⌘',
        accessory: `<rect x="79" y="151" width="162" height="77" rx="13" fill="#7445bb" stroke="#d8a5ff" stroke-width="4"/>
            <text x="160" y="198" text-anchor="middle" font-size="34" fill="#ffd2ff">&lt;/&gt;</text>`,
    },
    sleep: {
        label: 'dormido',
        badge: '💤',
        accessory: `<path d="M62 197Q160 158 258 197L246 230H72Z" fill="#e6a0c5" opacity=".75"/>`,
    },
    designer: {
        label: 'diseñador',
        badge: '✎',
        accessory: `<rect x="88" y="155" width="144" height="74" rx="13" fill="#577bd3" stroke="#b7d8ff" stroke-width="4"/>
            <text x="160" y="201" text-anchor="middle" font-size="39" fill="#f8efff">✦</text>`,
    },
};

let uid = 0;

export function catArt(kind) {
    const v = VARIANTS[kind] ?? VARIANTS.coder;
    // IDs únicos por instancia para evitar choques de gradientes en el DOM
    const id = `cat-${++uid}`;

    return `<svg viewBox="0 0 320 260" role="img" aria-label="Ilustración de un gatito diablito ${v.label}">
        <defs>
            <linearGradient id="${id}-fur" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#7155b2"/><stop offset="1" stop-color="#291d4a"/></linearGradient>
            <linearGradient id="${id}-horn" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#ffc2d2"/><stop offset="1" stop-color="#ed568f"/></linearGradient>
        </defs>
        <ellipse cx="160" cy="231" rx="118" ry="15" fill="#21113d" opacity=".25"/>
        <path d="M94 130Q45 98 54 181L96 160M224 130Q275 98 266 181L224 160" fill="#543579" stroke="#f49ac8" stroke-width="3"/>
        <ellipse cx="161" cy="171" rx="88" ry="76" fill="url(#${id}-fur)"/>
        <path d="M93 111 91 39 135 84M186 84 229 39 228 111" fill="url(#${id}-fur)" stroke="#8c6bca" stroke-width="4" stroke-linejoin="round"/>
        <path d="M109 81 105 55 128 88M192 88 216 55 213 81" fill="#e78cba"/>
        <path d="M114 85Q102 53 119 26L140 84M181 84 202 26Q220 53 208 85" fill="url(#${id}-horn)" stroke="#ffb3ce" stroke-width="3"/>
        <ellipse cx="160" cy="123" rx="87" ry="71" fill="url(#${id}-fur)"/>
        <path d="M107 123q19-18 37 0m32 0q19-18 37 0" fill="none" stroke="#ffc0de" stroke-width="6" stroke-linecap="round"/>
        <path d="m154 141 7 5 7-5m-7 5q-7 9-14 2m14-2q7 9 14 2" fill="none" stroke="#ffc0de" stroke-width="3" stroke-linecap="round"/>
        <path d="M105 149 73 141m32 15-33 6m143-13 32-8m-32 15 33 6" stroke="#ffb4d5" stroke-width="2" stroke-linecap="round"/>
        ${v.accessory}
        <text x="263" y="55" font-size="28" fill="#fff0fb">${v.badge}</text>
    </svg>`;
}
