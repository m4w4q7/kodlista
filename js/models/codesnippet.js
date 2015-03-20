define(
	[
		'backbone', 
	],
	function (Backbone) {
		return Backbone.Model.extend({
			defaults: function() {
				return {
					title: '',
					code: '',
					type: 'js',
					date: Date.now()
				};
			}
		});
	}
);