import SpacerBlockHook from "./utils/hooks/SpacerBlockHook";

import "./style.scss";
import {registerLowHighlightFormatType} from "./utils/formatType/LowHightLight";

registerLowHighlightFormatType();
SpacerBlockHook.register();
