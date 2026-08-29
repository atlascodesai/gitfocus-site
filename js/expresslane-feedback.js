// Expresslane feedback widget — visitor copy suggestions and submissions.
//
// Generated per site: the CONFIG placeholder below is substituted at derive
// time (see FeedbackWidget.swift). Self-contained, no framework, localized
// from the page's lang attribute, RTL via logical properties. Nothing is sent
// silently — submission always finishes in the visitor's own hands (a
// prefilled GitHub issue, POST preview, or mail draft).
//
// The launcher pins PHYSICAL bottom-left, not inline-start: chat widgets
// (Chatwoot included) pin physical bottom-right regardless of direction, so
// a logically-positioned launcher lands exactly on them in RTL. Measured on
// the Arabic GitFocus page, 2026-08-30.
(function () {
    'use strict';

    var CONFIG = {"kind":"github","labels":["copy-suggestion"],"repo":"atlascodesai/gitfocus-site","site":"gitfocus.app"};

    var I18N = {
        'en-US': { chip: '✏️ Suggest a fix', title: 'Suggest a better wording', general: 'Send feedback', selected: 'Selected text', proposal: 'Your suggestion', note: 'Optional note', submit: 'Submit on GitHub', cancel: 'Cancel', publicNote: 'Opens a public GitHub issue prefilled with your suggestion.' },
        'de-DE': { chip: '✏️ Korrektur vorschlagen', title: 'Bessere Formulierung vorschlagen', general: 'Feedback senden', selected: 'Ausgewählter Text', proposal: 'Dein Vorschlag', note: 'Optionale Anmerkung', submit: 'Auf GitHub einreichen', cancel: 'Abbrechen', publicNote: 'Öffnet ein öffentliches GitHub-Issue mit deinem Vorschlag.' },
        'es-ES': { chip: '✏️ Sugerir una corrección', title: 'Sugerir una mejor redacción', general: 'Enviar comentarios', selected: 'Texto seleccionado', proposal: 'Tu sugerencia', note: 'Nota opcional', submit: 'Enviar en GitHub', cancel: 'Cancelar', publicNote: 'Abre un issue público de GitHub con tu sugerencia.' },
        'fr-FR': { chip: '✏️ Suggérer une correction', title: 'Suggérer une meilleure formulation', general: 'Envoyer un retour', selected: 'Texte sélectionné', proposal: 'Ta suggestion', note: 'Note facultative', submit: 'Soumettre sur GitHub', cancel: 'Annuler', publicNote: 'Ouvre une issue GitHub publique préremplie avec ta suggestion.' },
        'it': { chip: '✏️ Suggerisci una correzione', title: 'Suggerisci una formulazione migliore', general: 'Invia feedback', selected: 'Testo selezionato', proposal: 'Il tuo suggerimento', note: 'Nota facoltativa', submit: 'Invia su GitHub', cancel: 'Annulla', publicNote: 'Apre una issue pubblica su GitHub precompilata con il tuo suggerimento.' },
        'nl-NL': { chip: '✏️ Verbetering voorstellen', title: 'Een betere formulering voorstellen', general: 'Feedback sturen', selected: 'Geselecteerde tekst', proposal: 'Je voorstel', note: 'Optionele opmerking', submit: 'Indienen op GitHub', cancel: 'Annuleren', publicNote: 'Opent een openbaar GitHub-issue met je voorstel.' },
        'pt-BR': { chip: '✏️ Sugerir uma correção', title: 'Sugerir uma redação melhor', general: 'Enviar feedback', selected: 'Texto selecionado', proposal: 'Sua sugestão', note: 'Observação opcional', submit: 'Enviar no GitHub', cancel: 'Cancelar', publicNote: 'Abre uma issue pública no GitHub preenchida com sua sugestão.' },
        'sk': { chip: '✏️ Navrhnúť opravu', title: 'Navrhnúť lepšie znenie', general: 'Poslať spätnú väzbu', selected: 'Vybraný text', proposal: 'Tvoj návrh', note: 'Voliteľná poznámka', submit: 'Odoslať na GitHube', cancel: 'Zrušiť', publicNote: 'Otvorí verejné GitHub issue predvyplnené tvojím návrhom.' },
        'sr': { chip: '✏️ Предложи исправку', title: 'Предложи бољу формулацију', general: 'Пошаљи повратне информације', selected: 'Изабрани текст', proposal: 'Твој предлог', note: 'Напомена (необавезно)', submit: 'Пошаљи на GitHub-у', cancel: 'Откажи', publicNote: 'Отвара јавни GitHub issue са твојим предлогом.' },
        'sr-Latn': { chip: '✏️ Predloži ispravku', title: 'Predloži bolju formulaciju', general: 'Pošalji povratne informacije', selected: 'Izabrani tekst', proposal: 'Tvoj predlog', note: 'Napomena (neobavezno)', submit: 'Pošalji na GitHub-u', cancel: 'Otkaži', publicNote: 'Otvara javni GitHub issue sa tvojim predlogom.' },
        'el': { chip: '✏️ Πρότεινε μια διόρθωση', title: 'Πρότεινε καλύτερη διατύπωση', general: 'Στείλε σχόλια', selected: 'Επιλεγμένο κείμενο', proposal: 'Η πρότασή σου', note: 'Προαιρετική σημείωση', submit: 'Υποβολή στο GitHub', cancel: 'Άκυρο', publicNote: 'Ανοίγει ένα δημόσιο GitHub issue συμπληρωμένο με την πρότασή σου.' },
        'ru': { chip: '✏️ Предложить правку', title: 'Предложить формулировку получше', general: 'Отправить отзыв', selected: 'Выделенный текст', proposal: 'Ваше предложение', note: 'Заметка (необязательно)', submit: 'Отправить на GitHub', cancel: 'Отмена', publicNote: 'Откроется публичный GitHub issue с вашим предложением.' },
        'uk': { chip: '✏️ Запропонувати виправлення', title: 'Запропонувати краще формулювання', general: 'Надіслати відгук', selected: 'Виділений текст', proposal: 'Ваша пропозиція', note: 'Примітка (необов’язково)', submit: 'Надіслати на GitHub', cancel: 'Скасувати', publicNote: 'Відкриє публічний GitHub issue з вашою пропозицією.' },
        'ar-SA': { chip: '✏️ اقترح تصحيحًا', title: 'اقترح صياغة أفضل', general: 'أرسل ملاحظاتك', selected: 'النص المحدد', proposal: 'اقتراحك', note: 'ملاحظة اختيارية', submit: 'إرسال على GitHub', cancel: 'إلغاء', publicNote: 'يفتح مشكلة GitHub عامة معبأة مسبقًا باقتراحك.' },
        'ja': { chip: '✏️ 修正を提案', title: 'より良い表現を提案', general: 'フィードバックを送る', selected: '選択されたテキスト', proposal: 'あなたの提案', note: '補足（任意）', submit: 'GitHubで送信', cancel: 'キャンセル', publicNote: '提案が入力された公開GitHub issueが開きます。' },
        'ko': { chip: '✏️ 수정 제안', title: '더 나은 표현 제안하기', general: '피드백 보내기', selected: '선택한 텍스트', proposal: '제안 내용', note: '메모 (선택)', submit: 'GitHub에 제출', cancel: '취소', publicNote: '제안이 미리 입력된 공개 GitHub 이슈가 열립니다.' },
        'zh-Hans': { chip: '✏️ 提出修改建议', title: '建议更好的表述', general: '发送反馈', selected: '选中的文本', proposal: '你的建议', note: '备注（可选）', submit: '在 GitHub 上提交', cancel: '取消', publicNote: '将打开一个已填好建议内容的公开 GitHub issue。' }
    };

    function t() {
        var lang = document.documentElement.getAttribute('lang') || 'en-US';
        if (I18N[lang]) return I18N[lang];
        var primary = lang.split('-')[0].toLowerCase();
        var keys = Object.keys(I18N);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i].split('-')[0].toLowerCase() === primary) return I18N[keys[i]];
        }
        return I18N['en-US'];
    }

    var S = t();
    var MAX_QUOTE = 300;

    function issueURL(original, proposal, note) {
        var locale = document.documentElement.getAttribute('lang') || 'en-US';
        var page = window.location.pathname;
        var kind = original ? 'copy' : 'general';
        var title = (kind === 'copy' ? 'Copy suggestion: ' : 'Feedback: ')
            + page + ' (' + locale + ')';
        var body =
            (original ? '**Original**\n\n> ' + original + '\n\n' : '')
            + '**Suggestion**\n\n' + proposal + '\n\n'
            + (note ? '**Note**\n\n' + note + '\n\n' : '')
            + '---\n<!-- expresslane:suggestion\nsite: ' + CONFIG.site
            + '\npage: ' + page + '\nlocale: ' + locale + '\nkind: ' + kind + '\n-->\n';
        var url = 'https://github.com/' + CONFIG.repo + '/issues/new'
            + '?title=' + encodeURIComponent(title)
            + '&body=' + encodeURIComponent(body);
        if (CONFIG.labels && CONFIG.labels.length) {
            url += '&labels=' + encodeURIComponent(CONFIG.labels.join(','));
        }
        return url;
    }

    var style = document.createElement('style');
    style.textContent =
        '#xl-fb-chip{position:absolute;z-index:1300;padding:6px 12px;border-radius:999px;' +
        'border:1px solid var(--border,#3a3a44);background:var(--bg-secondary,#1c1c22);' +
        'color:var(--text-primary,#f4f4f6);font-size:.8rem;cursor:pointer;' +
        'box-shadow:0 8px 24px rgba(0,0,0,.35);white-space:nowrap}' +
        '#xl-fb-launcher{position:fixed;bottom:18px;left:18px;z-index:1200;' +
        'width:40px;height:40px;border-radius:50%;border:1px solid var(--border,#3a3a44);' +
        'background:var(--bg-secondary,#1c1c22);color:var(--text-primary,#f4f4f6);' +
        'font-size:1rem;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.3)}' +
        '#xl-fb-dialog{margin:auto;border:1px solid var(--border,#3a3a44);border-radius:14px;padding:20px;' +
        'background:var(--bg-primary,#131318);color:var(--text-primary,#f4f4f6);' +
        'max-width:min(92vw,480px);width:100%}' +
        '#xl-fb-dialog::backdrop{background:rgba(0,0,0,.5)}' +
        '#xl-fb-dialog h3{margin:0 0 12px;font-size:1.05rem}' +
        '#xl-fb-dialog label{display:block;font-size:.8rem;margin:10px 0 4px;color:var(--text-secondary,#a8a8b3)}' +
        '#xl-fb-dialog blockquote{margin:0;padding:8px 10px;border-inline-start:3px solid var(--border,#3a3a44);' +
        'font-size:.85rem;color:var(--text-secondary,#a8a8b3);max-height:90px;overflow:auto}' +
        '#xl-fb-dialog textarea,#xl-fb-dialog input{width:100%;box-sizing:border-box;padding:8px;' +
        'border-radius:8px;border:1px solid var(--border,#3a3a44);background:var(--bg-secondary,#1c1c22);' +
        'color:inherit;font:inherit;font-size:.9rem}' +
        '#xl-fb-dialog .xl-fb-public{font-size:.75rem;color:var(--text-secondary,#a8a8b3);margin-top:10px}' +
        '#xl-fb-dialog .xl-fb-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:14px}' +
        '#xl-fb-dialog button{padding:8px 14px;border-radius:8px;border:1px solid var(--border,#3a3a44);' +
        'cursor:pointer;font-size:.85rem;background:var(--bg-secondary,#1c1c22);color:inherit}' +
        '#xl-fb-dialog button[type=submit]{background:#6366f1;border-color:#6366f1;color:#fff}';
    document.head.appendChild(style);

    var dialog = document.createElement('dialog');
    dialog.id = 'xl-fb-dialog';
    var quoted = '';

    function openDialog(original) {
        quoted = original || '';
        dialog.replaceChildren();
        var h = document.createElement('h3');
        h.textContent = original ? S.title : S.general;
        var form = document.createElement('form');
        form.method = 'dialog';
        if (original) {
            var ql = document.createElement('label');
            ql.textContent = S.selected;
            var bq = document.createElement('blockquote');
            bq.textContent = original;
            form.appendChild(ql);
            form.appendChild(bq);
        }
        var pl = document.createElement('label');
        pl.textContent = S.proposal;
        var ta = document.createElement('textarea');
        ta.rows = 3;
        ta.required = true;
        var nl = document.createElement('label');
        nl.textContent = S.note;
        var ni = document.createElement('input');
        ni.type = 'text';
        var pub = document.createElement('p');
        pub.className = 'xl-fb-public';
        pub.textContent = S.publicNote;
        var actions = document.createElement('div');
        actions.className = 'xl-fb-actions';
        var cancel = document.createElement('button');
        cancel.type = 'button';
        cancel.textContent = S.cancel;
        cancel.addEventListener('click', function () { dialog.close(); });
        var submit = document.createElement('button');
        submit.type = 'submit';
        submit.textContent = S.submit;
        actions.appendChild(cancel);
        actions.appendChild(submit);
        form.appendChild(pl);
        form.appendChild(ta);
        form.appendChild(nl);
        form.appendChild(ni);
        form.appendChild(pub);
        form.appendChild(actions);
        form.addEventListener('submit', function () {
            if (!ta.value.trim()) return;
            window.open(issueURL(quoted, ta.value.trim(), ni.value.trim()), '_blank', 'noopener');
            dialog.close();
        });
        dialog.appendChild(h);
        dialog.appendChild(form);
        dialog.showModal();
        ta.focus();
    }

    var chip = document.createElement('button');
    chip.id = 'xl-fb-chip';
    chip.type = 'button';
    chip.textContent = S.chip;
    chip.hidden = true;
    chip.addEventListener('mousedown', function (e) {
        // Before the selection collapses on click.
        e.preventDefault();
        var sel = String(window.getSelection() || '').trim().slice(0, MAX_QUOTE);
        chip.hidden = true;
        if (sel) openDialog(sel);
    });

    function placeChip() {
        var selection = window.getSelection();
        var text = String(selection || '').trim();
        if (!text || text.length < 3 || text.length > MAX_QUOTE * 3
            || !selection.rangeCount || dialog.open) {
            chip.hidden = true;
            return;
        }
        var rect = selection.getRangeAt(0).getBoundingClientRect();
        if (!rect.width && !rect.height) { chip.hidden = true; return; }
        chip.style.top = (window.scrollY + rect.bottom + 8) + 'px';
        chip.style.left = Math.max(8, window.scrollX + rect.left) + 'px';
        chip.hidden = false;
    }

    var launcher = document.createElement('button');
    launcher.id = 'xl-fb-launcher';
    launcher.type = 'button';
    launcher.textContent = '✏️';
    launcher.setAttribute('aria-label', S.general);
    launcher.title = S.general;
    launcher.addEventListener('click', function () { openDialog(''); });

    function init() {
        document.body.appendChild(chip);
        document.body.appendChild(launcher);
        document.body.appendChild(dialog);
        document.addEventListener('mouseup', function () { setTimeout(placeChip, 10); });
        document.addEventListener('selectionchange', function () {
            if (String(window.getSelection() || '').trim() === '') chip.hidden = true;
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
