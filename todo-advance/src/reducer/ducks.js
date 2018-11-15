import { combineReducers } from 'redux';

export const initialState = {
  // todos
  todos: {
    items: []
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
  const { items } = state;
  switch(action.type) {
    case INPUT:
      return {
        items: [...items, Object.assign({}, SCEHEMA.LIST, { value: action.value })]
      }
    case REMOVE:
      return {
        // items: items.slice(0, items.length - 1)
        items: [
          ...items.slice(0, action.idx),
          ...items.slice(action.idx + 1, items.length)
        ]
      }
    case TOGGLE:
      return {
        items: [
          ...items.slice(0, action.idx),
          {
            ...items[action.idx],
            isDone: !items[action.idx].isDone
          },
          ...items.slice(action.idx + 1, items.length)
        ]
      };

    case DATALOADBEFORE:
      return Object.assign({}, state, { items:[] });

    case DATALOADCOMPLETE:
      console.log('DATAComplete', action);
      const { data } = action.datas.data;
      return {
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
