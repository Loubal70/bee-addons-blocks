<div x-show="menu === 1">
	<h2 class="text-base font-semibold leading-7 text-gray-900">Désactivation des blocs</h2>
	<p class="mt-1 text-sm leading-6 text-gray-500">Si tu souhaites optimiser ton temps de chargement,
		désactiver les blocs que tu n'utilises pas !</p>
	<?php $blocks = (new BeeAddonsBlocks\Blocks)->getAllBlocksArray(); ?>


	<div x-data="blocksTypeExcludes"
		 class="pt-6 space-y-4 divide-y divide-gray-100 border-0 border-t border-solid border-gray-200 text-sm leading-6"
		 :class="{ 'opacity-50': !loaded }">
		<div
			x-show="!loaded"><?php echo __('Chargement en cours...', BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?></div>
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
						   class="p-4 flex items-center justify-between"
						   :class="{ 'bg-gray-300 opacity-50': blocks.includes('<?php echo $block_type['name']; ?>') }">
										<span
											class="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6"><?php echo $block_type['title']; ?></span>
						<button type="button"
								class="font-semibold"
								x-text="blocks.includes('<?php echo $block_type['name']; ?>') ? 'Désactivé' : 'Activé'"></button>
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
				 class="text-gray-500"><?php echo __('Aucun bloc trouvé', BEE_ADDONS_BLOCKS_TEXT_DOMAIN) ?></div>
		<?php endif; ?>
	</div>
</div>
