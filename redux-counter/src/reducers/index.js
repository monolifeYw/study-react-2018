// import { combineReducers } from 'redux';
// import numberReducer from './number-reducer';
// import colorReducer from './color-reducer';

import * as types from '../actions/ActionTypes';

const initialState = {
  counters: [
    {
      number: 0,
      color: 'black'
    }
  ]
};

export default (state = initialState, action) => {
  const { counters } = state;

  console.log(state, action);

  switch(action.type) {
    case types.CREATE:
      console.log('[counters]...1', ...counters); // object ( in counters )
      console.log('[counters]1', counters); // array
      // console.log(Object.prototype.toString.call(...counters));
      // console.log('...2', counters.concat({color: action.color, number: 0}));
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
        // counters: counters.concat({color: action.color, number: 0})
      };

    case types.REMOVE:
      return {
        counters: counters.slice(0, counters.length -1)
      };

    default:
      return state;
  }

  /* switch(action.type) {
    case types.CREATE:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number + 1
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      }
    case types.REMOVE:
      return state;
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      }
    default:
      return state;
  } */
}





/* export default combineReducers({
  numberReducer,
  colorReducer
});
 */
