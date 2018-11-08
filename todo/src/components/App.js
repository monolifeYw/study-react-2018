import React, { Component } from 'react';
import PageTemplate from './pageTemplate';
import TodoInput from './todoInput';
import TodoList from './todoList';

export default class App extends Component {
  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInput />
          <TodoList />
        </PageTemplate>
      </div>
    );
  }
};
