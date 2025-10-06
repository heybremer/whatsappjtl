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
	function createButton(href) {
		var a = document.createElement('a');
		a.id = 'wa-floating-action';
		a.href = href;
		a.target = '_blank';
		a.rel = 'noopener nofollow';
		a.setAttribute('aria-label', 'WhatsApp ile yazın');
		return a;
	}
	function init() {
		var root = document.getElementById('wa-floating-button');
		if (!root) return;
		var phone = root.getAttribute('data-wa-phone') || '';
		var message = root.getAttribute('data-wa-message') || '';
		if (!phone) return;
		var href = buildWaUrl(phone, message);
		var btn = createButton(href);
		document.body.appendChild(btn);
	}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
