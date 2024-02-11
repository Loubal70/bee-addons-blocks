<?php

namespace BeeAddonsBlocks;

/**
 * Plugin Name:       Bee Addons Blocks
 * Description:       Discover BeeAddonsBlock, the plugin that brings new features and enhancements to the WordPress Gutenberg editor. Simplify the creation of custom blocks with advanced options and a user-friendly interface. Bring your ideas to life and easily create unique designs with our enhanced Gutenberg plugin.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           0.1.6
 * Author:            Louis Boulanger
 * Author URI:        https://louis-boulanger.fr/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       bee-addons-blocks
 * Domain Path: /languages
 *
 * @package           bee-addons-blocks
 */

if (!defined('ABSPATH')) {
	exit;
}

final class BeeAddonsBlocks
{
	public function boot(): void
	{
		$this->setConstants();
		$this->registerAutoload();

		Assets::boot();
		Blocks::boot();
		Options::boot();
		Translations::boot();
	}

	public function setConstants(): void
	{
		define('BEE_ADDONS_BLOCKS_DIR', plugin_dir_path(__FILE__));
		define('BEE_ADDONS_BLOCKS_URL', plugin_dir_url(__FILE__));
		define('BEE_ADDONS_BLOCKS_TEXT_DOMAIN', 'bee-addons-blocks');
	}

	public function registerAutoload(): void
	{
		require_once BEE_ADDONS_BLOCKS_DIR . '/vendor/autoload.php';
	}

}

$beeAddonsBlocks = new BeeAddonsBlocks();
$beeAddonsBlocks->boot();
