/*
// Application State
Datas: {
    books: [{title: ‘harry porter’}, {title: ‘javascript’}], // > Books Reducer
    activeBook: {title: ‘javascript: The good parts’}  // > ActiveBook Reducer
}
*/

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';



// combileReducers : state 를 mapping, 이때 리덕스가 어플리케이션 스테이트를 생성
// - 실행하게 되면 싱글 스테이트인 books 와 그것의 값들인 BooksReducer 를 반환
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
