const initialState = {
  items: []
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
    default:
      return state;
  }
}

// actions
export const INPUT = 'INPUT';
export const REMOVE = 'REMOVE';
export const TOGGLE = 'TOGGLE';


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
