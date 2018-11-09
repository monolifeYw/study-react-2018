import React, { Component } from 'react';
import TodoItem from './todoItem';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../reducer/ducks';


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  render() {
    console.log('[todolist render]', this.props);

    const {
      items,
      onRemove,
      onToggle
    } = this.props;

    return (
      <div>
        {/* <TodoItem done>완료된 부분</TodoItem>
        <TodoItem>진행하는 부분</TodoItem> */}
        {items.map((item, idx) => {
          return (
            <TodoItem key={idx} idx={idx} done={item.isDone} onToggle={onToggle} onRemove={onRemove}>{item.value}</TodoItem>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onRemove: actions.remove,
  onToggle: actions.toggle
}, dispatch);

const mapStateToProps = (state) => {
  console.log('[mapStateToProps]', state);
  return {
    items: state.items
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
