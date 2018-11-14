export const initialState = {
  items: [],
  nowStatus: false
}

const scehema = {
  value: '',
  isDone: false
}

// reducer
export default function reducer(state = initialState, action) {
  const { items } = state;

  console.log('reducer', action);
  switch(action.type) {
    case INPUT:
      return {
        items: [...items, Object.assign({}, scehema, { value: action.value })]
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
      return Object.assign({}, state, { nowStatus: true });

    case DATALOADCOMPLETE:
      console.log('DATAComplete', action);
      const { data } = action.datas.data;
      return {
        items: [...items, ...data]
      }
      // return state;

    case DATALOADFAIL:
      console.log('DATALOADFAIL');
      return state;

    case END_CONNECTION:
      return Object.assign({}, state, { nowStatus: false });

    case '@@router/LOCATION_CHANGE':
      console.log('@@router/LOCATION_CHANGE', action.payload);
      return state;

    default:
      return state;
  }
}

// actions
export const INPUT = 'INPUT';
export const REMOVE = 'REMOVE';
export const TOGGLE = 'TOGGLE';
export const DATALOADBEFORE = 'DATALOADBEFORE';
export const DATALOAD = 'DATALOAD';
export const DATALOADCOMPLETE = 'DATALOADCOMPLETE';
export const DATALOADFAIL = 'DATALOADFAIL';
export const END_CONNECTION = 'END_CONNECTION';



// action creators
export function inputExcute(value = '') {
  console.log('inputExcute', value);
  return {
    type: INPUT,
    value
  }
};

export function remove(idx) {
  return {
    type: REMOVE,
    idx
  }
}

export function toggle(idx) {
  return {
    type: TOGGLE,
    idx
  }
}
