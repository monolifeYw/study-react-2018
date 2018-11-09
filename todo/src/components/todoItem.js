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

`;


class TodoItem extends Component {
  render() {
    const {done, children, onToggle, onRemove, idx} = this.props;
    return (
      <ListWrap onClick={() => onToggle(idx)}>
        <input type="checkbox" checked={done} readOnly />
        <div className={done ? "text hide" : "text"}>{children}</div>
        <div className="remove" onClick={(e) => {
          e.stopPropagation();
          onRemove(idx);
        }}>[Remove]</div>
      </ListWrap>
    );
  }
}

export default TodoItem;
