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
	InspectorControls,
	InnerBlocks
} from '@wordpress/block-editor';
import {PanelBody, RangeControl, HorizontalRule} from '@wordpress/components';
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
import arrowDown from './assets/arrow_down.svg';

export default function Edit(props) {
	const {className, ...blockProps} = useBlockProps();
	return (
		<>
			{/* Don't forget to add others classes in render.php in get_block_wrapper_attributes function */}
			<section className={`${className}`} {...blockProps}>
				<span>
					<InnerBlocks
						template={[
							[
								'core/paragraph', {content: __('Scroll down', metadata.textdomain)}
							]
						]}
					/>
				</span>
				<img className={"bee-arrow"} src={arrowDown}/>
			</section>

			<InspectorControls>
				<PanelBody title={__('Animations', metadata.textdomain)}>
					<RangeControl
						min={0}
						max={100}
						value={props.attributes.TranslateAnimation || 0}
						onChange={(newValue) => {
							props.setAttributes({TranslateAnimation: parseInt(newValue)});
						}}
						label={__('Translation', metadata.textdomain)}
					/>

					<HorizontalRule/>

					<RangeControl
						min={0}
						max={2000}
						value={props.attributes.scroll || 0}
						onChange={(newValue) => {
							props.setAttributes({scroll: parseInt(newValue)});
						}}
						label={__('Scroll', metadata.textdomain)}
					/>
				</PanelBody>
			</InspectorControls>

		</>
	);
}
