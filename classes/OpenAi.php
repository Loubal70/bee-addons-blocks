<?php

namespace BeeAddonsBlocks;

class OpenAi extends BootLoadClass
{


	public function generateSummaryButton(): void
	{
		// Vérifier si l'écran actuel est celui de l'éditeur de post
		if (is_admin() && get_current_screen()->id == 'post') {

			// Vérifier si l'éditeur Gutenberg est activé
			if (function_exists('register_block_type')) {

				// Obtenir l'ID du post actuel
				$post_id = isset($_GET['post']) ? $_GET['post'] : '';

				// Récupérer les données extraites actuelles
				$excerpt = get_post_field('post_excerpt', $post_id );

				// Afficher le bouton personnalisé avec le lien ou action désiré
				echo '<div class="my-custom-button">';
				echo '<a href="#" class="button">Mon bouton personnalisé</a>';
				echo '</div>';

				// Ajouter un champ masqué avec l'ID du post pour la sauvegarde
				echo '<input type="hidden" name="post_ID" value="'. $post_id .'" />';
			}
		}
	}
}
