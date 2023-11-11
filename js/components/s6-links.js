import { urlDataNavbar, getHref } from '../data/s6-url-data.js';
import { encapsulator } from '../data/s6-styles.js';


/**
 * The links component with all the urls and abbreviations.
 * @returns {string} HTML string
 */
export const links = () => {
    // console.log(window.location.pathname);
    return `
    <ul>
        ${urlDataNavbar.map(link => {
            let href = getHref(link.name);
            return `
            <li>
                <a href="${href}" class="${encapsulator}">${link.abbreviation}</a>
            </li>
            `;
        }).join('')}
    </ul>
    `;
}