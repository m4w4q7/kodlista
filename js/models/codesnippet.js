// A Backbone modellek megfigyelhető objektumok, változásukkor eseményeket váltanak ki, és hozzáköthetők nézetekhez. Speciális belső szerkezetük van, attribútumaikat az attributes objektumukban tárolják, és a get('tulajdonság'), illetve set('tulajdonság', érték) metódusokkal kezelhetjük, ezzel biztosítva a megfigyelhetőséget. Eseményeiket az on(...), off(...), trigger(...) metódusokkal kezelhetjük.
define(
	[
		'backbone', 
	],
	function (Backbone) {
		// Az extend() metódust egy Backbone osztályon (kostruktor függvényen) meghívva egy abból származtatott új osztályt (konstruktort) kapunk.
		// https://gist.github.com/horvathgyozo/bf551d152932abf0971b#a-modell
		// http://backbonejs.org/#Model-extend
		return Backbone.Model.extend({
			// defaults: "A modellkonstruktor létrehozásakor meghatározhatjuk, hogy új objektumok készítésekor azok milyen alapértelmezett értéket kapjanak, ha az nincs expliciten meghatározva."
			defaults: function() {
				return {
					title: '',
					code: '',
					type: 'js',
					date: Date.now()
				};
			}
		});
	}
);