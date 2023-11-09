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
import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
	BlockVerticalAlignmentToolbar,
	InspectorControls,
	MediaPlaceholder,
	URLInputButton
} from '@wordpress/block-editor';
import {PanelBody, ToolbarGroup, ToolbarButton, RangeControl, HorizontalRule} from '@wordpress/components';
import {Fragment} from "@wordpress/element";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
import metadata from './block.json';
import {parseRadius} from "../../utils/parseValue";
import {getMimeType} from "../../utils/MimeType";

export default function Edit(props) {
	const {className, ...blockProps} = useBlockProps({
		style: { color: '#FFFFFF' },
		className: `are-vertically-aligned-${ props.attributes.InnerTextPosition }`
	});

	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [
			[ 'core/heading', { level: 2, placeholder: __('Title', metadata.textdomain)} ],
			[ 'core/paragraph', { placeholder: __('Your paragraph', metadata.textdomain) } ]
		],
		allowedBlocks: ['core/group', 'core/heading, core/paragraph', 'core/list', 'core/button', 'core/columns'],
	});

	const blockRadius = props.attributes.style?.border?.radius || 0;

	const mimeType = getMimeType(props.attributes.MediaUrl);

	return (
		<>
			{/* Don't forget to add others classes in render.php in get_block_wrapper_attributes function */}
			<section className={`${className}`} {...blockProps}>

				{!!props.attributes.MediaUrl ? (
					mimeType.startsWith('image/') ? (
						<img
							loading="lazy"
							src={props.attributes.MediaUrl}
							alt={props.attributes.MediaAlt}
							style={{ borderRadius: parseRadius(blockRadius) }}
						/>
					) : mimeType.startsWith('video/') ? (
						<video
							src={props.attributes.MediaUrl}
							alt={props.attributes.MediaAlt}
							style={{ borderRadius: parseRadius(blockRadius), backgroundColor: "gray" }}
						/>
					) : (
						<p>{__('Unsupported file format', metadata.textdomain)}</p>
					)
				) : (
					<MediaPlaceholder
						onSelect={(media) => {
							props.setAttributes({
								MediaId: media.id,
								MediaUrl: media.url,
								MediaAlt: media.alt,
							});
						}}
						multiple={false}
						labels={{ title: __('Add your picture', metadata.textdomain) }}
					/>
				)}

				<div className={'innerText'}
					 style={{
						 borderRadius: parseRadius(blockRadius, true),
						 padding: `${props.attributes.InnerTextPadding / 2}px ${props.attributes.InnerTextPadding}px`,
						 background: innerBlocksProps.style.background || innerBlocksProps.style.backgroundColor || "transparent",
						 backdropFilter: `blur(${props.attributes.InnerTextBlur}px)`,
					}}
				>
					<div {...(function ({ style, ...others }) {
						return others;
					})(innerBlocksProps)} />
				</div>


			</section>

			<Fragment>
				<BlockControls>
					{!!props.attributes.MediaUrl && (
						<Fragment>
							<ToolbarGroup>
								<URLInputButton
									url={props.attributes.LinkUrl || ''}
									onChange={(newValue) => {
										props.setAttributes({ LinkUrl: newValue });
									}}
								/>
							</ToolbarGroup>
							<ToolbarGroup>
								<ToolbarButton
									onClick={() => {
										props.setAttributes({
											MediaId: '',
											MediaUrl: '',
											MediaAlt: '',
										});
									}}
									icon="trash"
								>
									{__('Remove image', metadata.textdomain)}
								</ToolbarButton>
							</ToolbarGroup>
						</Fragment>
					)}
					<BlockVerticalAlignmentToolbar
						value={ props.attributes.InnerTextPosition }
						allowedControls={['top', 'center', 'bottom']}
						onChange={(newValue) => {
							props.setAttributes({
								InnerTextPosition: newValue,
							})
						}}
					/>
				</BlockControls>
			</Fragment>

			<InspectorControls>
				<PanelBody title={__('Content', metadata.textdomain)}>
					<RangeControl
						min={10}
						max={200}
						value={props.attributes.InnerTextPadding || 10}
						onChange={(newValue) => {
							props.setAttributes({InnerTextPadding: parseInt(newValue)});
						}}
						label={__('InnerText Padding', metadata.textdomain)}
						help={__('For an optimal rendering, your padding will be divided by two on the top and bottom sides.', metadata.textdomain)}
					/>
					<HorizontalRule/>
					<RangeControl
						min={0}
						max={50}
						value={props.attributes.InnerTextBlur}
						onChange={(newValue) => {
							props.setAttributes({InnerTextBlur: parseInt(newValue)});
						}}
						label={__('InnerText Blur Effect', metadata.textdomain)}
						help={__("To make the filter work, don't forget to disable the background color", metadata.textdomain)}
					/>
				</PanelBody>
			</InspectorControls>

		</>
	);
}
