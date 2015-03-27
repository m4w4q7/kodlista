// A Backbone gyűjtemények Backbone modellek megfigyelhető "tömbjei".
// Néhány metódus: add(), remove(), set(), reset(), forEach(), filter(), min()/max(), find(), sortBy(), pluck() stb.
// https://gist.github.com/horvathgyozo/bf551d152932abf0971b#a-gy%C5%B1jtem%C3%A9ny
define(
	[
		'backbone', 
		'models/codesnippet', 
	],
	function (Backbone, CodeSnippet) {
		return Backbone.Collection.extend({
			// model: "Override this property to specify the model class that the collection contains. If defined, you can pass raw attributes objects (and arrays) to add, create, and reset, and the attributes will be converted into a model of the proper type."
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