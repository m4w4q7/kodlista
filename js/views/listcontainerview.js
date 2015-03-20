define(
	[
		'marionette',
		'backbone',
		'views/filterview',
		'views/listview',
	],
	function (Marionette, Backbone, FilterView, ListView) {
		
		function makeFilteredCollection(coll, filterFn) {
			var FC = Backbone.Collection.extend({
				initialize: function () {
					filterFn = filterFn.bind(coll);
				},
				resetFilter: function (filterText) {
					var filtered = filterFn(filterText);
					return this.reset(filtered);
				}
			});
				
			return (new FC());
		}
	
	
		return Marionette.LayoutView.extend({
			template: '#list-container-template',
			regions: {
				'filter': '#filter',
				'list': '#list',
			},
			initialize: function () {
				this.filterView = new FilterView();
				this.collection = makeFilteredCollection(this.collection, function (filterText) {
					return this.filter(function (sn) {
						return sn.get('title').indexOf(filterText) > -1;
					});
				});
				this.collection.resetFilter('');
				
				this.listenTo(this.filterView, 'filter:change', this.updateCollection);
			},
			onBeforeShow: function () {
				this.getRegion('filter').show(this.filterView);
				this.getRegion('list').show(new ListView({
					collection: this.collection
				}));
			},
			updateCollection: function (filterText) {
				this.collection.resetFilter(filterText);
			}
		});
	}
);
