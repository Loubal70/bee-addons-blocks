import { PluginMoreMenuItem } from '@wordpress/edit-post';
import { select } from '@wordpress/data';
import {__} from "@wordpress/i18n";

export default class GenerateExcerptWithOpenAi {
	async onGenerateAIExcerpt() {
		const postContent = select('core/editor').getEditedPostAttribute('content');
		try {
			const response = await fetch(wpData.siteUrl + 'wp-json/bee-addons-blocks/v1/openai-generate-excerpt', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ postContent })
			});

			if (response.ok) {
				const responseData = await response.json();
				const excerptTextArea = document.querySelector('.editor-post-excerpt__textarea textarea');
				if (excerptTextArea) {
					excerptTextArea.textContent = responseData['excerpt'];
					excerptTextArea.value = responseData['excerpt'];
					excerptTextArea.dispatchEvent(new Event('input', { bubbles: true }));
				} else {
					console.error('No excerpt textarea found');
				}
			} else {
				const errorData = await response.text();
				alert('Request has failed : ' + response.status + ' - ' + errorData);
			}
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
