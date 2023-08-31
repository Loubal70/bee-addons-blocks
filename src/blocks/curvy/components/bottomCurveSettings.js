import { HorizontalRule, RangeControl, ToggleControl} from "@wordpress/components";
import { ColorPalette } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

export const BottomCurveSettings = (props) => {
	return (
		<>
			<HorizontalRule/>

			<RangeControl
				min={100}
				max={300}
				value={props.attributes.bottomCurveWidth || 100}
				onChange={(newValue) => {
					props.setAttributes({bottomCurveWidth: parseInt(newValue)});
				}}
				label={__('Width', metadata.textdomain)}
			/>
			<RangeControl
				min={0}
				max={200}
				value={props.attributes.bottomCurveHeight}
				onChange={(newValue) => {
					props.setAttributes({bottomCurveHeight: parseInt(newValue)});
				}}
				label={__('Height', metadata.textdomain)}
			/>

			<HorizontalRule/>

			<div style={{display: "flex"}}>
				<ToggleControl
					onChange={(isChecked) => {
						props.setAttributes({
							bottomCurveFlipX: isChecked,
						});
					}}
					checked={props.attributes.bottomCurveFlipX}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{display: "flex"}}>
				<ToggleControl
					onChange={(isChecked) => {
						props.setAttributes({
							bottomCurveFlipY: isChecked,
						});
					}}
					checked={props.attributes.bottomCurveFlipY}
				/>
				<span>{__("Flip vertically", metadata.textdomain)}</span>
			</div>

			<HorizontalRule/>

			<div>
				<label>{__('Curve color', metadata.textdomain)}</label>
				<ColorPalette
					value={props.attributes.bottomCurveColor}
					onChange={(newValue) => {
						props.setAttributes({
							bottomCurveColor: newValue,
						})
					}}
				/>
			</div>
		</>
	)
};
