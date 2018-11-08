const initialState = {
  items: []
}

const scehema = {
  title: '',
  isDone: false
}

// reducer
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case INPUT:
      return [...state, Object.assign({}, scehema)];
    default:
      return state;
  }
}

// actions
export const INPUT = 'INPUT';

// action creators
export function inputExcute() {
  console.log('inputExcute');
  return {
    type: INPUT
  }
};

