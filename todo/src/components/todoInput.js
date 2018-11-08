import React from 'react';
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

const TodoInput = ({onInsert}) => {

  // enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onInsert();
    }
  }

  return (
    <TodoInputWrapper>
      {/* <input onChange={} value="" onKeyDown={handleKeyPress} /> */}
      <input onKeyDown={handleKeyPress} />
      <div className="add-button" onClick={() => onInsert()}>add</div>
    </TodoInputWrapper>
  );
}

const mapDispatchToProp = (dispatch) => bindActionCreators({
  onInsert: actions.inputExcute
}, dispatch);

export default connect(null, mapDispatchToProp)(TodoInput);
