export const urlDataNavbar = [
    { name: 'index',    abbreviation: 'idx', url: 'index.html',     relPath: '/'},
    { name: 'home',     abbreviation: 'hme', url: 'home.html',      relPath: '/pages/'},
    { name: 'gallery',  abbreviation: 'gll', url: 'gallery.html',   relPath: '/pages/'},
    { name: 'nexus',    abbreviation: 'nxs', url: 'nexus.html',     relPath: '/pages/'},
    { name: 'shop',     abbreviation: 'shp', url: 'shop.html',      relPath: '/pages/'},
    { name: 'about',    abbreviation: 'abt', url: 'about.html',     relPath: '/pages/'}
];

export const getHref = (name) => {
    //example href let href = link.relPath+link.url;
    let href = '';
    urlDataNavbar.forEach(link => {
        if (link.name === name) {
            href = link.relPath+link.url;
        }
    });
    return href;
}
