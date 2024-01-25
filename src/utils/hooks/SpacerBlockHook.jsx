const {createHigherOrderComponent} = wp.compose;
const {InspectorControls} = wp.blockEditor;
const {BaseControl, PanelBody, ToggleControl} = wp.components;
import {__} from "@wordpress/i18n";

const {Fragment} = wp.element;

export default class SpacerBlockHook {
	namespace = "beeAddonsBlock/spacer";

	static register() {
		const instance = new this();
		instance.registerSpacerSettings();
		instance.registerSpacerControls();
		instance.registerSpacerProps();
	}

	registerSpacerSettings() {
		wp.hooks.addFilter(
			"blocks.registerBlockType",
			`${this.namespace}/settings`,
			this.addSpacerSettings
		);
	}

	addSpacerSettings(settings) {
		if (settings.name !== "core/spacer") return settings;
		settings.supports = {...settings.supports, color: true};
		settings.attributes = {
			...settings.attributes,
			mobileHeight: {type: "string", default: "0"},
			showOnMobile: {type: "boolean", default: false},
		};
		return settings;
	}

	registerSpacerControls() {
		wp.hooks.addFilter(
			"editor.BlockEdit",
			`${this.namespace}/controls`,
			this.addSpacerControls
		);
	}

	addSpacerControls = createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			if (props.name !== "core/spacer") return <BlockEdit {...props} />;
			const {attributes, setAttributes} = props;

			return (
				<Fragment>
					<InspectorControls>
						<PanelBody
							title={__("Responsive Settings", "beeAddonsBlocks")}
							initialOpen={false}
						>
							<div style={{display: "flex"}}>
								<ToggleControl
									label={__("Enable spacer on mobile", "beeAddonsBlocks")}
									checked={attributes.showOnMobile}
									onChange={(isChecked) =>
										setAttributes({showOnMobile: isChecked})
									}
								/>
							</div>

							{attributes.showOnMobile && (
								<BaseControl label={__("Height", "beeAddonsBlocks")}>
									<input
										type="number"
										min="0"
										step="1"
										value={attributes.mobileHeight || "80"}
										onChange={(event) =>
											setAttributes({mobileHeight: event.target.value})
										}
									/>
								</BaseControl>
							)}
						</PanelBody>
					</InspectorControls>
					<BlockEdit {...props} />
				</Fragment>
			);
		};
	}, "addSpacerControls");

	registerSpacerProps() {
		wp.hooks.addFilter(
			"blocks.getSaveContent.extraProps",
			`${this.namespace}/props`,
			this.addSpacerProps
		);
	}

	addSpacerProps(props, blockType, attributes) {
		if (blockType.name !== "core/spacer") return props;
		const {mobileHeight, showOnMobile} = attributes;
		const heightNumber = parseInt(mobileHeight);

		if (showOnMobile) {
			props.style = {
				...props.style,
				"--spacerMobileShow": "block",
			};
		}

		if (showOnMobile && heightNumber > 0) {
			props.style = {
				...props.style,
				"--spacerMobileHeight": mobileHeight.includes('px') ? mobileHeight : `${mobileHeight}px`
			};
		}
		return props;
	}

}
