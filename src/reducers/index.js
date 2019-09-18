import { combineReducers } from 'redux';
import colorOptions from './colorOptions';
import cartColors from './cartColors';
import hoverColor from './hoverColor';

const rootReducer = combineReducers({
  colorOptions,
  cartColors,
  hoverColor,
});

export default rootReducer;
