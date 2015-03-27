define(
	['marionette', 'backbone'],
	function (Marionette, Backbone) {
		return Marionette.ItemView.extend({
			
			tagName: 'li',
			
			className: 'list-group-item',
			
			template: '#list-item-template',
			
			// http://backbonejs.org/#View-delegateEvents
			events: {
				'click': 'onClick'
			},
			
			onClick: function (e) {
				// Az eseményt a Backbone obejktumon hívjuk meg, az app.js kapja el és lecseréli a ListContainerView-t SnippetContainerView-ra
				// A this jelen esetben a példányosított ListItemView-ra mutat, ami az őt létrehozó CollectionView-tól, azaz a ListContainerView-tól "model"-ként megkapta a hozzá tartozó CodeSnippet-et.
				Backbone.trigger('snippet:selected', this.model);
				// this.model.destroy(); // Ezt órán kommenteztük ki, nem tudom mit akartunk vele
			}
		});
	}
);
