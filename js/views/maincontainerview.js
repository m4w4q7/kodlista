define(
	['marionette'],
	function (Marionette) {
		return Marionette.LayoutView.extend({
			template: '#main-container-template',
			regions: {
				'main': '#main'
			}
		});
	}
);