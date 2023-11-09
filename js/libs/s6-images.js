// Defined constants
//todo: for a sub-module approach of page definitions, this must be relative to the whole app's `RootDir` or @app alias
const IMAGE_DATA_PATH = "../js/data/image-data.json"; // <- Must be relative to the .html file the whole Js is imported. 
const FADE_IN_MS = 150;

// Function to fetch image data asynchronously
const getImageData = (PATH) => {
    return fetch(PATH)
    .then(response => response.json())
    .catch(error => {
        throw new Error(`HTTP error! status: ${error}`);
    });
}

// Main fade-in method
export const galleryFadeIn = () => {
    // Get data dynamically
    getImageData(IMAGE_DATA_PATH).then(imageData => {
        // Make sure imageData is defined
        if (!imageData) {
            throw new Error('ImageData is undefined or could not be fetched.');
        }

        // Get the predefined `gallery` section
        const galleryDiv = document.querySelector('.gallery');
        // Fade in images fetched beforehand
        imageData.forEach((img, index) => fadeInImageAsset(img, index, galleryDiv));
    }).catch(error => {
        // Centralized error handling
        console.error('Error in galleryFadeIn:', error);
    });
}

// Init async time processes shifted by element index 
// multiplied by the milliseconds amount for each animation.
const fadeInImageAsset = (img, index, htmlElement) => {
    setTimeout(() => {
        const imageElement = document.createElement('img');
        imageElement.alt = img.alt;
        imageElement.src = img.src;
        imageElement.className = img.classes.join(' ') + ' s6-fade-in';
        htmlElement.appendChild(imageElement);
        imageElement.offsetWidth; // Trigger reflow
        imageElement.classList.add('s6-fade-in-loaded');
    }, FADE_IN_MS * index);
}
