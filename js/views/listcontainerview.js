define(
	[
		'marionette',
		'backbone',
		'views/filterview',
		'views/listview',
	],
	
	function (Marionette, Backbone, FilterView, ListView) {
		
		// Itt egy filterezhető collection absztrakciót láthatunk (az FC), illetve hozzá egy gyárfüggvényt.
		// A coll lesz az alap gyűjteménye (closure-rel tárolva a filterFN-hez bindolva), a filterFN pedig a filterező függvénye, és mindig amikor meghívják a resetFilter metódusát, akkor annak paraméteréül kapott szöveggel filterezi a coll-t és beállítja magának.
		// Szerintem amíg meg nem hívják először a resetFilter-t rajta, addig üres a gyűjtemény, mert addig sehol nincs beállítva, hogy a coll legyen benne. Ha az initialize-ba tennénk egy this.set(coll), akkor az szerintem megoldaná ezt. Én amúgyis vagy megszüntetném ezt az absztakciót, vagy jobban elkülöníteném egy külön modulba, bár mivel sehol máshol nem használjuk, inkább az előbbi.
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
				'filter': '#filter', // #list-container-template-ben definiálva
				'list': '#list' // #list-container-template-ben definiálva
			},
			
			
			// példányosításkor lefutó inicializálás ("konstruktor")
			initialize: function () {
				this.filterView = new FilterView();
				
				// Itt használjuk a fenti FilteredCollectiont olyan filterfüggvénnyel, ami a title attribútumban keresi a filterText-et.
				// A jelenlegi this.cllection-t az app.js állította be.
				this.collection = makeFilteredCollection(this.collection, function (filterText) {
					return this.filter(function (sn) {
						return sn.get('title').indexOf(filterText) > -1;
					});
				});
				this.collection.resetFilter('');
				
				// a FilterView váltja ki, filterText paraméterrel hívja meg az eseménykezelőt (updateCollection)
				// így is lehetne, this.filterView.on('filter:change', ...);
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
