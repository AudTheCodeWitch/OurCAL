import { combineReducers } from "redux";
import cardsReducer from "./cardsReducer";
import blockTemplateReducer from "./blockTemplateReducer";
import paletteReducer from "./paletteReducer";

const rootReducer = combineReducers({
  cards: cardsReducer,
  blockTemplate: blockTemplateReducer,
  palette: paletteReducer
});

export default rootReducer;
