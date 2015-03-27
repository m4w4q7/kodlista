// Egy AMD-típusú moduldefiníció. Első paraméterként egy tömb a függőségekkel, második pedig egy callback függvény, ami paraméterben megkapja az előzőleg kért modulokat, visszatérési értékét pedig a többiek kapják meg, akik függőségként megjelölték.
// http://requirejs.org/docs/api.html#defdep
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
				code: 'valami kódja',
				type: 'js',
				date: Date.now()
			},
			{
				title: 'valami2',
				code: 'valami2 kódja',
				type: 'js',
				date: Date.now()
			},
		];
		
		// Mivel beállítottuk, hogy a CodeSnippetCollection modellje a CodeSnippet, hagyományos objektumok hagyományos tömbjéből is létrehozhatjuk.
		var snarr = new CodeSnippetCollection(snippets);
		
		
		// Marionette: "Marionette simplifies your Backbone application code with robust views and architecture solutions."
		// Az objektum paraméter tartalmával bővíti a létrehozott objektumot.
		// Application: http://marionettejs.com/docs/v2.4.1/marionette.application.html
		var app = new Marionette.Application({
			
			// Egy snippet megjelenítése
			// Itt cseréljük le a ListContainerView-t SnippetContainerView-ra
			showSnippet: function (data) {
				// console.log(data);
				this.mainContainerView.getRegion('main').show(new SnippetContainerView({
					model: data
				}));
			}
		});

		
		app.on('start', function () {
			
			this.bodyView = new BodyView();
			this.mainContainerView = new MainContainerView();
			
			this.bodyView.getRegion('main-container').show(this.mainContainerView);
			this.mainContainerView.getRegion('main').show(new ListContainerView({
				collection: snarr // ez le lesz majd cserélve egy filterezhető collectoion-re (lásd: listcontainerview.js)
			}));

		});

		
		// Ebből nem tudom, miért van kettő, csak hogy a Győző részéről szándékos. Talán a nézet és a viselkedés elkülönítésére.
		app.on('start', function () {
			// A ListItemView váltja ki, ha ráklikkeltek. Az eseménykezelőnek átadja a hozzá tartozó CodeSnippet-et.
			this.listenTo(Backbone, 'snippet:selected', this.showSnippet);
		});
		
		return app;
	}
);
