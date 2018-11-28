import React, { Component } from 'react';
import styled from 'styled-components';

const ListWrap = styled.div`
  padding: 1rem;
  display: flex;
  cursor: pointer;

  .text {
    word-break: break-all;
    flex:1;
    &.hide {
      text-decoration: line-through;
    }
  }

  .remove {
    margin-left: 1rem;
    color: #f00;
    font-size: 0.8rem;
  }

  .view {
    margin-left: 1rem;
    color: green;
    font-size: 0.8rem;
  }

`;


class TodoItem extends Component {


  //@todo 분석 필요 - error 코드 : 삭제 시에 갱신 안됨
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[TodoItem] shouldComponentUpdate', nextProps, nextState, this.props);
    return !(nextProps.done === this.props.done)
    // return true;
  } */

  render() {
    const {done, children, onToggle, onRemove, onDetailView} = this.props;
    // console.log('onDetailView', onDetailView);
    return (
      <ListWrap onClick={() => onToggle()}>
        <input type="checkbox" checked={done} readOnly />
        <div className={done ? "text hide" : "text"}>{children}</div>
        <div className="view" onClick={(e) => {
          e.stopPropagation();
          onDetailView();
        }}>[Detail]</div>
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}>[Remove]</div>
      </ListWrap>
    );
  }
}

export default TodoItem;
