import SpacerBlockHook from "./utils/hooks/SpacerBlockHook";
import "./style.scss";
import { registerLowHighlightFormatType } from "./utils/formatType/LowHightLight";
import { registerPlugin } from '@wordpress/plugins';
import GenerateExcerptWithOpenAi from "./utils/hooks/GenerateExcerptWithOpenAi";


registerLowHighlightFormatType();
SpacerBlockHook.register();

if (document.body.classList.contains('block-editor-page')) {
	registerPlugin('generate-excerpt-with-openai', { render: () => new GenerateExcerptWithOpenAi().render() });
}
