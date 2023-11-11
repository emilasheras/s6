// import navbar from './components/s6-navbar.js';
import verticalNavbar from './components/s6-vertical-navbar.js';
import searchbar from './components/s6-searchbar.js';
import footer from './components/s6-footer.js';

/**
 * Navigation Module library.
 * Renders the navigation bar
 * @returns {string} HTML string
 */
const NavigationModule = () => {
  console.log('NavigationModule Initialized');

  console.log('... Hydrating navbar');
  document.querySelector('#navbar').innerHTML = verticalNavbar();
  
  console.log('... Hydrating searchbar ');
  document.querySelector('#searchbar').innerHTML = searchbar();

  console.log('... Hydrating footer');
  document.querySelector('#footer').innerHTML = footer();
}

document.addEventListener("DOMContentLoaded", NavigationModule); // <- run the module