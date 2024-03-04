import { ToggleControl } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { Component } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default class Sidebar extends Component {
	render() {
		const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' );
		const exampleToggle = meta['_wholesomecode_wholesome_plugin_require_login'];

		return (
			<PluginDocumentSettingPanel
				name="wholesomecode-wholesome-plugin-sidebar"
				title={ __( 'Display Settings', 'wholesome-plugin' ) }
			>
				<ToggleControl
					checked={ exampleToggle }
					help={ __( 'User must be logged-in in to view this post.', 'wholesome-plugin' ) }
					label={ __( 'Require Login', 'wholesome-plugin' ) }
					onChange={ ( value ) => {
						dispatch( 'core/editor' ).editPost( {
							meta: {
								'_wholesomecode_wholesome_plugin_require_login': value,
							},
						} );
					} }
				/>
			</PluginDocumentSettingPanel>
		);
	}
}
