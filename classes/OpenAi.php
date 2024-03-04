<?php

namespace BeeAddonsBlocks;

class OpenAi extends BootLoadClass
{
	public static function generateExcerptWithOpenAi(\WP_REST_Request $request): \WP_Error|\WP_REST_Response|\WP_HTTP_Response
	{
		$postContent = $request->get_param('postContent');
		$options = \BeeAddonsBlocks\Helpers\Options::getAll();

		if(empty($options['openai_key'])){
			return rest_ensure_response(['success' => false, 'error' => 'OpenAI key is not set'], 400);
		}

		$apiKey = $options['openai_key'];

		$client = \OpenAI::client($apiKey);
		$data = [
			"model" => "gpt-3.5-turbo",
			"messages" => [
				[
					"role" => "system",
					"content" => "Résume le texte suivant en optimisant le nombre de mots pour le référencement naturel. \n
					Le résumé doit être optimisé pour le sujet principal du contenu et doit faire 100 caractères :"
				],
				[
					"role" => "user",
					"content" => $postContent
				]
			]
		];
		$result = $client->chat()->create($data);

		if (!empty($result['choices'][0]['message']['content'])) {
			$response_data = $result['choices'][0]['message']['content'];
			return rest_ensure_response(['success' => true, 'excerpt' => $response_data]);
		} else {
			return rest_ensure_response(['success' => false, 'error' => 'No content available']);
		}
	}
}
