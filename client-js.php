<?php
/**
 * Plugin Name: WP-API Client JS
 */

function json_api_client_js() {

	$scripts = wp_scripts();
	$src = plugins_url( 'build/js/wp-api.js', __FILE__ );
	if ( isset( $scripts->registered['wp-api'] ) ) {
		$scripts->registered['wp-api']->src = $src;
	} else {
		wp_register_script( 'wp-api', $src, array( 'jquery', 'underscore', 'backbone' ), '1.0', true );
	}

	/**
	 * @var \WP_REST_Server $wp_rest_server
	 */
	global $wp_rest_server;
	if ( empty( $wp_rest_server ) ) {
		/** This filter is documented in wp-includes/rest-api.php */
		$wp_rest_server_class = apply_filters( 'wp_rest_server_class', 'WP_REST_Server' );
		$wp_rest_server = new $wp_rest_server_class();

		/** This filter is documented in wp-includes/rest-api.php */
		do_action( 'rest_api_init', $wp_rest_server );
	}

	$schema_request = new WP_REST_Request( 'GET', '/wp/v2' );
	$schema_response = $wp_rest_server->dispatch( $schema_request );
	$schema = null;
	if ( ! $schema_response->is_error() ) {
		$schema = $schema_response->get_data();
	}

	$settings = array(
		'root' => esc_url_raw( get_rest_url() ),
		'nonce' => wp_create_nonce( 'wp_rest' ),
		'versionString' => 'wp/v2/',
		'schema' => $schema,
	);
	wp_localize_script( 'wp-api', 'wpApiSettings', $settings );

}

if ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) {
	add_action( 'wp_enqueue_scripts', 'json_api_client_js' );
	add_action( 'admin_enqueue_scripts', 'json_api_client_js' );
}