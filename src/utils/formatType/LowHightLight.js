import {registerFormatType, applyFormat, removeFormat} from '@wordpress/rich-text';
import {__} from '@wordpress/i18n';
import {RichTextToolbarButton, ColorPalette} from '@wordpress/block-editor';
import {useState} from "@wordpress/element";
import {Popover, PanelBody} from "@wordpress/components";
import lowHightlightIcon from "../../assets/low-highlight.svg";
import lowHightlightActiveIcon from "../../assets/low-highlight-active.svg";

export function registerLowHighlightFormatType() {
	registerFormatType("bee-addons-blocks/low-highlight-format", {
		title: __("Low Highlight", "bee-addons-blocks"),
		tagName: "span",
		className: "beeAddonsBlocks-low-highlight",
		edit: ({onChange, value, contentRef, isActive}) => {
			const [showColors, setShowColors] = useState(false);
			const lowHighlight = value.activeFormats?.find(
				(format) => format.type === "bee-addons-blocks/low-highlight-format");
			const attributes = {
				...(lowHighlight?.attributes || {}),
				...(lowHighlight?.unregisteredAttributes || {}),
			};
			const [textColor, setTextColor] = useState(attributes?.['data-color-text'] || '');
			const [backgroundColor, setBackgroundColor] = useState(attributes?.['data-color'] || '');

			const onTextColorChange = (newValue) => {
				setTextColor(newValue);
				applyCompleteFormat(value, newValue, backgroundColor);
			};

			const onBackgroundColorChange = (newValue) => {
				setBackgroundColor(newValue);
				applyCompleteFormat(value, textColor, newValue);
			};

			const applyCompleteFormat = (value, textColor, backgroundColor) => {
				if (textColor || backgroundColor) {
					onChange(
						applyFormat(value, {
							type: "bee-addons-blocks/low-highlight-format",
							attributes: {
								'data-color-text': textColor,
								'data-color': backgroundColor,
								style: `color: ${textColor}; background-image: linear-gradient(to right, ${backgroundColor}, ${backgroundColor})`,
							}
						})
					);
				} else {
					onChange(
						removeFormat(value, "bee-addons-blocks/low-highlight-format")
					);
				}
			};

			return (
				<>
					<RichTextToolbarButton
						icon={
							<img
								height={24}
								width={24}
								src={isActive ? lowHightlightActiveIcon : lowHightlightIcon}
							/>
						}
						title={__("Low Highlight", "bee-addons-blocks")}
						onClick={() => {
							setShowColors(true);
						}}
					/>
					{!!showColors &&
						<Popover
							anchor={contentRef?.current}
							onClose={() => setShowColors(false)}
						>
							<PanelBody title={__("Low Highlight", "bee-addons-blocks")}>
								<label style={{display: "block", marginBottom: "1rem"}}>
									{__("Color of the text", "bee-addons-blocks")}
								</label>
								<ColorPalette
									value={textColor}
									onChange={onTextColorChange}/>

								<label style={{display: "block", marginTop: "1rem", marginBottom: "1rem"}}>
									{__("Background color of the text", "bee-addons-blocks")}
								</label>

								<ColorPalette
									value={backgroundColor}
									onChange={onBackgroundColorChange}/>
							</PanelBody>
						</Popover>
					}
				</>
			);
		}
	});
}
