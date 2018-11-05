import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
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

// 컨테이너는 리덕스에 속한 스테이트를 다룰 수 있는 컴포넌트
export default connect(mapStateToProps)(BookList);
