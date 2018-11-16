import React, { Component } from 'react';
import TodoItem from './todoItem';

export default class TodoList extends Component {
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
      onToggle,
      onDetailView
    } = this.props;

    return (
      <div>
        {/* <TodoItem done>완료된 부분</TodoItem>
        <TodoItem>진행하는 부분</TodoItem> */}
        {items.map((item, idx) => {
          return (
            <TodoItem
              key={idx}
              idx={idx}
              done={item.isDone}
              onToggle={() => onToggle(idx)}
              onRemove={() => onRemove(idx)}
              onDetailView={() => onDetailView({
                idx,
                item: Object.assign({}, item)
              })}
            >{item.value}</TodoItem>
          );
        })}
      </div>
    );
  }
}
