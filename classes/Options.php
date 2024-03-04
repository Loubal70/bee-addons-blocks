<?php

namespace BeeAddonsBlocks;

use BeeAddonsBlocks\Settings\SettingsAPI;
use BeeAddonsBlocks\Settings\SettingsPage;

class Options extends BootLoadClass
{
	public function register(): void
	{
		SettingsAPI::boot();
		SettingsPage::make(__('Bee Addons Blocks', BEE_ADDONS_BLOCKS_TEXT_DOMAIN), __('Addons Blocks', BEE_ADDONS_BLOCKS_TEXT_DOMAIN), BEE_ADDONS_BLOCKS_TEXT_DOMAIN)
			->setIconUrl($this->getIcon())
			->setPosition(100)
			->addSection(null, 'openai_excerpt', __('Set the default parameters for openAi'))

			->addField(null, 'openai_key', 'text',
				__('(generated from https://platform.openai.com/api-keys)', BEE_ADDONS_BLOCKS_TEXT_DOMAIN),
				'openai_excerpt', [],'col-span-12')
			->render();
	}

	private function getIcon(): string
	{
		$iconContent = file_get_contents(BEE_ADDONS_BLOCKS_DIR . '/src/icons/BeeAddonsBlocks.svg');
		$iconContent = base64_encode($iconContent);
		return 'data:image/svg+xml;base64,' . $iconContent;
	}

}
