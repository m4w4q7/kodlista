require.config({
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min',
		'underscore': '../bower_components/underscore/underscore',
		'backbone': '../bower_components/backbone/backbone',
		'marionette': '../bower_components/marionette/lib/backbone.marionette.min'
	}
});

require(['app'], function (app) {
	app.start();
});
