/**
 * Punto de entrada de JavaScript.
 * Cada módulo se inicializa aquí; para una nueva funcionalidad,
 * crea un archivo en modules/ e impórtalo.
 */
import { initIntro } from './modules/intro.js';
import { initSite } from './modules/site.js';
import { initProjects } from './modules/projects.js';
import { initReveal } from './modules/reveal.js';
import { initParallax } from './modules/parallax.js';
import { initPauseOffscreen } from './modules/pause-offscreen.js';
import { initProjectModal } from './modules/project-modal.js';

initIntro();
initSite();

initProjects({
    grid: document.getElementById('projects'),
    filters: document.getElementById('project-filters'),
    counter: document.getElementById('project-counter'),
});

initProjectModal({
    grid: document.getElementById('projects'),
    dialog: document.getElementById('project-dialog'),
});

initReveal();
initParallax();
initPauseOffscreen();
