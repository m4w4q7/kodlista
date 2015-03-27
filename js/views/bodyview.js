define(
	['marionette'],
	function (Marionette) {
		// http://marionettejs.com/docs/v2.4.1/marionette.layoutview.html
		var BodyView = Marionette.LayoutView.extend({
			// "Az el azt az elemet jelöli ki az oldalon, amelyhez a nézet tartozik, és amelyen belül a megjelenítés történik. Az elem kijelölése CSS szelektorral történik."
			el: 'body',
			
			// http://marionettejs.com/docs/v2.4.1/marionette.region.html
			regions: {
				'main-container': '#main-container' // index.html-ben definiálva
			}
		});
		
		return BodyView;
	}
);