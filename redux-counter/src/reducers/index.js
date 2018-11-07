import { combineReducers } from 'redux';
import numberReducer from './number-reducer';
import colorReducer from './color-reducer';

export default combineReducers({
  numberReducer,
  colorReducer
});

