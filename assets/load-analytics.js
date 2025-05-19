// assets/load-analytics.js
(function() {
    // Only load on your live domain (not localhost/GitHub preview)
    if (window.location.hostname === 'hpexamhub.in') {
        // Load gtag.js
        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-6JPEMKWNPK';
        document.head.appendChild(gtagScript);

        // Initialize Data Layer
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-6JPEMKWNPK');
    }
})();