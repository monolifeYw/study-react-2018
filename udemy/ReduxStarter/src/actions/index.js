export function selectBook(book) {
  console.log('selected book is a ', book.title);
  // 선택한 book 은 액션 생성자이고, 액션 반환이 필요
  // Type Property Object

  // 액션은 두개의 값인데 타입과 페이로드
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

