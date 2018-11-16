import { combineReducers } from 'redux';
import dotProp from 'dot-prop-immutable'

export const initialState = {
  // todos
  todos: {
    items: [],
    testRandom: 7
  },

  // 현재 데이터 로딩상태 체크
  status: {
    nowStatus: false
  },

  locationInfo: null
}

const SCEHEMA = {
  LIST: {
    value: '',
    isDone: false
  }
}

const todoReducer = (state = initialState, action) => {
  // initialState 의 todos 를 기준으로 진행됨
  // CombineReducers 참고
  const { items } = state;
  switch(action.type) {
    case INPUT:
      return {
        items: [...items, Object.assign({}, SCEHEMA.LIST, { value: action.value })]
      }
    case REMOVE:

      /* const dotP = dotProp.delete(items, action.idx);
      console.log('dotP', dotP); */
      return {
        items: dotProp.delete(items, action.idx)
      };

      // basic
      /* return {
        items: [
          ...items.slice(0, action.idx),
          ...items.slice(action.idx + 1, items.length)
        ]
      } */
    case TOGGLE:

      /* const dotP = dotProp.toggle(items, `${action.idx}.isDone`);
      console.log('dotP', dotP); */
      return {
        ...state,
        items: dotProp.toggle(items, `${action.idx}.isDone`)
      }


      /* return {
        ...state,
        items: [
          ...items.slice(0, action.idx),
          {
            ...items[action.idx],
            isDone: !items[action.idx].isDone
          },
          ...items.slice(action.idx + 1, items.length)
        ]
      }; */

    case DATALOADBEFORE:
      return Object.assign({}, state, { items:[] });

    case DATALOADCOMPLETE:
      console.log('DATAComplete', action);
      const { data } = action.datas.data;
      return {
        ...state,
        items: [...items, ...data]
      }

    case DATALOADFAIL:
      console.log('DATALOADFAIL');
      return state;

    default:
      return state;
    }
}


const loadStatusReducer = (state = initialState, action) => {
  switch(action.type) {
    case DATALOADBEFORE:
      return Object.assign({}, state, { nowStatus: true });

    case END_CONNECTION:
      return Object.assign({}, state, { nowStatus: false });

    /* case DETAILVIEW:
      return Object.assign({}, state, { nowStatus: true }); */

    default:
      return state;
    }
}

const locationReducer = (state = initialState, action) => {
  switch(action.type) {
    case '@@router/LOCATION_CHANGE':
      console.log('@@router/LOCATION_CHANGE', action.payload);
      return action.payload;
    default:
      return state;
  }
};

// actions
export const INPUT = 'INPUT';
export const REMOVE = 'REMOVE';
export const TOGGLE = 'TOGGLE';

export const DATALOADBEFORE = 'DATALOADBEFORE';
export const DATALOAD = 'DATALOAD';
export const DATALOADCOMPLETE = 'DATALOADCOMPLETE';
export const DATALOADFAIL = 'DATALOADFAIL';
export const END_CONNECTION = 'END_CONNECTION';

export default combineReducers({
  todos: todoReducer,
  status: loadStatusReducer,
  locationInfo: locationReducer
})
