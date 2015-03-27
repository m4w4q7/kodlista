// RequireJS felkonfigurálása. (A RequireJS az AMD - aszinkron modul definíció - egy implementációja).
require.config({
	// "paths: path mappings for module names not found directly under baseUrl. The path settings are assumed to be relative to baseUrl, unless the paths setting starts with a "/" or has a URL protocol in it ("like http:"). (...) The path that is used for a module name should not include an extension, since the path mapping could be for a directory."
	// http://requirejs.org/docs/api.html#config
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min',
		'underscore': '../bower_components/underscore/underscore',
		'backbone': '../bower_components/backbone/backbone',
		'marionette': '../bower_components/marionette/lib/backbone.marionette.min'
	}
});


// app modulunk start() metódusának meghívása (a Marionette.Application-ból örökli)
require(['app'], function (app) {
	app.start();
});
