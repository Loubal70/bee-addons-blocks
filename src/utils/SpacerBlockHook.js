const {createHigherOrderComponent} = wp.compose
const {InspectorControls} = wp.blockEditor
const {BaseControl, PanelBody, __experimentalUnitControl} = wp.components
const {Fragment} = wp.element

export default class SpacerBlockHook {
	namespace = 'beeAddonsBlock/spacer';

	static register() {
		const instance = new this();
		instance.registerSpacerSettings();
		instance.registerSpacerControls();
		instance.registerSpacerProps();
	}

	registerSpacerSettings() {
		wp.hooks.addFilter('blocks.registerBlockType', `${this.namespace}/settings`, this.addSpacerSettings);
	}

	addSpacerSettings(settings) {
		if (settings.name !== 'core/spacer') return settings;
		settings.supports = {...settings.supports, color: true};
		settings.attributes = {...settings.attributes, mobileHeight: {type: 'string', default: '0'}};
		return settings;
	}

	registerSpacerControls() {
		wp.hooks.addFilter('editor.BlockEdit', `${this.namespace}/controls`, this.addSpacerControls);
	}

	addSpacerControls = createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			if (props.name !== 'core/spacer') return <BlockEdit {...props} />;
			const {attributes, setAttributes} = props;
			const {mobileHeight} = attributes;

			return <Fragment>
				<InspectorControls>
					<PanelBody title={'Réglages Responsive'} initialOpen={false}>
						<BaseControl label={'Hauteur'}>
							<__experimentalUnitControl type={'number'}
													   min={0}
													   step={1}
													   value={mobileHeight}
													   style={{width: '80px'}}
													   onChange={(value) => setAttributes({mobileHeight: value})}>
							</__experimentalUnitControl>
						</BaseControl>
					</PanelBody>
				</InspectorControls>
				<BlockEdit {...props} />
			</Fragment>;
		};
	}, 'addSpacerControls')

	registerSpacerProps() {
		wp.hooks.addFilter('blocks.getSaveContent.extraProps', `${this.namespace}/props`, this.addSpacerProps);
	}

	addSpacerProps(props, blockType, attributes) {
		if (blockType.name !== 'core/spacer') return props;
		const {mobileHeight} = attributes;
		const heightNumber = +mobileHeight.match(/\d+/)[0];
		if (mobileHeight && heightNumber > 0) {
			props.style = {...props.style, "--spacerMobileHeight": mobileHeight};
		}
		return props;
	}
}
