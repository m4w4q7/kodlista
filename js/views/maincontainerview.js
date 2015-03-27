define(
	['marionette'],
	function (Marionette) {
		return Marionette.LayoutView.extend({
			
			// melyik template-ből generálja:
			template: '#main-container-template',
			
			regions: {
				'main': '#main' // #main-container-template-ben definiálva
			}
		});
	}
);