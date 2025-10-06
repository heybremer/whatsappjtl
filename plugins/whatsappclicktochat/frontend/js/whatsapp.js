(function () {
    function encodeQuery(text) {
        try {
            return encodeURIComponent(text);
        } catch (e) {
            return '';
        }
    }
    function buildWaUrl(phone, message) {
        var base = 'https://wa.me/';
        var query = message ? ('?text=' + encodeQuery(message)) : '';
        return base + String(phone || '').replace(/\D+/g, '') + query;
    }
    function createButton(href, label) {
        var a = document.createElement('a');
        a.id = 'wa-floating-action';
        a.href = href;
        a.target = '_blank';
        a.rel = 'noopener noreferrer nofollow';
        a.setAttribute('aria-label', label || 'WhatsApp ile yazın');
        return a;
    }
    function init() {
        if (document.getElementById('wa-floating-action')) {
            return;
        }
        var root = document.getElementById('wa-floating-button');
        if (!root) return;
        var phone = root.getAttribute('data-wa-phone') || '';
        var message = root.getAttribute('data-wa-message') || '';
        var label = root.getAttribute('data-wa-label') || '';
        if (!phone) return;
        var href = buildWaUrl(phone, message);
        var btn = createButton(href, label);
        document.body.appendChild(btn);
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
