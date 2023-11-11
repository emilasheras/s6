const logoPath = "./../assets/images/logo/sigil-clear.png";
const logoAlt = "syx6 logo image";
const logoClass = "s6-filter-brightness-75";
const logoHref = "./../index.html";

/**
 * The logo component. Sometimes it rotates and stuff.
 * @returns {string} HTML string
 */
export const logo = () => {
    return `
    <div class="logo-container">
        <a href="${logoHref}">
            <img src="${logoPath}" alt="${logoAlt}" class="${logoClass}" />
        </a>
    </div>
    `;
}