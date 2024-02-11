<?php

namespace BeeAddonsBlocks;

class Image
{
	const IMAGES_URL = BEE_ADDONS_BLOCKS_URL . 'src/icons/';
	const IMAGES_PATH = BEE_ADDONS_BLOCKS_DIR . 'src/icons/';

	public static function getUrl(string $file): ?string
	{
		$imageUrl = self::IMAGES_URL . $file;
		$imagePath = self::IMAGES_PATH . $file;
		if (!file_exists($imagePath)) {
			return null;
		}

		return $imageUrl;
	}
}
