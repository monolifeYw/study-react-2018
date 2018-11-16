import React, { Component } from 'react';

import PageTemplate from '../components/pageTemplate';
import TodoInput from '../components/todoInput';
import TodoList from '../components/todoList';
import Validation from '../components/validation';
import StatusBar from '../components/status';
import Todomodal from './todoModalContainer';

import * as actions from '../reducer/ducks';

import { connect } from 'react-redux';

class TodoContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.modal = null;

    this.setModal = this.setModal.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount', this.props);
    this.props.dataLoad();
  }

 /*  shouldComponentUpdate(nextProps, nextState) {
    console.log('[TodoContainer] shouldComponentUpdate', nextProps, nextState, this.props);
    return true;
  } */

  setModal(selectInfo) {
    this.modal = selectInfo;
    this.setState({
      isModalOpen: true
    });
  }

  render() {

    const {
      nowStatus,
      testRandom,
      items,
      onInsert,
      onRemove,
      onToggle
    } = this.props;

    console.log(this.modal);
    return (
      <React.Fragment>
        <PageTemplate>
          <StatusBar nowStatus={nowStatus} />
          <TodoInput validate={Validation} onInsert={onInsert} />
          <TodoList
            items={items}
            onRemove={onRemove}
            onToggle={onToggle}
            onDetailView={this.setModal}
          />
        </PageTemplate>

        <p>{testRandom}:::::::{Math.random() * 1}</p>

        {this.state.isModalOpen && <Todomodal
          idx={this.modal.idx}
          title={this.modal.item.value}
          done={this.modal.item.isDone ? 'Finished' : 'Doing' }
          onClose={() => this.setState({ isModalOpen: false })}
        />}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  console.log('[mapStateToProps]', state);

  const { status, todos } = state;

  return {
    nowStatus: status.nowStatus,
    items: todos.items,
    testRandom: todos.testRandom
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
