import React, { Component } from 'react';
import PageTemplate from './pageTemplate';
import TodoInput from './todoInput';
import TodoList from './todoList';
import Validation from './validation';

export default class App extends Component {
  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInput validate={Validation} />
          <TodoList />
        </PageTemplate>
      </div>
    );
  }
};
