export default function(state = null, action) {
  console.log('reducer_active_book', state, action);

  switch(action.type) {
    case 'BOOK_SELECTED':
    // 중요 : 언제나 원본 오브젝트를 반환해야 한다.
      return action.payload;
  }

  return state;
}
