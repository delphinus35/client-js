(function(factory) {

	'use strict';

	// Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	// We use `self` instead of `window` for `WebWorker` support.
	var root = (typeof self == 'object' && self.self === self && self) ||
	(typeof global == 'object' && global.global === global && global);

	// Set up Backbone appropriately for the environment. Start with AMD.
	if (typeof define === 'function' && define.amd) {
		define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
			// Export global even in AMD case in case this script is loaded with
			// others that may still expect a global Backbone.
			root.Backbone = factory(root, exports, _, $);
		});

		// Next for Node.js or CommonJS. jQuery may not be needed as a module.
	} else if (typeof exports !== 'undefined') {
		var _ = require('underscore'), $;
		try { $ = require('jquery'); } catch (e) {}
		factory(root, exports, _, $);

		// Finally, as a browser global.
	} else {
		root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	}

})(function(window, Backbone, _, $) {

var wpApiSettings;
if (typeof window.wpApiSettings === 'undefined') {
	wpApiSettings = window.wpApiSettings = {};
}
