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
	InspectorControls,
	MediaPlaceholder,
	ColorPalette
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

export default function Edit(props) {
	const {className, ...blockProps} = useBlockProps({
		style: {
			color: '#FFFFFF'
		}
	});
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [
			[ 'core/heading', { level: 2, placeholder: __('Title', metadata.textdomain)} ],
			[ 'core/paragraph', { placeholder: __('Your paragraph', metadata.textdomain) } ]
		],
		allowedBlocks: ['core/heading, core/paragraph'],

	});
	const blockRadius = props.attributes.style?.border?.radius || 0;
	return (
		<>
			{/* Don't forget to add others classes in render.php in get_block_wrapper_attributes function */}
			<section className={`${className}`} {...blockProps}>
				{!!props.attributes.MediaUrl ?
					(<img
						loading={'lazy'}
						src={props.attributes.MediaUrl}
						alt={props.attributes.MediaAlt}
						style={{ borderRadius: parseRadius(blockRadius) }}
					/>)
					:
					<MediaPlaceholder
						onSelect={
							(media) => {
								props.setAttributes({
									MediaId: media.id,
									MediaUrl: media.url,
									MediaAlt: media.alt,
								});
							}
						}
						allowedTypes={['image']}
						multiple={false}
						labels={{title: __('Add your picture', metadata.textdomain)}}
					/>
				}

				<div className={'innerText'}
					 style={{
						 borderRadius: parseRadius(blockRadius, true),
						 padding: `${props.attributes.InnerTextPadding / 2}px ${props.attributes.InnerTextPadding}px`,
						 backgroundColor: props.attributes.InnerTextBackground || "transparent",
						 backdropFilter: `blur(${props.attributes.InnerTextBlur}px)`,
					}}
				>
					<div {...innerBlocksProps} />
				</div>


			</section>

			<Fragment>
				<BlockControls>
					{!!props.attributes.MediaUrl &&

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

					}
				</BlockControls>
			</Fragment>

			<InspectorControls>
				<PanelBody title={__('Text', metadata.textdomain)}>
					<RangeControl
						min={10}
						max={50}
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
					<HorizontalRule/>
					<div>
						<label className={'beeAddonsBlocks-base-control__label'}>{__('InnerText Background Color', metadata.textdomain)}</label>
						<ColorPalette
							value={props.attributes.InnerTextBackground}
							onChange={(newValue) => {
								props.setAttributes({
									InnerTextBackground: newValue,
								})
							}}
						/>
					</div>
				</PanelBody>
			</InspectorControls>

		</>
	);
}
