/**
 * This component represents a mini "App()" module. 
 * When ran, it makes the gallery images fade-in into view.
 * this module should hold all the Javascript code related to the Gallery page/section
 */
import { galleryFadeIn } from './libs/s6-images.js';

export const GalleryModule = () => {
    console.log('GalleryModule Initialized');
    return galleryFadeIn();
}

// run the module
document.addEventListener("DOMContentLoaded", GalleryModule);