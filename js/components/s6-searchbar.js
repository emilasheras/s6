export default () => {
    return `
    <section class="row">
        <div class="col-12">
            <div class="section-seachbar">
                <div class="searchbar-container">
                    <span class="material-symbols-outlined search-icon">Search</span>
                    <input type="text" placeholder="search [title]..." />
                    <!-- here should be a badge that suggest the hotkey for the searchbar -->
                    <span class="badge s6-bg-accent">CTRL K</span>
                </div>
            </div>
        </div>
    </section>
    <hr>
    `;
}