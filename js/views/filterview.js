define(
	['marionette'],
	function (Marionette) {
		return Marionette.ItemView.extend({
			
			template: '#filter-template',
			
			// http://marionettejs.com/docs/v2.4.1/marionette.itemview.html#organizing-ui-elements
			ui: {
				filterInput: '#text-filter'
			},
			
			// "You can also use the ui hash values from within events and trigger keys using the "@ui.elementName": syntax"
			// http://marionettejs.com/docs/v2.4.1/marionette.view.html#viewevents
			// http://backbonejs.org/#View-delegateEvents
			events: {
				'keyup @ui.filterInput': 'onFilter'
			},
			
			onFilter: function (e) {
				var filterText = this.ui.filterInput.val();
				// ListContainerView figyel rá
				this.trigger('filter:change', filterText);
			}
		});
	}
);