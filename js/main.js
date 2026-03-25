document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('main-header');
    const logo = document.getElementById('header-logo');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'py-3', 'shadow-sm');
            header.classList.remove('py-6');
            if (logo) {
                logo.classList.add('text-2xl', 'md:text-4xl');
                logo.classList.remove('text-4xl', 'md:text-6xl');
            }
        } else {
            header.classList.remove('bg-white', 'py-3', 'shadow-sm');
            header.classList.add('py-6');
            if (logo) {
                logo.classList.remove('text-2xl', 'md:text-4xl');
                logo.classList.add('text-4xl', 'md:text-6xl');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Menu Logic
    const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                // Redirect to shop page with a search parameter
                window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
}
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const sideMenu = document.getElementById('side-menu');

    if (menuBtn && sideMenu) {
        menuBtn.addEventListener('click', () => sideMenu.classList.remove('-translate-x-full'));
        closeMenuBtn.addEventListener('click', () => sideMenu.classList.add('-translate-x-full'));
        
        // Close menu when clicking a link
        const menuLinks = sideMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => sideMenu.classList.add('-translate-x-full'));
        });
    }

    // Search Logic
    const searchBtn = document.getElementById('search-btn');
    const closeSearchBtn = document.getElementById('close-search');
    const searchOverlay = document.getElementById('search-overlay');

    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.remove('hidden');
            setTimeout(() => searchOverlay.classList.remove('opacity-0'), 10);
        });
        closeSearchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('opacity-0');
            setTimeout(() => searchOverlay.classList.add('hidden'), 300);
        });
    }
});