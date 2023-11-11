import { galleryFadeIn } from './libs/s6-images.js';

/**
 * This Module represents a mini "App()". 
 * When ran, it makes the gallery images fade-in into view.
 * this module should hold all the Javascript code related to the Gallery page/section
 * @returns {string} HTML string
 */
export const GalleryModule = () => {
    console.log('GalleryModule Initialized');
    return galleryFadeIn();
}

// run the module
document.addEventListener("DOMContentLoaded", GalleryModule);