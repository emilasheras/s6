import { imageData } from "../data/image-data.js";

export const galleryFadeIn = () => {
    const galleryDiv = document.querySelector('.gallery');
    imageData.forEach((img, index) => {
        setTimeout(() => {
            const imageElement = document.createElement('img');
            imageElement.alt = img.alt;
            imageElement.src = img.src;
            imageElement.className = img.classes.join(' ') + ' s6-fade-in';
            galleryDiv.appendChild(imageElement);
            imageElement.offsetWidth; // Trigger reflow
            imageElement.classList.add('s6-fade-in-loaded');
        }, 150 * index);
    });
    
    return true;
}