define(
	[
		'marionette', 
		'views/listitemview'
	],
	function (Marionette, ListItemView) {
		return Marionette.CollectionView.extend({
			tagName: 'ul',
			className: 'list-group',
			childView: ListItemView
		});
	}
);