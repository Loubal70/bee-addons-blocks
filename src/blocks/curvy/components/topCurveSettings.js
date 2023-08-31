import { HorizontalRule, RangeControl, ToggleControl} from "@wordpress/components";
import { ColorPalette } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

export const TopCurveSettings = (props) => {
	return (
		<>
			<HorizontalRule/>

			<RangeControl
				min={100}
				max={300}
				value={props.attributes.topCurveWidth || 100}
				onChange={(newValue) => {
					props.setAttributes({topCurveWidth: parseInt(newValue)});
				}}
				label={__('Width', metadata.textdomain)}
			/>
			<RangeControl
				min={0}
				max={200}
				value={props.attributes.topCurveHeight}
				onChange={(newValue) => {
					props.setAttributes({topCurveHeight: parseInt(newValue)});
				}}
				label={__('Height', metadata.textdomain)}
			/>

			<HorizontalRule/>

			<div style={{display: "flex"}}>
				<ToggleControl
					onChange={(isChecked) => {
						props.setAttributes({
							topCurveFlipX: isChecked,
						});
					}}
					checked={props.attributes.topCurveFlipX}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{display: "flex"}}>
				<ToggleControl
					onChange={(isChecked) => {
						props.setAttributes({
							topCurveFlipY: isChecked,
						});
					}}
					checked={props.attributes.topCurveFlipY}
				/>
				<span>{__("Flip vertically", metadata.textdomain)}</span>
			</div>

			<HorizontalRule/>

			<div>
				<label>{__('Curve color', metadata.textdomain)}</label>
				<ColorPalette
					value={props.attributes.topCurveColor}
					onChange={(newValue) => {
						props.setAttributes({
							topCurveColor: newValue,
						})
					}}
				/>
			</div>
		</>
	)
};
