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

		$gutenbergBuildDirChildren = $this->getAllBlocks();

		$excludedBlocks = get_option('beeAddonsBlocks_blocksTypeExcludes', array());

		foreach ($gutenbergBuildDirChildren as $buildDirChild) {
			// Récupérer le nom du dernier élément du lien
			$pathParts = explode('/', $buildDirChild);
			$blockTypeName = end($pathParts);
			$blockTypeSlug = BEE_ADDONS_BLOCKS_TEXT_DOMAIN . "/" . strtolower(preg_replace('/(?<!^)([A-Z])/', '-$1', $blockTypeName));

			if (!empty($excludedBlocks)) {
				if(!in_array($blockTypeSlug, $excludedBlocks)){
					register_block_type($buildDirChild);
				}
			} else {
				register_block_type($buildDirChild);
			}
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

	private function getAllBlocks(): array
	{
		$gutenbergBuildDir = BEE_ADDONS_BLOCKS_DIR . '/build/blocks';
		$gutenbergBuildDirChildren = scandir($gutenbergBuildDir);
		$gutenbergBuildDirChildren = array_filter($gutenbergBuildDirChildren, function ($child) {
			return $child !== '.' && $child !== '..';
		});
		return array_map(function ($child) use ($gutenbergBuildDir) {
			return $gutenbergBuildDir . '/' . $child;
		}, $gutenbergBuildDirChildren);
	}

	public function getAllBlocksArray(): array
	{
		$blocks = $this->getAllBlocks();

		$blocksReturns = [];

		foreach ($blocks as $buildDirChild) {
			// Récupérer le nom du dernier élément du lien
			$pathParts = explode('/', $buildDirChild);
			$blockTypeName = end($pathParts);
			$blockTypeSlug = BEE_ADDONS_BLOCKS_TEXT_DOMAIN . "/" . strtolower(preg_replace('/(?<!^)([A-Z])/', '-$1', $blockTypeName));

			$blocksReturns[] = [
				'title' => ucfirst($blockTypeName),
				'name' => $blockTypeSlug
			];
		}
		return $blocksReturns;
	}
}
