<?php

namespace BeeAddonsBlocks;

class Config extends BootLoadClass
{
	/**
	 * Parses a border radius value and returns it as a string with optional customization.
	 *
	 * @return string|null Returns the parsed border radius value as a string, or null if the input is invalid.
	 */
	public static function parseRadius($value, $onlyBottom = false): ?string
	{
		if ($onlyBottom === true) {
			$value = is_array($value) ? '0 0 '.$value['bottomRight'].' '.$value['bottomLeft'] : "0 0 $value $value";
		} else {
			$value = is_array($value) ? "{$value['topLeft']} {$value['topRight']} {$value['bottomRight']} {$value['bottomLeft']}" : $value;
		}

		return esc_attr($value);
	}

	public static function getMimeType($url): string
	{
		$extension = strtolower(pathinfo($url, PATHINFO_EXTENSION));
		$mimeTypes = [
			'jpg' => 'image/jpeg',
			'jpeg' => 'image/jpeg',
			'png' => 'image/png',
			'gif' => 'image/gif',
			'webp' => 'image/webp',
			'mp4' => 'video/mp4',
			'webm' => 'video/webm',
		];

		return $mimeTypes[$extension] ?? '';
	}

	/**
	 * This is used to convert the internal representation of variables to the CSS representation.
	 * For example, `var:preset|color|vivid-green-cyan` becomes `var(--wp--preset--color--vivid-green-cyan)`.
	 *
	 * From : WP Core
	 *
	 * @param  string  $value  The variable such as var:preset|color|vivid-green-cyan to convert.
	 * @return string The converted variable.
	 */
	public static function convert_custom_properties(string $value): string
	{
		$prefix = 'var:';
		$prefix_len = strlen($prefix);
		$token_in = '|';
		$token_out = '--';
		if (str_starts_with($value, $prefix)) {
			$unwrapped_name = str_replace(
				$token_in,
				$token_out,
				substr($value, $prefix_len)
			);
			$value = "var(--wp--$unwrapped_name)";
		}

		return $value;
	}
}
