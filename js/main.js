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

// ── Email Capture Popup — Trigger Logic ──────────────────────────────────────
(function () {
    const STORAGE_KEY  = 'sl_popup_last_shown';
    const COOLDOWN_MS  = 7 * 24 * 60 * 60 * 1000; // 7 days

    // Skip on admin pages
    const adminPaths = ['/add-product', '/manage-products', '/pinterest-admin'];
    if (adminPaths.some(function (p) { return location.pathname.includes(p); })) return;

    // Respect cooldown
    var last = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    if (Date.now() - last < COOLDOWN_MS) return;

    var overlay = document.getElementById('sl-capture-overlay');
    if (!overlay) return;

    var shown = false;

    function showPopup() {
        if (shown) return;
        shown = true;
        overlay.style.display = 'flex';
        overlay.setAttribute('aria-hidden', 'false');
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }

    // Trigger 1: 45 seconds
    var timer = setTimeout(showPopup, 45000);

    // Trigger 2: 60% scroll depth
    function onScroll() {
        var scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        if (scrolled >= 0.6) {
            clearTimeout(timer);
            showPopup();
            window.removeEventListener('scroll', onScroll);
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // Trigger 3: exit intent (desktop only)
    document.addEventListener('mouseleave', function onLeave(e) {
        if (e.clientY < 10) {
            clearTimeout(timer);
            showPopup();
            document.removeEventListener('mouseleave', onLeave);
        }
    });

    // Close — X button
    var closeBtn = document.getElementById('sl-capture-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            overlay.style.display = 'none';
        });
    }

    // Close — backdrop click
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) overlay.style.display = 'none';
    });

    // Form submit (connect to email provider endpoint when ready)
    var form = document.getElementById('sl-capture-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.textContent = 'You\'re in ✓';
            submitBtn.classList.add('sl-success');
            setTimeout(function () { overlay.style.display = 'none'; }, 1200);
            // Uncomment & replace URL when email provider is set up:
            // var email = form.querySelector('input[type=email]').value;
            // fetch('https://your-mailchimp-or-convertkit-endpoint', {
            //     method: 'POST',
            //     body: JSON.stringify({ email: email }),
            //     headers: { 'Content-Type': 'application/json' }
            // });
        });
    }
}());

// Google Sign-In callback (fires when user completes Google one-tap)
function handleGoogleSignIn(response) {
    // response.credential is a JWT — pass to your backend or Firebase Auth
    console.log('Google Sign-In credential received');
    var overlay = document.getElementById('sl-capture-overlay');
    if (overlay) overlay.style.display = 'none';
}