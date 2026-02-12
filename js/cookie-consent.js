// Cookie Consent Management for GitFocus
// Handles GDPR-compliant cookie consent for Chatwoot live chat

(function() {
    'use strict';

    const CONSENT_KEY = 'chatwoot-consent';
    const GEO_CACHE_KEY = 'geo-country-check';
    const CHATWOOT_CONFIG = {
        baseUrl: 'https://app.chatwoot.com',
        websiteToken: 'xiyWsj719fc5BZUsg8i4n88i'
    };

    // Countries that require GDPR-compliant cookie consent
    // EU27 + EEA + UK + Switzerland + Brazil
    const GDPR_COUNTRIES = [
        'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
        'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
        'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', // EU 27
        'IS', 'LI', 'NO', // EEA (non-EU)
        'GB', // United Kingdom
        'CH', // Switzerland
        'BR'  // Brazil
    ];

    // Check if user is coming from the GitFocus app
    function isFromApp() {
        // Check custom user agent from iOS app
        const isAppUserAgent = navigator.userAgent.includes('GitFocus/');

        // Check URL parameter for explicit consent
        const urlParams = new URLSearchParams(window.location.search);
        const hasConsentParam = urlParams.get('consent') === 'chat';

        return isAppUserAgent || hasConsentParam;
    }

    // Detect if user is in a GDPR region using geolocation
    async function isInGDPRRegion() {
        // Get cache duration (1 hour default)
        const cacheHours = 1;
        const cacheDuration = cacheHours * 60 * 60 * 1000;

        // Check cache first
        try {
            const cached = sessionStorage.getItem(GEO_CACHE_KEY);
            if (cached) {
                const { countryCode, timestamp } = JSON.parse(cached);
                const age = Date.now() - timestamp;

                if (age < cacheDuration) {
                    console.log('[Cookie Consent] Using cached country:', countryCode);
                    return GDPR_COUNTRIES.includes(countryCode);
                } else {
                    console.log('[Cookie Consent] Geo cache expired, re-checking...');
                }
            }
        } catch (e) {
            console.warn('[Cookie Consent] Failed to read geo cache:', e);
        }

        // Cache miss or expired - fetch from API
        try {
            console.log('[Cookie Consent] Detecting country via country.is API...');
            const response = await fetch('https://api.country.is/', {
                method: 'GET',
                cache: 'no-cache'
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const data = await response.json();
            const countryCode = data.country;

            if (!countryCode) {
                throw new Error('No country code in response');
            }

            // Cache the result
            try {
                sessionStorage.setItem(GEO_CACHE_KEY, JSON.stringify({
                    countryCode: countryCode,
                    timestamp: Date.now()
                }));
                console.log('[Cookie Consent] Country detected:', countryCode);
            } catch (e) {
                console.warn('[Cookie Consent] Failed to cache geo result:', e);
            }

            return GDPR_COUNTRIES.includes(countryCode);

        } catch (error) {
            // If geolocation fails, show banner to be safe
            console.warn('[Cookie Consent] Geolocation failed, showing banner as fallback:', error);
            return true;
        }
    }

    // Get current consent status from localStorage
    function getConsentStatus() {
        return localStorage.getItem(CONSENT_KEY);
    }

    // Save consent status
    function saveConsentStatus(status) {
        localStorage.setItem(CONSENT_KEY, status);

        // Dispatch custom event for analytics/tracking (optional)
        window.dispatchEvent(new CustomEvent('chatwoot-consent-changed', {
            detail: { consent: status }
        }));
    }

    // Load Chatwoot widget
    function loadChatwoot(autoOpen) {
        // Configure Chatwoot settings
        window.chatwootSettings = {
            hideMessageBubble: false,
            position: "right",
            locale: "en"
        };

        // Load Chatwoot SDK
        var BASE_URL = CHATWOOT_CONFIG.baseUrl;
        var g = document.createElement('script');
        var s = document.getElementsByTagName('script')[0];

        g.src = BASE_URL + "/packs/js/sdk.js";
        g.defer = true;
        g.async = true;

        g.onload = function() {
            if (window.chatwootSDK) {
                window.chatwootSDK.run({
                    websiteToken: CHATWOOT_CONFIG.websiteToken,
                    baseUrl: BASE_URL
                });

                // Auto-open widget if requested (e.g., from app with ?consent=chat)
                if (autoOpen) {
                    // Wait for Chatwoot to be ready before opening
                    window.addEventListener('chatwoot:ready', function() {
                        setTimeout(function() {
                            if (window.$chatwoot) {
                                window.$chatwoot.toggle('open');
                            }
                        }, 500);
                    });

                    // Fallback: If chatwoot:ready already fired
                    setTimeout(function() {
                        if (window.$chatwoot) {
                            window.$chatwoot.toggle('open');
                        }
                    }, 1500);
                }
            }
        };

        s.parentNode.insertBefore(g, s);
    }

    // Accept cookies and load Chatwoot
    function acceptCookies(autoOpen) {
        saveConsentStatus('accepted');
        hideCookieBanner();
        loadChatwoot(autoOpen);
    }

    // Reject cookies
    function rejectCookies() {
        saveConsentStatus('rejected');
        hideCookieBanner();
        // Show chat placeholder when cookies are rejected
        showChatPlaceholder();
    }

    // Create cookie banner element using DOM methods (safe from XSS)
    function createBannerElement() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');
        banner.setAttribute('aria-live', 'polite');

        const content = document.createElement('div');
        content.className = 'cookie-banner-content';

        const textDiv = document.createElement('div');
        textDiv.className = 'cookie-banner-text';

        const p1 = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = 'We use cookies for customer support';
        p1.appendChild(strong);

        const p2 = document.createElement('p');
        p2.textContent = 'This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.';

        const link = document.createElement('a');
        link.href = 'https://gitfocus.app/privacy.html';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'View Privacy Policy';

        textDiv.appendChild(p1);
        textDiv.appendChild(p2);
        textDiv.appendChild(link);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'cookie-banner-actions';

        const acceptBtn = document.createElement('button');
        acceptBtn.id = 'cookie-accept';
        acceptBtn.className = 'cookie-btn cookie-btn-accept';
        acceptBtn.setAttribute('aria-label', 'Accept cookies');
        acceptBtn.textContent = 'Accept';

        const rejectBtn = document.createElement('button');
        rejectBtn.id = 'cookie-reject';
        rejectBtn.className = 'cookie-btn cookie-btn-reject';
        rejectBtn.setAttribute('aria-label', 'Reject cookies');
        rejectBtn.textContent = 'Reject';

        actionsDiv.appendChild(acceptBtn);
        actionsDiv.appendChild(rejectBtn);

        content.appendChild(textDiv);
        content.appendChild(actionsDiv);
        banner.appendChild(content);

        return banner;
    }

    // Show cookie consent banner
    function showCookieBanner() {
        // Check if banner already exists
        if (document.getElementById('cookie-consent-banner')) {
            return;
        }

        const banner = createBannerElement();

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            #cookie-consent-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(22, 22, 31, 0.98);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                padding: 1.5rem;
                box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
                z-index: 1000000;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                animation: slideUp 0.3s ease-out;
            }

            [data-theme="light"] #cookie-consent-banner {
                background: rgba(250, 250, 250, 0.98);
                border-top-color: rgba(0, 0, 0, 0.1);
            }

            @keyframes slideUp {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .cookie-banner-content {
                max-width: 1200px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                align-items: center;
                text-align: center;
            }

            .cookie-banner-text {
                color: var(--text-primary, #f0f0f5);
            }

            [data-theme="light"] .cookie-banner-text {
                color: #0a0a0f;
            }

            .cookie-banner-text p {
                margin: 0 0 0.5rem 0;
                font-size: 0.95rem;
                line-height: 1.5;
            }

            .cookie-banner-text strong {
                font-weight: 600;
                font-size: 1.05rem;
            }

            .cookie-banner-text a {
                color: var(--purple-light, #818cf8);
                text-decoration: underline;
                font-size: 0.9rem;
                transition: color 0.2s;
            }

            .cookie-banner-text a:hover {
                color: #a5b4fc;
            }

            .cookie-banner-actions {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                justify-content: center;
            }

            .cookie-btn {
                padding: 0.75rem 2rem;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 0.95rem;
                cursor: pointer;
                transition: all 0.2s ease;
                min-width: 120px;
            }

            .cookie-btn-accept {
                background: linear-gradient(135deg, #6366f1, #818cf8);
                color: white;
            }

            .cookie-btn-accept:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
            }

            .cookie-btn-reject {
                background: rgba(255, 255, 255, 0.1);
                color: var(--text-primary, #f0f0f5);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            [data-theme="light"] .cookie-btn-reject {
                background: rgba(0, 0, 0, 0.05);
                color: #0a0a0f;
                border-color: rgba(0, 0, 0, 0.1);
            }

            .cookie-btn-reject:hover {
                background: rgba(255, 255, 255, 0.15);
            }

            [data-theme="light"] .cookie-btn-reject:hover {
                background: rgba(0, 0, 0, 0.1);
            }

            @media (min-width: 768px) {
                .cookie-banner-content {
                    flex-direction: row;
                    justify-content: space-between;
                    text-align: left;
                }

                .cookie-banner-text {
                    flex: 1;
                }

                .cookie-banner-actions {
                    flex-shrink: 0;
                }
            }

            @media (max-width: 767px) {
                #cookie-consent-banner {
                    padding: 1rem;
                }

                .cookie-banner-text p {
                    font-size: 0.875rem;
                }

                .cookie-btn {
                    padding: 0.65rem 1.5rem;
                    font-size: 0.875rem;
                    min-width: 100px;
                }
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(banner);

        // Add event listeners
        document.getElementById('cookie-accept').addEventListener('click', function() {
            acceptCookies(false); // Don't auto-open when accepting from banner
        });
        document.getElementById('cookie-reject').addEventListener('click', rejectCookies);
    }

    // Hide cookie banner
    function hideCookieBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.animation = 'slideDown 0.3s ease-out';
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    // Add slideDown animation
    const slideDownStyle = document.createElement('style');
    slideDownStyle.textContent = `
        @keyframes slideDown {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(slideDownStyle);

    // Create chat placeholder element using DOM methods
    function createPlaceholderElements() {
        // Create placeholder button
        const placeholder = document.createElement('button');
        placeholder.id = 'chat-placeholder';
        placeholder.className = 'chat-placeholder show';
        placeholder.setAttribute('aria-label', 'Chat disabled - click to enable cookies');
        placeholder.textContent = '💬';

        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.id = 'chat-placeholder-tooltip';
        tooltip.className = 'chat-placeholder-tooltip';

        const h4 = document.createElement('h4');
        h4.textContent = 'Chat Disabled';

        const p1 = document.createElement('p');
        p1.textContent = 'To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.';

        const p2 = document.createElement('p');
        p2.style.fontSize = '0.85rem';
        p2.style.marginBottom = '1rem';
        const privacyLink = document.createElement('a');
        privacyLink.href = 'https://gitfocus.app/privacy.html';
        privacyLink.target = '_blank';
        privacyLink.rel = 'noopener noreferrer';
        privacyLink.style.color = 'var(--purple-light, #818cf8)';
        privacyLink.style.textDecoration = 'underline';
        privacyLink.textContent = 'View Privacy Policy';
        p2.appendChild(privacyLink);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'tooltip-actions';

        const enableBtn = document.createElement('button');
        enableBtn.className = 'btn-enable';
        enableBtn.textContent = 'Enable Cookies';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'btn-close';
        closeBtn.textContent = 'Close';

        actionsDiv.appendChild(enableBtn);
        actionsDiv.appendChild(closeBtn);

        tooltip.appendChild(h4);
        tooltip.appendChild(p1);
        tooltip.appendChild(p2);
        tooltip.appendChild(actionsDiv);

        return { placeholder, tooltip };
    }

    // Show chat placeholder (when cookies rejected)
    function showChatPlaceholder() {
        // Check if placeholder already exists
        if (document.getElementById('chat-placeholder')) {
            document.getElementById('chat-placeholder').classList.add('show');
            return;
        }

        const { placeholder, tooltip } = createPlaceholderElements();

        // Add styles for placeholder
        const placeholderStyle = document.createElement('style');
        placeholderStyle.textContent = `
            .chat-placeholder {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #6366f1, #818cf8);
                border: none;
                cursor: pointer;
                font-size: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
                opacity: 0;
                transform: scale(0.8);
                transition: all 0.3s ease;
                z-index: 999999;
            }

            .chat-placeholder.show {
                opacity: 1;
                transform: scale(1);
            }

            .chat-placeholder:hover {
                transform: scale(1.1);
            }

            .chat-placeholder-tooltip {
                position: fixed;
                bottom: 90px;
                right: 20px;
                width: 300px;
                background: rgba(22, 22, 31, 0.98);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 16px;
                padding: 1.5rem;
                opacity: 0;
                visibility: hidden;
                transform: translateY(10px);
                transition: all 0.3s ease;
                z-index: 999999;
                color: var(--text-primary, #f0f0f5);
            }

            [data-theme="light"] .chat-placeholder-tooltip {
                background: rgba(255, 255, 255, 0.98);
                border-color: rgba(0, 0, 0, 0.1);
                color: #0a0a0f;
            }

            .chat-placeholder-tooltip.show {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }

            .chat-placeholder-tooltip h4 {
                margin: 0 0 0.5rem 0;
                font-size: 1.1rem;
                font-weight: 600;
            }

            .chat-placeholder-tooltip p {
                margin: 0 0 1rem 0;
                font-size: 0.9rem;
                color: var(--text-secondary, #a0a0b0);
                line-height: 1.5;
            }

            [data-theme="light"] .chat-placeholder-tooltip p {
                color: #505060;
            }

            .tooltip-actions {
                display: flex;
                gap: 0.5rem;
            }

            .tooltip-actions button {
                flex: 1;
                padding: 0.5rem 1rem;
                border-radius: 8px;
                font-size: 0.85rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .tooltip-actions .btn-enable {
                background: linear-gradient(135deg, #6366f1, #818cf8);
                color: white;
                border: none;
            }

            .tooltip-actions .btn-enable:hover {
                box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
            }

            .tooltip-actions .btn-close {
                background: transparent;
                color: var(--text-secondary, #a0a0b0);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            [data-theme="light"] .tooltip-actions .btn-close {
                border-color: rgba(0, 0, 0, 0.1);
                color: #505060;
            }

            .tooltip-actions .btn-close:hover {
                background: rgba(255, 255, 255, 0.1);
            }
        `;

        document.head.appendChild(placeholderStyle);
        document.body.appendChild(placeholder);
        document.body.appendChild(tooltip);

        // Show tooltip on placeholder click
        placeholder.addEventListener('click', function() {
            tooltip.classList.toggle('show');
        });

        // Enable cookies button
        tooltip.querySelector('.btn-enable').addEventListener('click', function() {
            tooltip.classList.remove('show');
            hideChatPlaceholder();
            acceptCookies(false);
        });

        // Close tooltip button
        tooltip.querySelector('.btn-close').addEventListener('click', function() {
            tooltip.classList.remove('show');
        });

        // Close tooltip when clicking outside
        document.addEventListener('click', function(e) {
            if (!placeholder.contains(e.target) && !tooltip.contains(e.target)) {
                tooltip.classList.remove('show');
            }
        });
    }

    // Hide chat placeholder
    function hideChatPlaceholder() {
        const placeholder = document.getElementById('chat-placeholder');
        const tooltip = document.getElementById('chat-placeholder-tooltip');

        if (placeholder) {
            placeholder.classList.remove('show');
            setTimeout(() => placeholder.remove(), 300);
        }

        if (tooltip) {
            tooltip.classList.remove('show');
            setTimeout(() => tooltip.remove(), 300);
        }
    }

    // Initialize on DOM ready
    async function init() {
        // Check if URL has consent=chat parameter (from app)
        const urlParams = new URLSearchParams(window.location.search);
        const hasConsentParam = urlParams.get('consent') === 'chat';
        const isAppUserAgent = navigator.userAgent.includes('GitFocus/');

        // If coming from app (URL param or user agent), ALWAYS auto-open
        if (hasConsentParam || isAppUserAgent) {
            saveConsentStatus('accepted');
            loadChatwoot(true); // ALWAYS auto-open when from app
            return;
        }

        // Regular website visitor flow
        const consentStatus = getConsentStatus();

        if (consentStatus === 'accepted') {
            // User previously accepted, load Chatwoot (don't auto-open)
            loadChatwoot(false);
        } else if (consentStatus === 'rejected') {
            // User previously rejected, show chat placeholder
            showChatPlaceholder();
        } else {
            // No consent decision yet - check if user needs to see banner
            const needsConsent = await isInGDPRRegion();

            if (needsConsent) {
                // User is in GDPR region (or geo-check failed) - show banner
                showCookieBanner();
            } else {
                // User is NOT in GDPR region - auto-accept and load Chatwoot
                console.log('[Cookie Consent] Non-GDPR region detected, auto-accepting');
                saveConsentStatus('accepted');
                loadChatwoot(false);
            }
        }
    }

    // Export functions for manual control (optional)
    window.ChatwootConsent = {
        accept: acceptCookies,
        reject: rejectCookies,
        reset: function() {
            localStorage.removeItem(CONSENT_KEY);
            location.reload();
        },
        getStatus: getConsentStatus,
        // Geo-targeting utilities
        clearGeoCache: function() {
            sessionStorage.removeItem(GEO_CACHE_KEY);
            console.log('[Cookie Consent] Geo cache cleared');
        },
        checkGeoCache: function() {
            const cached = sessionStorage.getItem(GEO_CACHE_KEY);
            if (cached) {
                const data = JSON.parse(cached);
                const age = Date.now() - data.timestamp;
                const ageMinutes = Math.floor(age / (60 * 1000));
                console.log('[Cookie Consent] Cached country: ' + data.countryCode + ' (' + ageMinutes + 'm old)');
                return data;
            } else {
                console.log('[Cookie Consent] No geo cache found');
                return null;
            }
        }
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
