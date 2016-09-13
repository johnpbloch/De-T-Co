(function (window, undefined) {
	var document = window.document,
			interval;

	function clean() {
		var links = document.querySelectorAll('a[href^="http://t.co/"], a[href^="https://t.co/"]'),
				x;

		for (x = 0; x < links.length; x += 1) {
			if (undefined !== links[x].dataset) {
				if (undefined !== links[x].dataset.expandedUrl) {
					links[x].href = links[x].dataset.expandedUrl;
				} else if (undefined !== links[x].dataset.fullUrl) {
					links[x].href = links[x].dataset.fullUrl;
				} else {
					continue;
				}
				if (links[x].classList.contains('u-hidden')) {
					links[x].classList.remove('u-hidden');
				}
			}
		}
	}

	interval = window.setInterval(clean, 1000);
}(window));
