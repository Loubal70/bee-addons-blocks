<?php

namespace BeeAddonsBlocks;

class Translations extends BootLoadClass
{
	public function register(): void
	{
		add_action('admin_enqueue_scripts', [$this, 'loadScriptTranslations'], 20);
		add_action('plugins_loaded', [$this, 'loadPluginTranslations']);
	}

	public function loadScriptTranslations(): void
	{
		if (!defined('BEE_ADDONS_BLOCKS_DIR')) return;
		wp_set_script_translations(
			'bee-addons-blocks-admin-script',
			BEE_ADDONS_BLOCKS_TEXT_DOMAIN,
			BEE_ADDONS_BLOCKS_DIR . 'languages'
		);
	}

	public function loadPluginTranslations(): void
	{
		if (!defined('BEE_ADDONS_BLOCKS_DIR')) return;
		load_plugin_textdomain(
			BEE_ADDONS_BLOCKS_TEXT_DOMAIN,
			false,
			BEE_ADDONS_BLOCKS_DIR . 'languages'
		);
	}
}
