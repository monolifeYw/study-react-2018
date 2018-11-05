import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {

    // 조건부 렌더링
    if (!this.props.activeBook) {
      return (
        <div>Select a book to get started!</div>
      );
    }

    return (
      <div>
        <h2>Details for : </h2>
        {/* <div>{this.props.activeBook && this.props.activeBook.title}</div> */}
        <div>title : {this.props.activeBook.title}</div>
        <div>pages : {this.props.activeBook.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state);
  return {
    activeBook: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail);
