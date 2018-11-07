import * as types from '../actions/ActionTypes';
// import { combineReducers } from 'redux';

const initialState = {
  color: 'black',
  number: 0
};

export default (state = initialState, action) => {
  console.log('action', action, state);
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      }
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      }
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      }
    default:
      return state;
  }
}
