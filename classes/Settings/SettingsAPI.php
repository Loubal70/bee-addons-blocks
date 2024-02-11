<?php

namespace BeeAddonsBlocks\Settings;

use BeeAddonsBlocks\BootLoadClass;

class SettingsAPI extends BootLoadClass
{
	public function register(): void
	{
		add_action('rest_api_init', [$this, 'registerRestApiEndpoints']);
	}

	public function registerRestApiEndpoints(): void
	{
		register_rest_route('bee-addons-blocks/v1', '/blocks-types-excluded', [
			'methods' => 'POST',
			'callback' => [$this, 'setExcludedBlocksType'],
			'permission_callback' => '__return_true',
		]);

		register_rest_route('bee-addons-blocks/v1', '/get-blocks-types-excluded', [
			'methods' => 'GET',
			'callback' => [$this, 'getExcludedBlocksType'],
			'permission_callback' => '__return_true',
		]);
	}

	public function getExcludedBlocksType(): \WP_REST_Response
	{
		return rest_ensure_response(get_option('beeAddonsBlocks_blocksTypeExcludes', []));
	}

	public function setExcludedBlocksType(\WP_REST_Request $request): \WP_Error|\WP_REST_Response|\WP_HTTP_Response
	{
		update_option('beeAddonsBlocks_blocksTypeExcludes', $request->get_json_params());
		return rest_ensure_response('success');
	}
}
