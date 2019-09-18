import { combineReducers } from 'redux';
import colorOptions from './colorOptions';
import cartColors from './cartColors';

const rootReducer = combineReducers({
  colorOptions,
  cartColors,
});

export default rootReducer;
