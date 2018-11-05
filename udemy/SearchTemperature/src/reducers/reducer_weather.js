import { FETCH_WHETHER } from '../actions';

export default function (state = [], action) {
  // console.log('[reducer receive weather]', action);
  console.log('reducer_weather state : ', action);

  if (action.payload && action.payload.data) {
    // console.log('action payload : ', action.payload.data);
    // console.log('action payload : ', [action.payload.data]);
    // console.log('action payload : ', Object.prototype.toString.call(action.payload.data.list));
  }

  if (action.error) {
    console.log('error', state);
    return state;
  }

  switch(action.type) {
    case FETCH_WHETHER:
      // ... : 배열에서 모든 엔트리를 가져와서 새 배열에 집어넣는다.
      return [ action.payload.data, ...state ];
      // return state.concat([ action.payload.data ]);
  }

  return state;
}
