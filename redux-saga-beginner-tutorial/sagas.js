import { put, call, takeEvery, all } from 'redux-saga/effects';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

/*
이펙트 생성자는 항상 일반 객체를 만들기만 하고, 어느 다른 동작도 수행하지 않는다.
Saga는 명령을 담고 있는, 이펙트라 부르는 순수한 객체를 yield 할 것이고,
미들웨어는 이런 명령들을 해석해 처리하고, 그 결과를 다시 Saga에 돌려준다.
예를 들어 call(fn, arg1, arg2) 이펙트를 Saga에서 yield 했다면,
미들웨어는 fn(arg1, arg2);으로 수행하고 그 결과를 다시 Saga에 전달

function* 제너레이터 함수
- 일반 함수는 스스로 실행을 멈출 수 없음.
- 제너레이터-함수는 스스로 실행을 멈출 수 있음
- 제너레이터-함수 안에는 yield 구문이 존재
- yield : yield 구문의 문법은 return 구문과 비슷
--> return 구문은 한번만 실행되지만, 제너레이터-함수의 yield 구문은 여러번 실행
--> yield 구문은 제너레이터의 실행을 멈췄다가 다음에 다시 시작할 수 있게 만듬

put: Store 에 action 을 dispatch
call : 주어진 function 을 실행

- call이든 put이든 모두 직접적인 처리를 하지 않는다
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


// generator test
// function* 키워드로 작성하는 함수는 제너레이터가 아닌 제너레이터함수
// 제너레이터함수를 호출하면 반환되는 객체가 바로 제너레이터
// 제너레이터는 이터레이터(Iterator) 프로토콜과 이터러블(Iterable) 프로토콜을 따른다.
// 이터러블 프로토콜 : obj[Symbol.iterator]: Function => Iterator
export function* myGeneratorFunc() {
  yield 1;
  yield 2;
  yield 3;
}

export function* excuteGenerator() {
  const generator = myGeneratorFunc();

  console.log(typeof generator.next);
  // generator.next();


  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2
  console.log(generator.next().value); // 3

  // function
  console.log(typeof generator[Symbol.iterator]);

  // return iterator
  const iterator = generator[Symbol.iterator]();
  console.log(iterator);

  // object, ["value", "done"]
  console.log(typeof iterator.next(), Object.keys(iterator.next()));
}











// Start to all sagas
export default function* rootSaga() {
  /* yield [
    incrementAsync(),
    watchIncrementAsync()
  ]; */
  yield all([
    // incrementAsync(),
    excuteGenerator(),
    watchIncrementAsync()
  ])
}
