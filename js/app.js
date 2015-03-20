define(
	[
		'backbone',
		'marionette',
		'views/bodyview',
		'views/maincontainerview',
		'views/listcontainerview',
		'views/snippetcontainerview',
		'collections/codesnippets',
	],
	function (Backbone, Marionette, BodyView, MainContainerView, ListContainerView, SnippetContainerView,
						CodeSnippetCollection) {
		var snippets = [
			{
				title: 'valami',
				code: 'valami',
				type: 'js',
				date: Date.now()
			},
			{
				title: 'valami2',
				code: 'valami2',
				type: 'js',
				date: Date.now()
			},
		];
		
		var snarr = new CodeSnippetCollection(snippets);
		
		var app = new Marionette.Application({
			showSnippet: function (data) {
			
				//console.log(data);
				this.mainContainerView.getRegion('main').show(new SnippetContainerView({
					model: data
				}))
			}
		});
		
		app.on('start', function () {
			
			this.bodyView = new BodyView();
			this.mainContainerView = new MainContainerView();
			
			this.bodyView.getRegion('main-container').show(this.mainContainerView);
			this.mainContainerView.getRegion('main').show(new ListContainerView({
				collection: snarr
			}));
			
		})
		
		app.on('start', function () {
			this.listenTo(Backbone, 'snippet:selected', this.showSnippet)
		})
		
		return app;
	}
);
