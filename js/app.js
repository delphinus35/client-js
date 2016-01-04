(function( window, wp, undefined ) {

	'use strict';

	function WP_API() {
		this.models = {};
		this.collections = {};
		this.views = {};
	}

	window.wp            = wp || {};
	wp.api               = wp.api || new WP_API();
	wp.api.versionString = wp.api.versionString || 'wp/v2/';

})( window, wp );
