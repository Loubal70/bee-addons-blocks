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

namespace BeeAddonsBlocks;

if (!defined('ABSPATH')) exit;

final class BeeAddonsBlocks
{
	public function boot(): void
	{
		$this->setConstants();
		$this->registerAutoload();

		Assets::boot();
		Blocks::boot();
	}

	public function setConstants(): void
	{
		define('BEE_ADDONS_BLOCKS_DIR', plugin_dir_path(__FILE__));
		define('BEE_ADDONS_BLOCKS_URL', plugin_dir_url(__FILE__));
		define('BEE_ADDONS_BLOCKS_TEXT_DOMAIN', 'beeAddonsBlocks');
	}

	public function registerAutoload(): void
	{
		require_once BEE_ADDONS_BLOCKS_DIR . '/vendor/autoload.php';
	}

	public static function convert_custom_properties($value)
	{
		$prefix = "var:";
		$prefix_len = strlen($prefix);
		$token_in = '|';
		$token_out = '--';
		if (str_starts_with($value, $prefix)) {
			$unwrapped_name = str_replace(
				$token_in,
				$token_out,
				substr($value, $prefix_len)
			);
			$value = "var(--wp--$unwrapped_name)";
		}
		return $value;
	}
}

$beeAddonsBlocks = new BeeAddonsBlocks();
$beeAddonsBlocks->boot();
