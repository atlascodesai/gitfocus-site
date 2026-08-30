// Locale suggestion for GitFocus — client-side, SEO-safe.
//
// Never auto-redirects a first-time visitor: Googlebot crawls from US English,
// and a redirect would hide every translation from the index. Instead we offer
// a dismissible banner in the VISITOR'S language, remember their answer, and
// only jump straight to a previously chosen language on later visits to "/".
(function () {
    'use strict';

    var STORAGE_KEY = 'gf-locale-pref';

    // Site directory -> banner strings, written in that directory's language
    // (the banner speaks to the person who prefers that language).
    var LOCALES = {
        '': { rtl: false, msg: 'This page is also available in English.', btn: 'View in English', close: 'Dismiss' },
        'de': { rtl: false, msg: 'Diese Seite gibt es auch auf Deutsch.', btn: 'Auf Deutsch ansehen', close: 'Schließen' },
        'es': { rtl: false, msg: 'Esta página también está disponible en español.', btn: 'Ver en español', close: 'Cerrar' },
        'fr': { rtl: false, msg: 'Cette page est aussi disponible en français.', btn: 'Voir en français', close: 'Fermer' },
        'it': { rtl: false, msg: 'Questa pagina è disponibile anche in italiano.', btn: 'Vedi in italiano', close: 'Chiudi' },
        'nl': { rtl: false, msg: 'Deze pagina is ook beschikbaar in het Nederlands.', btn: 'Bekijk in het Nederlands', close: 'Sluiten' },
        'pt-br': { rtl: false, msg: 'Esta página também está disponível em português.', btn: 'Ver em português', close: 'Fechar' },
        'sk': { rtl: false, msg: 'Táto stránka je dostupná aj v slovenčine.', btn: 'Zobraziť v slovenčine', close: 'Zavrieť' },
        'sr': { rtl: false, msg: 'Ова страница је доступна и на српском.', btn: 'Прикажи на српском', close: 'Затвори' },
        'sr-latn': { rtl: false, msg: 'Ova stranica je dostupna i na srpskom.', btn: 'Prikaži na srpskom', close: 'Zatvori' },
        'el': { rtl: false, msg: 'Αυτή η σελίδα είναι διαθέσιμη και στα Ελληνικά.', btn: 'Προβολή στα Ελληνικά', close: 'Κλείσιμο' },
        'ru': { rtl: false, msg: 'Эта страница также доступна на русском.', btn: 'Смотреть на русском', close: 'Закрыть' },
        'uk': { rtl: false, msg: 'Ця сторінка також доступна українською.', btn: 'Переглянути українською', close: 'Закрити' },
        'ar': { rtl: true, msg: 'هذه الصفحة متوفرة أيضًا بالعربية.', btn: 'عرض بالعربية', close: 'إغلاق' },
        'ja': { rtl: false, msg: 'このページは日本語でもご覧いただけます。', btn: '日本語で表示', close: '閉じる' },
        'ko': { rtl: false, msg: '이 페이지는 한국어로도 제공됩니다.', btn: '한국어로 보기', close: '닫기' },
        'zh': { rtl: false, msg: '本页面也提供中文版。', btn: '查看中文版', close: '关闭' }
    };

    function readPref() {
        try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
        catch (e) { return {}; }
    }
    function writePref(pref) {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(pref)); } catch (e) {}
    }

    // Current locale directory, from the path ('' = English root).
    function pageDir() {
        var seg = window.location.pathname.split('/')[1] || '';
        return Object.prototype.hasOwnProperty.call(LOCALES, seg) && seg !== '' ? seg : '';
    }

    // The same document in another locale. Only pages that exist in every
    // locale are linked; anything else falls back to that locale's home.
    var LOCALIZED_PAGES = ['privacy', 'support', 'accessibility'];
    function pathIn(dir) {
        var parts = window.location.pathname.split('/').filter(Boolean);
        if (parts[0] && Object.prototype.hasOwnProperty.call(LOCALES, parts[0])) parts.shift();
        var page = (parts.join('/') || '').replace(/\.html$/, '');
        if (page === 'index') page = '';
        if (page && LOCALIZED_PAGES.indexOf(page) < 0) page = '';
        return '/' + (dir ? dir + '/' : '') + page;
    }

    // Map the browser's language list onto a site directory, or null.
    function preferredDir() {
        var langs = navigator.languages || [navigator.language || ''];
        for (var i = 0; i < langs.length; i++) {
            var tag = String(langs[i]).toLowerCase();
            if (!tag) continue;
            if (tag.indexOf('en') === 0) return '';
            if (tag.indexOf('sr') === 0) return tag.indexOf('latn') > 0 ? 'sr-latn' : 'sr';
            if (tag.indexOf('pt') === 0) return 'pt-br';
            if (tag.indexOf('zh') === 0) return 'zh';
            var primary = tag.split('-')[0];
            if (Object.prototype.hasOwnProperty.call(LOCALES, primary)) return primary;
        }
        return null;
    }

    // An explicit pick in the language switcher IS the preference.
    function watchSwitcher() {
        document.addEventListener('click', function (e) {
            var a = e.target && e.target.closest && e.target.closest('a.expresslane-lang-item');
            if (!a) return;
            var seg = (a.getAttribute('href') || '').split('/').filter(Boolean)[0] || '';
            if (Object.prototype.hasOwnProperty.call(LOCALES, seg) || seg === '') {
                writePref({ v: 1, choice: seg });
            }
        });
    }

    function showBanner(targetDir) {
        var t = LOCALES[targetDir];
        var banner = document.createElement('div');
        banner.id = 'locale-suggest-banner';
        banner.setAttribute('role', 'region');
        banner.setAttribute('aria-label', t.msg);
        if (t.rtl) banner.setAttribute('dir', 'rtl');

        var style = document.createElement('style');
        style.textContent =
            '#locale-suggest-banner{position:fixed;top:72px;left:50%;transform:translateX(-50%);' +
            'z-index:1100;display:flex;align-items:center;gap:12px;max-width:min(92vw,560px);' +
            'padding:10px 14px;border-radius:12px;border:1px solid var(--border,#3a3a44);' +
            'background:var(--bg-secondary,#1c1c22);color:var(--text-primary,#f4f4f6);' +
            'box-shadow:0 12px 32px rgba(0,0,0,.35);font-size:.9rem}' +
            '#locale-suggest-banner a{color:inherit;font-weight:600;text-decoration:underline;white-space:nowrap}' +
            '#locale-suggest-banner button{background:none;border:none;cursor:pointer;' +
            'color:var(--text-secondary,#a8a8b3);font-size:1rem;line-height:1;padding:4px}';
        document.head.appendChild(style);

        var msg = document.createElement('span');
        msg.textContent = t.msg;

        var link = document.createElement('a');
        link.href = pathIn(targetDir);
        link.hreflang = targetDir || 'en';
        link.textContent = t.btn;
        link.addEventListener('click', function () {
            writePref({ v: 1, choice: targetDir });
        });

        var close = document.createElement('button');
        close.setAttribute('aria-label', t.close);
        close.textContent = '✕';
        close.addEventListener('click', function () {
            writePref({ v: 1, dismissed: true });
            banner.remove();
        });

        banner.appendChild(msg);
        banner.appendChild(link);
        banner.appendChild(close);
        document.body.appendChild(banner);
    }

    function init() {
        watchSwitcher();
        var here = pageDir();
        var pref = readPref();

        // A returning visitor who chose a language gets taken there — but only
        // from the site root, so deep links and deliberate browsing never warp.
        var path = window.location.pathname;
        if ((path === '/' || path === '/index.html')
            && typeof pref.choice === 'string' && pref.choice !== '' && pref.choice !== here
            && Object.prototype.hasOwnProperty.call(LOCALES, pref.choice)) {
            window.location.replace(pathIn(pref.choice));
            return;
        }

        if (pref.dismissed || typeof pref.choice === 'string') return;
        var want = preferredDir();
        if (want === null || want === here) return;
        showBanner(want);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
