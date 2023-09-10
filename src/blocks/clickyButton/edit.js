/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText, InspectorControls} from '@wordpress/block-editor';
import {PanelBody, SelectControl, ToggleControl} from '@wordpress/components';
import {useSelect} from '@wordpress/data';


import metadata from "../curvy/block.json";

export default function Edit(props) {
	const postTypes = useSelect((select) => {
		const data = select('core').getEntityRecords("root", "postType", {
			// per_page: -1
		});
		return data?.filter(item => item.visibility.show_in_nav_menus && item.visibility.show_ui);
	})
	const posts = useSelect(
		(select) => {
			const data = select("core").getEntityRecords("postType",
				props.attributes.postType,
				{
					// per_page: -1
				}
			);
			return data;
		}, [props.attributes.postType]);
	const blockProps = useBlockProps();
	return (
		<>
			<InspectorControls>
				<PanelBody title={__("Destination", metadata.textdomain)}>
					<SelectControl
						label={__("Type", metadata.textdomain)}
						value={props.attributes.postType}
						onChange={(newValue) => {
							props.setAttributes({
								postType: newValue
							});
						}}
						options={[{
							label: __("Select a post type", metadata.textdomain),
							value: ''
						}, ...(postTypes || []).map(postType => (
							{
								label: postType.name,
								value: postType.slug
							}
						))]}
					/>
					{!!props.attributes.postType &&
						<SelectControl
							label={__("Linked", metadata.textdomain) + ' ' + `${props.attributes.postType}`}
							value={props.attributes.linkedPost}
							onChange={(newValue) => {
								props.setAttributes({
									linkedPost: newValue ? parseInt(newValue) : null,
								});
							}}
							options={[
								{
									label: __("Select a", metadata.textdomain) + ' ' + `${props.attributes.postType}` + ' ' + __("to link to", metadata.textdomain),
									value: ''
								}, ...(posts || []).map(post => (
									{
										label: post.title.rendered,
										value: post.id
									}
								))
							]}
						/>
					}
					{!!props.attributes.postType &&
						<ToggleControl
							label={__("Open in new tab", metadata.textdomain)}
							help={__("Open in new tab", metadata.textdomain)}
							checked={props.attributes.openInNewTab}
							onChange={(newValue) => {
								props.setAttributes({
									openInNewTab: newValue,
								});
							}}
						/>
					}
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<RichText
					placeholder={__("Example", metadata.textdomain)}
					value={props.attributes.labelText}
					allowedFormats={[]}
					multiline={false}
					onSplit={() => {
					}}
					onReplace={() => {
					}}
					onChange={(newValue) => {
						props.setAttributes({
							labelText: newValue,
						})
					}}
				/>
			</div>
		</>
	)
}
