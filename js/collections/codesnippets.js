define(
	[
		'backbone', 
		'models/codesnippet', 
	],
	function (Backbone, CodeSnippet) {
		return Backbone.Collection.extend({
			model: CodeSnippet,
			
			getTitles: function(filterText) {
				filterText = filterText || '';
				return this
					.map(function (sn) {
						return sn.get('title');
					})
					.filter(function (e) {
						return e.indexOf(filterText) > -1;
					});
			}
		});
	}
);