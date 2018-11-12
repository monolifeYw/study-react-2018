import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../reducer/ducks';

const TodoInputWrapper = styled.div`
  display: flex;
  padding: 1rem;

  input {
    flex: 1;
    font: 1.1rem;
    outline: none;
    border: none;
    background: transparent;
    border-bottom: 1px solid #000;
  }

  .add-button {
    font: 1.1rem;
    font-weight: 500;
    width: 5rem;
    height: 2rem;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    background: skyblue;
  }
`;

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.validate = this.props.validate || (() => {});
  }

 /*  validate() {
    return this.props.validate.bind(this) || (() => {});
  } */

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.onInsert();
    }
  }

  onInsert() {
    if (!this.validate(this.state.value)) {
      return;
    }

    this.props.onInsert(this.state.value);
    this.setState({
      value: ''
    });
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <TodoInputWrapper>
        {/* <input onChange={} value="" onKeyDown={handleKeyPress} /> */}
        <input
          onChange={e => this.onChange(e)}
          onKeyPress={e => this.handleKeyPress(e)}
          value={this.state.value}
        />
        <div className="add-button" onClick={() => this.onInsert()}>add</div>
      </TodoInputWrapper>
    );
  }
}

const mapDispatchToProp = (dispatch) => bindActionCreators({
  onInsert: actions.inputExcute
}, dispatch);

export default connect(null, mapDispatchToProp)(TodoInput);
