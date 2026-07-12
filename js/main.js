// ── Selene Luxe — Universal Affiliate Click Tracker ──────────────────────────
// Fires GA4 + Pinterest Tag + Meta Pixel on every affiliate link click.
// Attach data-track="affiliate" to any <a> to opt it in automatically.
function trackAffiliateClick(productId, productName, platform, destinationUrl) {
    if (typeof gtag === 'function') {
        gtag('event', 'affiliate_click', {
            event_category:     'Affiliate',
            event_label:        productName,
            product_id:         productId,
            affiliate_platform: platform,
            destination_url:    destinationUrl,
            value:              1
        });
    }
    if (typeof pintrk === 'function') {
        pintrk('track', 'checkout', {
            event_id:     'click_' + productId + '_' + Date.now(),
            product_id:   String(productId),
            product_name: productName,
            currency:     'USD',
            value:        0,
            order_quantity: 1
        });
    }
    if (typeof fbq === 'function') {
        fbq('track', 'ViewContent', {
            content_ids:  [String(productId)],
            content_name: productName,
            content_type: 'product',
            currency:     'USD'
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[data-track="affiliate"]').forEach(function(link) {
        link.addEventListener('click', function() {
            trackAffiliateClick(
                this.dataset.productId   || '',
                this.dataset.productName || '',
                this.dataset.platform    || 'unknown',
                this.href
            );
        });
    });


    // Header Scroll Effect
    const header = document.getElementById('main-header');
    const logo = document.getElementById('header-logo');
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Menu Logic - handled inline in index.html for specific slide logic or can be here
    // We already moved slide-menu logic to a small inline script for index.html,
    // but for search overlay we can handle it here:

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    window.location.href = `shop.html?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    // Search Overlay Logic
    const searchBtn = document.getElementById('search-btn');
    const closeSearchBtn = document.getElementById('close-search');
    const searchOverlay = document.getElementById('search-overlay');

    if (searchBtn && searchOverlay) {
        searchBtn.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 100);
            }
        });
        closeSearchBtn.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
        });
    }
});