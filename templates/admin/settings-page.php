<section x-data="{menu: 1}" id="bee-addons-blocks-wrapper">
	<div class="mx-auto max-w-7xl px-8 pt-8">
		<img src="<?= \BeeAddonsBlocks\Image::getUrl('banner.webp') ?>"
			 class="w-auto max-h-72 object-cover object-center block mx-auto rounded-md"
			 alt="BeeAddonsBlocks'banner">
	</div>
	<div class="mx-auto max-w-7xl py-16 px-8 flex gap-x-16">
		<aside class="overflow-x-auto block shrink-0 basis-56">
			<nav class="flex-none px-4 sm:px-6 lg:px-0">
				<ul role="list" class="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col my-0">
					<?php require_once BEE_ADDONS_BLOCKS_DIR . '/templates/admin/navigation.php'; ?>
				</ul>
			</nav>
		</aside>

		<main class="px-4 sm:px-6 lg:px-0">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<?php require_once BEE_ADDONS_BLOCKS_DIR . '/templates/admin/sections/disableBlocks.php'; ?>
				<?php require_once BEE_ADDONS_BLOCKS_DIR . '/templates/admin/sections/changeLog.php'; ?>
			</div>
		</main>
	</div>
</section>
