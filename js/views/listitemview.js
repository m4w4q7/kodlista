define(
	['marionette', 'backbone'],
	function (Marionette, Backbone) {
		return Marionette.ItemView.extend({
			tagName: 'li',
			className: 'list-group-item',
			template: '#list-item-template',
			events: {
				'click': 'onClick'
			},
			onClick: function (e) {
				// console.log(this.model); // backbone objektum
				Backbone.trigger('snippet:selected', this.model);
				// this.model.destroy();
			}
		});
	}
);