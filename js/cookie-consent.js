// Cookie Consent Management for GitFocus
// Handles GDPR-compliant cookie consent for Chatwoot live chat

(function() {
    'use strict';

    // Banner/chat UI translations, keyed by the page's <html lang> value.
    // The block between the i18n markers is GENERATED from the site's
    // translation maps (scratch tooling, see gitfocus-site derive notes).
    /* i18n:start */
    const I18N = {
        "__dirs": [
            "de",
            "es",
            "fr",
            "it",
            "nl",
            "pt-br",
            "sk",
            "sr-latn",
            "el",
            "ru",
            "sr",
            "uk",
            "ar",
            "ja",
            "zh",
            "ko"
        ],
        "de-DE": {
            "Cookie consent": "Cookie-Zustimmung",
            "We use cookies for customer support": "Wir verwenden Cookies für den Kundensupport",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Diese Website verwendet Chatwoot (einen Drittanbieter-Dienst) für Live-Chat-Support. Cookies helfen dabei, deine Chat-Sitzung über Besuche hinweg aufrechtzuerhalten, ohne dass eine E-Mail-Adresse geteilt werden muss.",
            "View Privacy Policy": "Datenschutzerklärung ansehen",
            "Accept cookies": "Cookies akzeptieren",
            "Accept": "Akzeptieren",
            "Reject cookies": "Cookies ablehnen",
            "Reject": "Ablehnen",
            "Chat disabled - click to enable cookies": "Chat deaktiviert - klicke, um Cookies zu aktivieren",
            "Chat Disabled": "Chat deaktiviert",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Um unseren Live-Chat-Support zu nutzen, musst du Cookies aktivieren. Dies ermöglicht es uns, deine Chat-Sitzung aufrechtzuerhalten.",
            "Enable Cookies": "Cookies aktivieren",
            "Close": "Schließen"
        },
        "es-ES": {
            "Cookie consent": "Consentimiento de cookies",
            "We use cookies for customer support": "Utilizamos cookies para soporte al cliente",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Este sitio web utiliza Chatwoot (un servicio de terceros) para soporte de chat en vivo. Las cookies ayudan a mantener tu sesión de chat entre visitas sin necesidad de compartir una dirección de correo electrónico.",
            "View Privacy Policy": "Ver Política de Privacidad",
            "Accept cookies": "Aceptar cookies",
            "Accept": "Aceptar",
            "Reject cookies": "Rechazar cookies",
            "Reject": "Rechazar",
            "Chat disabled - click to enable cookies": "Chat desactivado - haz clic para habilitar cookies",
            "Chat Disabled": "Chat Desactivado",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Para usar nuestro soporte de chat en vivo, necesitas habilitar cookies. Esto nos permite mantener tu sesión de chat.",
            "Enable Cookies": "Habilitar Cookies",
            "Close": "Cerrar"
        },
        "fr-FR": {
            "Cookie consent": "Consentement aux cookies",
            "We use cookies for customer support": "Nous utilisons des cookies pour le support client",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Ce site web utilise Chatwoot (un service tiers) pour le support par chat en direct. Les cookies aident à maintenir ta session de chat entre les visites sans avoir besoin de partager une adresse e-mail.",
            "View Privacy Policy": "Voir la politique de confidentialité",
            "Accept cookies": "Accepter les cookies",
            "Accept": "Accepter",
            "Reject cookies": "Refuser les cookies",
            "Reject": "Refuser",
            "Chat disabled - click to enable cookies": "Chat désactivé - clique pour activer les cookies",
            "Chat Disabled": "Chat désactivé",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Pour utiliser notre support par chat en direct, tu dois activer les cookies. Cela nous permet de maintenir ta session de chat.",
            "Enable Cookies": "Activer les cookies",
            "Close": "Fermer"
        },
        "it": {
            "Cookie consent": "Consenso cookie",
            "We use cookies for customer support": "Utilizziamo i cookie per il supporto clienti",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Questo sito web utilizza Chatwoot (un servizio di terze parti) per il supporto tramite chat live. I cookie aiutano a mantenere la tua sessione di chat tra le visite senza la necessità di condividere un indirizzo email.",
            "View Privacy Policy": "Visualizza informativa sulla privacy",
            "Accept cookies": "Accetta i cookie",
            "Accept": "Accetta",
            "Reject cookies": "Rifiuta i cookie",
            "Reject": "Rifiuta",
            "Chat disabled - click to enable cookies": "Chat disabilitata - clicca per abilitare i cookie",
            "Chat Disabled": "Chat disabilitata",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Per utilizzare il nostro supporto tramite chat live, devi abilitare i cookie. Questo ci consente di mantenere la tua sessione di chat.",
            "Enable Cookies": "Abilita cookie",
            "Close": "Chiudi"
        },
        "nl-NL": {
            "Cookie consent": "Cookie-toestemming",
            "We use cookies for customer support": "We gebruiken cookies voor klantenservice",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Deze website gebruikt Chatwoot (een dienst van derden) voor livechatsupport. Cookies helpen je chatsessie tussen bezoeken te behouden zonder dat je een e-mailadres hoeft te delen.",
            "View Privacy Policy": "Bekijk privacybeleid",
            "Accept cookies": "Cookies accepteren",
            "Accept": "Accepteren",
            "Reject cookies": "Cookies weigeren",
            "Reject": "Weigeren",
            "Chat disabled - click to enable cookies": "Chat uitgeschakeld - klik om cookies in te schakelen",
            "Chat Disabled": "Chat uitgeschakeld",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Om onze livechatsupport te gebruiken, moet je cookies inschakelen. Dit stelt ons in staat om je chatsessie te behouden.",
            "Enable Cookies": "Cookies inschakelen",
            "Close": "Sluiten"
        },
        "pt-BR": {
            "Cookie consent": "Consentimento de cookies",
            "We use cookies for customer support": "Usamos cookies para suporte ao cliente",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Este site usa Chatwoot (um serviço de terceiros) para suporte de chat ao vivo. Os cookies ajudam a manter sua sessão de chat entre visitas sem a necessidade de compartilhar um endereço de e-mail.",
            "View Privacy Policy": "Ver Política de Privacidade",
            "Accept cookies": "Aceitar cookies",
            "Accept": "Aceitar",
            "Reject cookies": "Rejeitar cookies",
            "Reject": "Rejeitar",
            "Chat disabled - click to enable cookies": "Chat desativado - clique para habilitar cookies",
            "Chat Disabled": "Chat Desativado",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Para usar nosso suporte de chat ao vivo, você precisa habilitar cookies. Isso nos permite manter sua sessão de chat.",
            "Enable Cookies": "Habilitar Cookies",
            "Close": "Fechar"
        },
        "sk": {
            "Cookie consent": "Súhlas s cookies\\",
            "We use cookies for customer support": "Používame cookies na zákaznícku podporu\\",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Táto webová stránka používa Chatwoot (službu tretej strany) na podporu živého chatu. Cookies pomáhajú udržiavať vašu chatovaciu reláciu medzi návštevami bez potreby zdieľania e-mailovej adresy.\\",
            "View Privacy Policy": "Zobraziť zásady ochrany osobných údajov\\",
            "Accept cookies": "Prijať cookies\\",
            "Accept": "Prijať\\",
            "Reject cookies": "Odmietnuť cookies\\",
            "Reject": "Odmietnuť\\",
            "Chat disabled - click to enable cookies": "Chat zakázaný - kliknite pre povolenie cookies\\",
            "Chat Disabled": "Chat zakázaný\\",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Ak chcete používať našu podporu živého chatu, musíte povoliť cookies. To nám umožňuje udržiavať vašu chatovaciu reláciu.\\",
            "Enable Cookies": "Povoliť cookies\\",
            "Close": "Zavrieť\\"
        },
        "sr-Latn": {
            "Cookie consent": "Saglasnost za cookies",
            "We use cookies for customer support": "Koristimo cookies za korisničku podršku",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Ovaj veb-sajt koristi Chatwoot (servis treće strane) za podršku preko četa. Cookies pomažu da se održi vaša čet sesija između poseta bez potrebe za deljenjem adrese e-pošte.",
            "View Privacy Policy": "Pogledaj politiku privatnosti",
            "Accept cookies": "Prihvati cookies",
            "Accept": "Prihvati",
            "Reject cookies": "Odbij cookies",
            "Reject": "Odbij",
            "Chat disabled - click to enable cookies": "Čet je onemogućen - kliknite da omogućite cookies",
            "Chat Disabled": "Čet onemogućen",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Da biste koristili našu podršku preko četa, treba da omogućite cookies. Ovo nam omogućava da održimo vašu čet sesiju.",
            "Enable Cookies": "Omogući cookies",
            "Close": "Zatvori"
        },
        "el": {
            "Cookie consent": "Συγκατάθεση cookies",
            "We use cookies for customer support": "Χρησιμοποιούμε cookies για υποστήριξη πελατών",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Αυτός ο ιστότοπος χρησιμοποιεί το Chatwoot (υπηρεσία τρίτου μέρους) για υποστήριξη ζωντανής συνομιλίας. Τα cookies βοηθούν στη διατήρηση της συνεδρίας συνομιλίας σας μεταξύ επισκέψεων χωρίς την ανάγκη κοινοποίησης διεύθυνσης email.",
            "View Privacy Policy": "Προβολή Πολιτικής Απορρήτου",
            "Accept cookies": "Αποδοχή cookies",
            "Accept": "Αποδοχή",
            "Reject cookies": "Απόρριψη cookies",
            "Reject": "Απόρριψη",
            "Chat disabled - click to enable cookies": "Συνομιλία απενεργοποιημένη - κάντε κλικ για ενεργοποίηση cookies",
            "Chat Disabled": "Συνομιλία Απενεργοποιημένη",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Για να χρησιμοποιήσετε την υποστήριξη ζωντανής συνομιλίας μας, πρέπει να ενεργοποιήσετε τα cookies. Αυτό μας επιτρέπει να διατηρήσουμε τη συνεδρία συνομιλίας σας.",
            "Enable Cookies": "Ενεργοποίηση Cookies",
            "Close": "Κλείσιμο"
        },
        "ru": {
            "Cookie consent": "Согласие на использование cookies",
            "We use cookies for customer support": "Мы используем cookies для поддержки клиентов",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Этот веб-сайт использует Chatwoot (сторонний сервис) для поддержки через онлайн-чат. Cookies помогают поддерживать сеанс чата между посещениями без необходимости указывать адрес электронной почты.",
            "View Privacy Policy": "Просмотреть политику конфиденциальности",
            "Accept cookies": "Принять cookies",
            "Accept": "Принять",
            "Reject cookies": "Отклонить cookies",
            "Reject": "Отклонить",
            "Chat disabled - click to enable cookies": "Чат отключен - нажмите, чтобы включить cookies",
            "Chat Disabled": "Чат отключен",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Чтобы использовать нашу поддержку через онлайн-чат, вам необходимо включить cookies. Это позволяет нам поддерживать ваш сеанс чата.",
            "Enable Cookies": "Включить cookies",
            "Close": "Закрыть"
        },
        "sr": {
            "Cookie consent": "Сагласност за cookies",
            "We use cookies for customer support": "Користимо cookies за корисничку подршку",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Овај веб-сајт користи Chatwoot (сервис треће стране) за подршку преко чета. Cookies помажу да се одржи ваша чет сесија између посета без потребе за дељењем адресе е-поште.",
            "View Privacy Policy": "Погледај политику приватности",
            "Accept cookies": "Прихвати cookies",
            "Accept": "Прихвати",
            "Reject cookies": "Одбиј cookies",
            "Reject": "Одбиј",
            "Chat disabled - click to enable cookies": "Чет је онемогућен - кликните да омогућите cookies",
            "Chat Disabled": "Чет онемогућен",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Да бисте користили нашу подршку преко чета, треба да омогућите cookies. Ово нам омогућава да одржимо вашу чет сесију.",
            "Enable Cookies": "Омогући cookies",
            "Close": "Затвори"
        },
        "uk": {
            "Cookie consent": "Згода на використання cookies",
            "We use cookies for customer support": "Ми використовуємо cookies для підтримки клієнтів",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "Цей веб-сайт використовує Chatwoot (сторонній сервіс) для підтримки через онлайн-чат. Cookies допомагають підтримувати сеанс чату між відвідуваннями без необхідності вказувати адресу електронної пошти.",
            "View Privacy Policy": "Переглянути політику конфіденційності",
            "Accept cookies": "Прийняти cookies",
            "Accept": "Прийняти",
            "Reject cookies": "Відхилити cookies",
            "Reject": "Відхилити",
            "Chat disabled - click to enable cookies": "Чат вимкнено - натисніть, щоб увімкнути cookies",
            "Chat Disabled": "Чат вимкнено",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "Щоб використовувати нашу підтримку через онлайн-чат, вам потрібно увімкнути cookies. Це дозволяє нам підтримувати ваш сеанс чату.",
            "Enable Cookies": "Увімкнути cookies",
            "Close": "Закрити"
        },
        "ar-SA": {
            "Cookie consent": "موافقة ملفات تعريف الارتباط",
            "We use cookies for customer support": "نستخدم ملفات تعريف الارتباط لدعم العملاء",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "يستخدم هذا الموقع Chatwoot (خدمة طرف ثالث) لدعم الدردشة المباشرة. تساعد ملفات تعريف الارتباط في الحفاظ على جلسة الدردشة عبر الزيارات دون الحاجة لمشاركة عنوان بريد إلكتروني.",
            "View Privacy Policy": "عرض سياسة الخصوصية",
            "Accept cookies": "قبول ملفات تعريف الارتباط",
            "Accept": "قبول",
            "Reject cookies": "رفض ملفات تعريف الارتباط",
            "Reject": "رفض",
            "Chat disabled - click to enable cookies": "الدردشة معطلة - انقر لتمكين ملفات تعريف الارتباط",
            "Chat Disabled": "الدردشة معطلة",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "لاستخدام دعم الدردشة المباشرة، تحتاج إلى تمكين ملفات تعريف الارتباط. هذا يسمح لنا بالحفاظ على جلسة الدردشة الخاصة بك.",
            "Enable Cookies": "تمكين ملفات تعريف الارتباط",
            "Close": "إغلاق"
        },
        "ja": {
            "Cookie consent": "クッキー同意",
            "We use cookies for customer support": "カスタマーサポートのためにクッキーを使用します",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "このウェブサイトは、ライブチャットサポートのためにChatwoot（サードパーティサービス）を使用しています。クッキーは、メールアドレスを共有する必要なく、訪問間でチャットセッションを維持するのに役立ちます。",
            "View Privacy Policy": "プライバシーポリシーを表示",
            "Accept cookies": "クッキーを受け入れる",
            "Accept": "受け入れる",
            "Reject cookies": "クッキーを拒否",
            "Reject": "拒否",
            "Chat disabled - click to enable cookies": "チャット無効 - クリックしてクッキーを有効にする",
            "Chat Disabled": "チャット無効",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "ライブチャットサポートを使用するには、クッキーを有効にする必要があります。これにより、チャットセッションを維持できます。",
            "Enable Cookies": "クッキーを有効にする",
            "Close": "閉じる"
        },
        "zh-Hans": {
            "Cookie consent": "Cookie 同意",
            "We use cookies for customer support": "我们使用 cookie 提供客户支持",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "本网站使用 Chatwoot（第三方服务）提供在线聊天支持。Cookie 有助于在访问之间维护您的聊天会话，而无需共享电子邮件地址。",
            "View Privacy Policy": "查看隐私政策",
            "Accept cookies": "接受 cookie",
            "Accept": "接受",
            "Reject cookies": "拒绝 cookie",
            "Reject": "拒绝",
            "Chat disabled - click to enable cookies": "聊天已禁用 - 点击以启用 cookie",
            "Chat Disabled": "聊天已禁用",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "要使用我们的在线聊天支持，您需要启用 cookie。这使我们能够维护您的聊天会话。",
            "Enable Cookies": "启用 Cookie",
            "Close": "关闭"
        },
        "ko": {
            "Cookie consent": "쿠키 동의",
            "We use cookies for customer support": "고객 지원을 위해 쿠키를 사용합니다",
            "This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.": "이 웹사이트는 실시간 채팅 지원을 위해 Chatwoot (타사 서비스)를 사용합니다. 쿠키는 이메일 주소를 공유할 필요 없이 방문 간 채팅 세션을 유지하는 데 도움이 됩니다.",
            "View Privacy Policy": "개인정보 보호정책 보기",
            "Accept cookies": "쿠키 수락",
            "Accept": "수락",
            "Reject cookies": "쿠키 거부",
            "Reject": "거부",
            "Chat disabled - click to enable cookies": "채팅 비활성화 - 클릭하여 쿠키 활성화",
            "Chat Disabled": "채팅 비활성화",
            "To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.": "실시간 채팅 지원을 사용하려면 쿠키를 활성화해야 합니다. 이를 통해 채팅 세션을 유지할 수 있습니다.",
            "Enable Cookies": "쿠키 활성화",
            "Close": "닫기"
        }
    };
    /* i18n:end */
    function t(s) {
        const lang = document.documentElement.getAttribute('lang') || 'en-US';
        return (I18N[lang] || {})[s] || s;
    }
    // Localized pages live in /<dir>/; the privacy link follows the page's locale.
    function privacyHref() {
        const seg = window.location.pathname.split('/')[1];
        const dirs = I18N.__dirs || [];
        return dirs.indexOf(seg) >= 0 ? '/' + seg + '/privacy.html' : '/privacy.html';
    }

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
        banner.setAttribute('aria-label', t('Cookie consent'));
        banner.setAttribute('aria-live', 'polite');

        const content = document.createElement('div');
        content.className = 'cookie-banner-content';

        const textDiv = document.createElement('div');
        textDiv.className = 'cookie-banner-text';

        const p1 = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = t('We use cookies for customer support');
        p1.appendChild(strong);

        const p2 = document.createElement('p');
        p2.textContent = t('This website uses Chatwoot (a third-party service) for live chat support. Cookies help maintain your chat session across visits without the need for sharing an email address.');

        const link = document.createElement('a');
        link.href = privacyHref();
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = t('View Privacy Policy');

        textDiv.appendChild(p1);
        textDiv.appendChild(p2);
        textDiv.appendChild(link);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'cookie-banner-actions';

        const acceptBtn = document.createElement('button');
        acceptBtn.id = 'cookie-accept';
        acceptBtn.className = 'cookie-btn cookie-btn-accept';
        acceptBtn.setAttribute('aria-label', t('Accept cookies'));
        acceptBtn.textContent = t('Accept');

        const rejectBtn = document.createElement('button');
        rejectBtn.id = 'cookie-reject';
        rejectBtn.className = 'cookie-btn cookie-btn-reject';
        rejectBtn.setAttribute('aria-label', t('Reject cookies'));
        rejectBtn.textContent = t('Reject');

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
        placeholder.setAttribute('aria-label', t('Chat disabled - click to enable cookies'));
        placeholder.textContent = '💬';

        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.id = 'chat-placeholder-tooltip';
        tooltip.className = 'chat-placeholder-tooltip';

        const h4 = document.createElement('h4');
        h4.textContent = t('Chat Disabled');

        const p1 = document.createElement('p');
        p1.textContent = t('To use our live chat support, you need to enable cookies. This allows us to maintain your chat session.');

        const p2 = document.createElement('p');
        p2.style.fontSize = '0.85rem';
        p2.style.marginBottom = '1rem';
        const privacyLink = document.createElement('a');
        privacyLink.href = privacyHref();
        privacyLink.target = '_blank';
        privacyLink.rel = 'noopener noreferrer';
        privacyLink.style.color = 'var(--purple-light, #818cf8)';
        privacyLink.style.textDecoration = 'underline';
        privacyLink.textContent = t('View Privacy Policy');
        p2.appendChild(privacyLink);

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'tooltip-actions';

        const enableBtn = document.createElement('button');
        enableBtn.className = 'btn-enable';
        enableBtn.textContent = t('Enable Cookies');

        const closeBtn = document.createElement('button');
        closeBtn.className = 'btn-close';
        closeBtn.textContent = t('Close');

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
