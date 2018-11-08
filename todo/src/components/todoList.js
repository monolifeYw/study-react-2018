import React, { Component } from 'react';
import TodoItem from './todoItem';


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div>
        <TodoItem done>완료된 부분</TodoItem>
        <TodoItem>진행하는 부분</TodoItem>
      </div>
    );
  }
}

export default TodoList;
