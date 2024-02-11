<?php

namespace BeeAddonsBlocks;

class Assets extends BootLoadClass
{
	public function register(): void
	{
		add_action('admin_enqueue_scripts', [$this, 'enqueueAdminScripts']);
		add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
	}

	public function enqueueAdminScripts(): void
	{
		if (!defined('BEE_ADDONS_BLOCKS_URL')) return;

		$current_screen = get_current_screen();
		if ( $current_screen && 'toplevel_page_bee-addons-blocks' === $current_screen->id ) {
			wp_register_style('bee-addons-blocks-admin-style', BEE_ADDONS_BLOCKS_URL . 'dist/css/admin.css');
			wp_enqueue_style('bee-addons-blocks-admin-style');

			wp_enqueue_script('bee-addons-blocks-admin-script', BEE_ADDONS_BLOCKS_URL . 'dist/js/admin.js', ['wp-blocks', 'wp-element', 'wp-i18n', 'wp-block-editor']);
			wp_localize_script('bee-addons-blocks-admin-script', 'wpData', array(
				'siteUrl' => esc_url(home_url('/'))
			));

		}

		wp_enqueue_script('bee-addons-blocks-index', BEE_ADDONS_BLOCKS_URL . '/build/index.js', [
			'wp-blocks', 'wp-element', 'wp-i18n', 'wp-block-editor'
		], '1.0.0', true);
	}

	public function enqueueBlockAssets(): void
	{
		wp_enqueue_style('bee-addons-blocks-index', BEE_ADDONS_BLOCKS_URL . '/build/style-index.css', [], '1.0.0');
	}
}
