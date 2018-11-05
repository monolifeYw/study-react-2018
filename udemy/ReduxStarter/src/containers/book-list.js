import React, {Component} from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    console.log('[Render]BookList');
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}
        >
          {book.title}
        </li>
      );
    });
  }

  render () {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// 목적 : 어플리케이션 스테이트를 요소로 가짐
// - 어플리케이션 스테이트를 가져와서(return 형태) bookList 안의 Props 형태로 보여진다.
function mapStateToProps(state) {
  return {
    // reducer 에서 설정된 Property name 을 사용
    books: state.books
  };
}

// action
function mapDispatchToProps(dispatch) {
  // selectBook 이 호출될 때마다 결과는 리듀서로 전달되어야 함
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// 컨테이너는 리덕스에 속한 스테이트를 다룰 수 있는 컴포넌트
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
