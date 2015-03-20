define(
	[
		'marionette',
		//'views/nav',
		'views/snippetviewview'
		
	],
	function (Marionette, SnippetViewView) {
		
		return Marionette.LayoutView.extend({
			template: '#snippet-container-template',
			regions: {
				'nav': '#nav',
				'snippet': '#snippet',
			},
			initialize: function () {
				this.snippetViewView = new SnippetViewView({model: this.model});
				/*
				this.filterView = new FilterView();
				this.collection = makeFilteredCollection(this.collection, function (filterText) {
					return this.filter(function (sn) {
						return sn.get('title').indexOf(filterText) > -1;
					});
				});
				this.collection.resetFilter('');
				
				this.listenTo(this.filterView, 'filter:change', this.updateCollection);
				*/
			},
			onBeforeShow: function () {
			
				//? this.getRegion('snippet').show(new SnippetViewView({model: this.model}));
				
				this.getRegion('snippet').show(this.snippetViewView);
			}
		});
	}
);



