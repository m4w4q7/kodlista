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
			
			onBeforeShow: function () {
				this.getRegion('snippet').show(new SnippetViewView({model: this.model}));
			}
		});
	}
);
