define(
	[
		'marionette',
		//'views/navview',
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
				this.listenTo(this.filterView, 'filter:change', this.updateCollection);
				*/
			},
			
			onBeforeShow: function () {
				this.getRegion('snippet').show(new SnippetViewView({model: this.model}));
			}
		});
	}
);
