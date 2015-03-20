define(
	['marionette'],
	function (Marionette) {
		var BodyView = Marionette.LayoutView.extend({
			el: 'body',
			regions: {
				'main-container': '#main-container'
			}
		});
		
		return BodyView;
	}
);