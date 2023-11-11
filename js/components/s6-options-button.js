/**
 * This component is a button that shows up in the mobile view of the website.
 * Displays a menu when clicked with the available links and urls.
 * @returns {string} HTML string
 */
export const optionsButton = () => {
    return `
    <label class="options-button-container" title="options">
        <input class="s6-invisible-input" type="checkbox"/>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </label>
    `;
}