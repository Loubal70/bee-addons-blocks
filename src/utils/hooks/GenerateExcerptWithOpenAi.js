import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { select } from '@wordpress/data';
import {__} from "@wordpress/i18n";

export default class MyButtonMoreMenuItemTest {
	onGenerateAIExcerpt() {
		const postContent = select('core/editor').getEditedPostAttribute('content');
		try {
			fetch(`${wpData.siteUrl}wp-json/bee-addons-blocks/v1/openai-generate-excerpt`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ postContent })
			})
				.then(response => {
					if (response.ok) {
						return response.json();
					}
					throw new Error(`La requête a échoué avec le statut : ${response.status}`);
				})
				.then(responseData => {
					const excerptTextArea = document.querySelector('.editor-post-excerpt__textarea textarea');
					if (excerptTextArea) {
						excerptTextArea.textContent = responseData['excerpt'];
						excerptTextArea.dispatchEvent(new Event('input', { bubbles: true }));
					} else {
						console.error('No excerpt textarea found');
					}
				})
				.catch(error => console.error(error));
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		return (
			<PluginMoreMenuItem onClick={this.onGenerateAIExcerpt}>
				{ __("Generate AI Excerpt", "bee-addons-blocks") }
			</PluginMoreMenuItem>
		);
	}
}