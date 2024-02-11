<?php

namespace BeeAddonsBlocks\Settings;

class SettingsAPI
{
	public function register(): void
	{
		add_action('rest_api_init', [$this, 'registerRestRoute']);
	}

	private function registerRestRoute(): void
	{
		die('test');
		register_rest_route('beeAddonsBlocks/v1', '/blocksTypeExcludes', [
			'methods' => 'POST',
			'callback' => [$this, 'setExcludedBlocksType'],
			'permission_callback' => '__return_true',
		]);
	}

	private function setExcludedBlocksType(): \WP_Error|\WP_REST_Response|\WP_HTTP_Response
	{
		$blocksTypeExcludes = $_POST['blocksTypeExcludes'];
		update_option('beeAddonsBlocks_blocksTypeExcludes', $blocksTypeExcludes);
		return rest_ensure_response('success');
	}
}
