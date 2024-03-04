<?php

namespace BeeAddonsBlocks\Helpers;

class Options
{
	private static array $options;
	public static function getAll(): array
	{
		if(!isset(self::$options)) {
			self::$options = get_option('bee-addons-blocks') ?: [];
		}

		return apply_filters('bee-addons-blocks/get_options', self::$options);
	}
}
