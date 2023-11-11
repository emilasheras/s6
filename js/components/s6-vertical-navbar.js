import { logo } from "./s6-logo.js";
import { links } from "./s6-links.js";
import { optionsButton } from "./s6-options-button.js";


/**
 * Vertical navbar component
 * @returns {string} HTML string
 */
export default () => {
    return `
    <nav class="navbar-vertical">
        ${logo()}
        ${links()}
        ${optionsButton()}
    </nav>
    `;
}