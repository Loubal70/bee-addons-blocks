<?php
/**
 * Plugin Name:       Bee Addons Blocks
 * Description:       Plugin who add new fantastics gutenberg blocks
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Loubal70
 * Author URI:        https://louis-boulanger.fr/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       beeAddonsBlocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

add_action( 'init', function () {
	register_block_type( __DIR__ . '/build/blocks/curvy' );
} );
