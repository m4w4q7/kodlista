define(
	['marionette'],
	function (Marionette) {
		return Marionette.ItemView.extend({
			template: '#filter-template',
			ui: {
				'filterInput': '#text-filter'
			},
			events: {
				'keyup @ui.filterInput': 'onFilter'
			},
			onFilter: function (e) {
				var filterText = this.ui.filterInput.val();
				// console.log(filterText);
				this.trigger('filter:change', filterText);
			}
		});
	}
);