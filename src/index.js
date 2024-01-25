import {registerFormatType, applyFormat, removeFormat} from '@wordpress/rich-text';
import {__} from '@wordpress/i18n';
import {RichTextToolbarButton, ColorPalette} from '@wordpress/block-editor';
import {useState} from "@wordpress/element";
import {Popover, PanelBody} from "@wordpress/components";
import lowHightlightIcon from "./assets/low-highlight.svg";
import lowHightlightActiveIcon from "./assets/low-highlight-active.svg";

import SpacerBlockHook from "./utils/hooks/SpacerBlockHook";

import "./style.scss";

registerFormatType("bee-addons-blocks/low-highlight-format", {
	title: __("Low Highlight", "beeAddonsBlocks"),
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
				title={__("Low Highlight", "beeAddonsBlocks")}
				onClick={() => {
					setShowColors(true);
				}}
			/>
			{!!showColors &&
				<Popover
					anchor={contentRef?.current}
					onClose={() => setShowColors(false)}
				>
					<PanelBody title={__("Low Highlight", "beeAddonsBlocks")}>
						<ColorPalette
							value={attributes?.['data-color']}
							onChange={(newValue) => {
								if (newValue) {
									onChange(
										applyFormat(value, {
											type: "bee-addons-blocks/low-highlight-format",
											attributes: {
												'data-color': newValue,
												style: `background-image: linear-gradient(to right, ${newValue}, ${newValue})`,
											}
										})
									);
								} else {
									onChange(
										removeFormat(value, "bee-addons-blocks/low-highlight-format")
									);
								}
							}}/>
					</PanelBody>
				</Popover>
			}
			</>
		);
	}
});

SpacerBlockHook.register();
