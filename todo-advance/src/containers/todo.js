import React, { Component } from 'react';

import PageTemplate from '../components/pageTemplate';
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';
import Validation from '../components/validation';
import StatusBar from '../components/status';

import * as actions from '../reducer/ducks';

import { connect } from 'react-redux';

class TodoContainer extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    this.props.dataLoad();
  }

  render() {
    return (
      <React.Fragment>
        <PageTemplate>
          <StatusBar nowStatus={this.props.nowStatus} />
          <TodoInput validate={Validation} onInsert={this.props.onInsert} />
          <TodoList
            items={this.props.items}
            onRemove={this.props.onRemove}
            onToggle={this.props.onToggle}
          />
        </PageTemplate>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    nowStatus: state.nowStatus,
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // init data Load (Using by Container)
    dataLoad() {
      dispatch({type: actions.DATALOAD});
    },

    // add to todo in list (Using by TodoInput)
    onInsert(value) {
      dispatch({type: actions.INPUT, value});
    },

    // remove to todo in list (Using by TodoList)
    onRemove(idx) {
      dispatch({type: actions.REMOVE, idx});
    },

    // toggle to todo in list (Using by TodoList)
    onToggle(idx) {
      dispatch({type: actions.TOGGLE, idx});
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
