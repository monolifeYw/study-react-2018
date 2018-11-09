import { put, call, takeEvery, all } from 'redux-saga/effects';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

/*

put: Store 에 action 을 dispatch
call : 주어진 function 을 실행

*/

export function* helloSaga() {
  console.log('Hello Saga');
}

// worker saga : 비동기 증가 테스트 수행
export function* incrementAsync() {
  console.log('saga : incrementAsync');
  yield call(delay, 1000);
  yield put({
    type: 'INCREMENT'
  });
}

// watcher saga : 각각의 INCREMENT_ASYNC 에 increment
export function* watchIncrementAsync() {
  console.log('saga : watchIncrementAsync');
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

// Start to all sagas
export default function* rootSaga() {
  /* yield [
    incrementAsync(),
    watchIncrementAsync()
  ]; */
  yield all([
    // incrementAsync(),
    watchIncrementAsync()
  ])
}
