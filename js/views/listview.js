define(
	[
		'marionette', 
		'views/listitemview'
	],
	function (Marionette, ListItemView) {
		// "The CollectionView will loop through all of the models in the specified collection, render each of them using a specified childView, then append the results of the child view's el to the collection view's el."
		// http://marionettejs.com/docs/v2.4.1/marionette.collectionview.html
		return Marionette.CollectionView.extend({
			tagName: 'ul',
			className: 'list-group',
			childView: ListItemView
		});
	}
);