<?php
/**
 * Plugin Name:       Post Title List Block
 * Description:       Display recently published posts' titles as a list
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.1
 * Author:            Will Skora and the CPL Team
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       post-title-list-block
 *
 * @package           cpl
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function cpl_post_title_list_block_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'render_latest_post_block',
		)
	);
}

add_action( 'init', 'cpl_post_title_list_block_block_init' );


function render_latest_post_block( $attributes ) {
	$args = array(
		'posts_per_page'         => $attributes['numberOfPostsToDisplay'],
		'ignore_sticky_posts'    => 1,
		'no_found_rows'          => true,
		'post_status'            => array( 'publish' ),
		'post_type'              => $attributes['postTypesToObtain'],
		'update_post_term_cache' => false,
	);

	$post_list_query = new WP_Query( $args );

	$teh_html = '';

	if ( $post_list_query->have_posts() ) {
		$teh_html .= '<ul ' . get_block_wrapper_attributes() . '>';
	}
	while ( $post_list_query->have_posts() ) {
		$post_list_query->the_post();
		$post_id   = get_the_ID();
		$teh_html .= sprintf(
			'<li><a href="%1$s">%2$s</a>',
			esc_url( get_permalink( $post_id ) ),
			esc_html( get_the_title( $post_id ) ),
			'</li>'
		);
	}
	$teh_html .= '</ul>';
		return $teh_html;
}
