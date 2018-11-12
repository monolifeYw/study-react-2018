import React, { Component } from 'react';
import PageTemplate from './pageTemplate';
import TodoInput from './todoInput';
import TodoList from './todoList';
import Validation from './validation';
import StatusBar from './status';

import * as actions from '../reducer/ducks';

import { connect } from 'react-redux';

class App extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    this.props.dataLoad();
  }

  render() {
    return (
      <div>
        <PageTemplate>
          <StatusBar nowStatus={this.props.nowStatus} />
          <TodoInput validate={Validation} />
          <TodoList />
        </PageTemplate>
      </div>
    );
  }
};

function mapStateToProps({nowStatus}) {
  return {
    nowStatus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dataLoad() {
      dispatch({type: actions.DATALOAD})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
