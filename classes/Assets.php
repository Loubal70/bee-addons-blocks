<?php

namespace BeeAddonsBlocks;

class Assets extends BootLoadClass
{
	public function register(): void
	{
		add_action('init', [$this, 'enqueueScripts']);
		add_action('enqueue_block_assets', [$this, 'enqueueBlockAssets']);
	}

	public function enqueueScripts(): void
	{
		if (!defined('BEE_ADDONS_BLOCKS_URL')) return;
		wp_enqueue_script('bee-addons-blocks-index', BEE_ADDONS_BLOCKS_URL . '/build/index.js', [
			'wp-blocks', 'wp-element', 'wp-editor'
		], '1.0.0', true);
	}

	public function enqueueBlockAssets(): void
	{
		wp_enqueue_style('bee-addons-blocks-index', BEE_ADDONS_BLOCKS_URL . '/build/style-index.css', [], '1.0.0');
	}
}
