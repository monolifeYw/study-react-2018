import * as types from '../actions/ActionTypes';

const initialState = {
  color: 'black'
};

export default (state = initialState, action) => {
  console.log('[color reducer]action', action, state);
  switch (action.type) {
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      }
    default:
      return state;
  }
}
