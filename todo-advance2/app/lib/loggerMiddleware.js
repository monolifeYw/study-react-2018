export default store => next => action => {
  // 현재의 스토어 값
  console.log(store);
  console.log('[Logger] current status : ', store.getState());

  // action 기록
  console.log('[Logger] action : ', action);

  // action 을 다음 미들웨어 or 리듀서로 넘긴다.
  const result = next(action);

  console.log('[Logger] next status : ', store.getState());
  console.log('\n');

  return result;
}
