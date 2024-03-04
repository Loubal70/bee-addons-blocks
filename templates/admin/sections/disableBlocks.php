<div x-show="menu === 1">

	<h2 class="text-base font-semibold leading-7 text-gray-900 mt-0">
		<?= __("OpenAi key", BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?>
	</h2>

	<p class="mt-1 text-sm leading-6 text-gray-500">
		<?= __("Generate your extracts automatically with artificial intelligence!", BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?>
	</p>

	<?php do_action($data->settingPage->id . '_before_form'); ?>
	<form action="options.php" method="post">
		<?php
		do_action($data->settingPage->id . '_before_options');
		settings_fields($data->settingPage->id);
		?>
		<div class="grid grid-cols-12 gap-4 mb-4">
			<?php
			BeeAddonsBlocks\Helpers\SettingsSection::renderSectionsByPage($data->settingPage->id);
			?>
		</div>
		<?php
		do_action($data->settingPage->id . '_before_submit_button');
		?>
		<button class="bg-yellow-600 text-white border-none py-2 px-3 rounded font-semibold cursor-pointer
                        hover:bg-yellow-800 focus:bg-yellow-800 transition-all">
			<?= __('Save Settings', BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?>
		</button>
		<?php
		do_action($data->settingPage->id . '_after_submit_button');
		?>
	</form>
	<?php do_action($data->settingPage->id . '_after_form'); ?>


	<hr class="my-6">

	<h2 class="text-base font-semibold leading-7 text-gray-900 mt-0">
		<?= __("Disabling Gutenberg blocks", BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?>
	</h2>

	<p class="mt-1 text-sm leading-6 text-gray-500">
		<?= __("If you want to optimize your loading time, disable the blocks you don't use!", BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?>
	</p>

	<?php $blocks = (new BeeAddonsBlocks\Blocks)->getAllBlocksArray(); ?>


	<div x-data="blocksTypeExcludes"
		 class="pt-2 space-y-4 divide-y divide-gray-100 text-sm leading-6"
		 :class="{ 'opacity-50': !loaded }">
		<div
			x-show="!loaded"><?php echo __('Loading...', BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?></div>
		<?php if (!empty($blocks)): ?>
			<?php foreach ($blocks as $block_type) : ?>
				<div x-show="loaded"
					 x-transition:enter="transition ease-out duration-500"
					 x-transition:enter-start="opacity-0"
					 x-transition:enter-end="opacity-100"
					 x-transition:leave="transition ease-in duration-500"
					 x-transition:leave-start="opacity-100"
					 x-transition:leave-end="opacity-0">
					<label for="<?php echo $block_type['name']; ?>"
						   class="p-4 flex items-center justify-between rounded-md"
						   :class="{ 'bg-gray-200/50': blocks.includes('<?php echo $block_type['name']; ?>') }">
										<span
											class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"><?php echo $block_type['title']; ?></span>

						<span class="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-semibold"
							  :class="blocks.includes('<?php echo $block_type['name']; ?>')
									? 'bg-red-100 text-red-700'
									: 'bg-green-100 text-green-700'"
							  x-text="blocks.includes('<?php echo $block_type['name']; ?>')
								? '<?= __('Disable', BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?>'
								: '<?= __('Enable', BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?>' "
						></span>
					</label>
					<input id="<?php echo $block_type['name']; ?>"
						   name="<?php echo $block_type['name']; ?>"
						   value="<?php echo $block_type['name']; ?>"
						   type="checkbox"
						   x-model="blocks"
						   class="hidden">
				</div>
			<?php endforeach; ?>
		<?php else: ?>
			<div x-show="loaded"
				 class="text-gray-500"><?php echo __('It seems that no blocks were found.', BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?></div>
		<?php endif; ?>
	</div>
</div>
