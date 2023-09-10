<?php

namespace BeeAddonsBlocks;

class Blocks extends BootLoadClass
{
	public function register(): void
	{
		add_filter('block_categories_all', [$this, 'registerBlockCategory']);
		add_action('init', [$this, 'registerBlockTypes']);
	}

	public function registerBlockTypes(): void
	{
		if (!defined('BEE_ADDONS_BLOCKS_DIR')) return;
		$gutenbergBuildDir = BEE_ADDONS_BLOCKS_DIR . '/build/blocks';
		$gutenbergBuildDirChildren = scandir($gutenbergBuildDir);
		$gutenbergBuildDirChildren = array_filter($gutenbergBuildDirChildren, function ($child) {
			return $child !== '.' && $child !== '..';
		});
		$gutenbergBuildDirChildren = array_map(function ($child) use ($gutenbergBuildDir) {
			return $gutenbergBuildDir . '/' . $child;
		}, $gutenbergBuildDirChildren);

		foreach ($gutenbergBuildDirChildren as $buildDirChild) {
			register_block_type($buildDirChild);
		}
	}

	public function registerBlockCategory($categories): array
	{
		array_unshift($categories, [
			'slug' => 'beeAddonsBlocks',
			'title' => 'Bee Addons Blocks',
		]);
		return $categories;
	}
}
