/* ducks pattern */

import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// actions
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const SET_COLOR = 'counter/SET_COLOR';
export const CREATE = 'counter/CREATE';
export const REMOVE = 'counter/REMOVE';

// immutable 적용
const initialState = Map({
  counters: List([
    Map({
      number: 0,
      color: 'black'
    })
  ])
});

// action creators
// 어떤 파라메터를 받아야 하는지 주석에 메모로 남겨둠
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR); // index, color
export const create = createAction(CREATE, color => color); // color(명시적 표현)
//export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE);

// reducer
/* export default function reducer(state = initialState, action) {

} */

/* export default handleActions({
  INCREMENT: (state, action) => ({

  })
}) */

const reducer = handleActions({
  // 접두사 사용시 [] 안에서 진행
  [CREATE]: (state, action) => {
    console.log('reducer');
    const counters = state.get('counters');
    return state.set('counters', counters.push(
      Map({
        number: 0,
        color: action.payload
      })
    ));
  },
  [REMOVE]: state => {
    const counters = state.get('counters');
    return state.set('counters', counters.pop());
  },
  [INCREMENT]: (state, action) => {
    const counters = state.get('counters');
    // const self = action.payload;
    // return state.set('counters', counters.setIn([self, 'number'], counters.getIn([self, 'number']) + 1));
    return state.set('counters', counters.update(action.payload, counter => counter.set('number', counter.get('number') + 1)));
  }
}, initialState);

export default reducer;

