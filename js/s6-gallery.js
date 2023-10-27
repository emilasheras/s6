/**
 * This component represents a mini "App()" module. 
 * When ran, it makes the gallery images fade-in into view.
 * this module should hold all the event listeners related to the Gallery page/section
 */
import { galleryFadeIn } from './libs/s6-images.js';

export const GalleryModule = () => {
    console.log('GalleryModule Initialized');
    return galleryFadeIn();
}

// run the module
document.addEventListener("DOMContentLoaded", GalleryModule); //? this is the equivalent to Jquerys document.ready() or my legendary init() method


//todo: use JSON and localStorage:setItem(),getItem() methods
// e.g: const userData = JSON.parse(localStorage.getItem('userTurn'));
//todo: make use of addEventListener for something more like mouse-clicks or scrolling-into-view fade-in's
//todo: make a simplified cart that could add images based on their metadata price-tags