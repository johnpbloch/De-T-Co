(function(window, undefined){
	var document = window.document,
		clean = function(){
			var links = document.querySelectorAll('a[href^="http://t.co/"]'),
				x,
				interval;

			for( x = 0; x < links.length; x += 1 ) {
				if ( undefined !== links[x].dataset && undefined !== links[x].dataset.expandedUrl ) {
					links[x].href = links[x].dataset.expandedUrl;
				}
			}
		};
	
	interval = window.setInterval( clean, 1000 );
}(this));
