import { FETCH_WHETHER } from '../actions';

export default function (state = null, action) {
  console.log('[reducer receive weather]', action);

  switch(action.type) {
    case `${FETCH_WHETHER}`:
      return action.payload;
  }

  return state;
}
