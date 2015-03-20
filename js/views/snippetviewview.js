define(
	['marionette'],
	function (Marionette) {
		return Marionette.ItemView.extend({
			template: '#snippet-view-template',
		});
	}
);